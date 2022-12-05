const { Docker } = require("node-docker-api");
const docker = new Docker({ socketPath: '/var/run/docker.sock' });

function getContainer() {
    return docker.container.get('steamapp');
}

function runContainer(steamAppId) {
    try {
        getContainer().kill().then(() => docker.container.prune({ }))
    } catch {
        console.log("existing container not found");
    } finally {
        docker.container.create({
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

function getContainerStatus() {
    getContainer().stats()
}

function getLogStream(consumer) {
    return getContainer().logs({
        stdout: true,
        stderr: true,
        follow: true
    }).then(stream => {
        stream.on('data', data => consumer(data));
        stream.on('end', resolve);
        stream.on('error', reject)
    });
}

module.exports = { getLogStream, runContainer, getContainer, getLogStream };