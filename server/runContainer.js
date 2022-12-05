const { Docker } = require("node-docker-api");
const docker = new Docker();

function getContainer() {
    return docker.container.get('steamapp');
}

async function runContainer(steamAppId) {
    
    try {
        getContainer().kill().then(() => docker.container.prune()).catch(() => { return })
    } catch {
        console.log("existing container not found");
    } finally {
        return docker.container.create({
            Image: 'steamcmd/steamcmd',
            name: 'steamapp',
            Cmd: ["+login", "anonymous", `+app_update ${steamAppId} +quit`],
            HostConfig: {
                AutoRemove: true
            }
        })
        .then(container => container.start())
        .catch(error => console.log(error));
    }
}

async function getLogs() {
    return getContainer().logs({
        stdout: true,
        stderr: true,
        follow: true
    })
}

async function getContainerStatus(resp) {
    getContainer().stats().then((stats) => {
        stats.on('data', (chunk) => {
            if (!resp.headersSent) {
                resp.send(chunk.toString());
            }
        });
        stats.on('error', err => resp.send(err));
    })
}

async function getLog(resp) {
    return getContainer().logs({
        stdout: true,
        stderr: true,
        follow: false
    }).then(stream => {
        var data = [];
        stream.on('data', (chunk) => {
            data.push({ "data": chunk.toString().substring(2) });
        });
        stream.on('end', () => {
            console.log(data);
            resp.send(data);
        })
    })
    .catch((err) => {
        resp.send(JSON.stringify({ "data": "Container is stopped..." }));
        console.log(JSON.stringify({ "data": "Container is stopped..." }));
    });
}

module.exports = { getLog, runContainer, getContainer, getContainerStatus };