const { Docker } = require("node-docker-api");
const docker = new Docker();

var containerStatus = null;

function getContainer() {
    return docker.container.get('steamapp');
}

async function runContainer(steamAppId) {
    
    containerStatus = "starting";
    try {
        getContainer().kill().catch(() => { return }).finally(() => docker.container.prune())
    } catch {
        console.log("existing container not found");
    } finally {
        return docker.container.create({
            Image: 'steamcmd/steamcmd',
            name: 'steamapp',
            Cmd: ["+login", "anonymous", `+app_update ${steamAppId}  +quit`],
            HostConfig: {
                AutoRemove: true
            }
        })
        .then(container => container.start())
        .then(() => containerStatus = "started")
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

async function stopContainer() {
    return getContainer().kill()
    .then(() => setTimeout(() => docker.container.prune(), 1000))
    .then(() => { containerStatus = "offline" })
    .catch(() => { docker.container.prune() });
}

async function getContainerStatus(resp) {
    getContainer().stats().then((stats) => {
        stats.on('data', (data) => {
            const chunk = JSON.parse(data);
            if (chunk.cpu_stats.cpu_usage.total_usage > 0) {
                resp.send({ status: "online" })
            } else {
                resp.send({ status: "offline"})
            }
            stats.destroy();
        });
        stats.on('error', err => resp.send(err));
    }).catch((err) => {
        if (containerStatus === "starting") {
            resp.send({ status: "starting"});
        } else {
            resp.send({ status: "offline" })
        }
    });
}

async function getLog(resp) {
    return getContainer().logs({
        stdout: true,
        stderr: true,
        follow: false
    }).then(stream => {
        var data = [];
        stream.on('data', (chunk) => {
            chunk.toString().split('\n').forEach(element => {
                data.push({"data": element.substring(8)})
            });
        });
        stream.on('end', () => {
            resp.send(data);
        })
    })
    .catch((err) => {
        if (containerStatus === "starting") {
            resp.send({data: "Container is starting..."})
        } else {
            resp.send({data: "Container is stopped" });
        }
    });
}

module.exports = { stopContainer, getLog, runContainer, getContainer, getContainerStatus };