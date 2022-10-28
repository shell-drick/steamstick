// import { Docker } from "node-docker-api";
const { Docker } = require("node-docker-api");
const docker = new Docker({ socketPath: '/var/run/docker.sock' });

const promisifyStream = stream => new Promise((resolve, reject) => {
  stream.on('data', data => console.log(data.toString()))
  stream.on('end', resolve)
  stream.on('error', reject)
});


function getContainer() {
    return docker.container.get('steamapp');
}

function runContainer(steamAppId) {
    docker.container.create({
        Image: 'steamcmd/steamcmd',
        name: 'steamapp',
        Cmd: ["+login", "anonymous", `+app_update ${steamAppId} +quit`]
    }).then(container => container.start()).catch(error => console.log(error));
}

function getLogs() {
    return docker.container.get('steamapp').logs({
        stdout: true,
        stderr: true,
        follow: true
    }).then(stream => {
        stream.on('data', info => console.log(info));
        stream.on('error', error => console.log(error));
    })
}

function killContainer() {
        return docker.container.get('steamapp').delete({ force: true }).then(() => { console.log("removed existing instance")}).catch(error => { 
            docker.container.prune();
            setTimeout(() => { console.log("removed stopped instance") }, 5000);
        })

}


function newContainer(steamAppId) {
    killContainer().then(() => {
        runContainer(steamAppId);
    })
}

module.exports = { newContainer, killContainer, getContainer };
