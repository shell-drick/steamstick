const { Docker } = require("node-docker-api");
const docker = new Docker({ socketPath: '/var/run/docker.sock' });
const os = require("os");

function getContainer() {
    console.log(os.platform());
    return docker.container.get('steamapp');
}

async function runContainer(steamAppId) {
    try {
        getContainer().kill().then(() => docker.container.prune({ }))
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

async function getContainerStatus() {
    return getContainer().stats()
}

async function getLogStream(consumer) {
    return getContainer().logs({
        stdout: true,
        stderr: true,
        follow: true
    }).then(stream => {
        stream.on('data', data => consumer(data));
        // stream.on('end', resolve);
        // stream.on('error', reject)
    });
}

module.exports = { getLogStream, runContainer, getContainer, getContainerStatus };