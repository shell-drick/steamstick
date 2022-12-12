const express = require("express");
const { stopContainer, getContainerStatus, runContainer, getLog} = require("./runContainer");
const app = express();
const router = express.Router();
const path = require("path");


router.get('/status', (req, res) => {
    getContainerStatus(res);
})

router.get('/console', (req, res) => {
    try {
        getLog(res);
    } catch {
        res.send("Container not active");
    }
})

router.get('/start/:id', (req, res) => {
    runContainer(req.params.id)
    .then((container) => res.send("success"));
})

router.get('/stop', (req, res) => {
    stopContainer()
    .then(() => res.send("success")); 
})

app.use('/', express.static("../build"));
app.use('/container', router);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
    if (err) {
      res.status(404).send(err)
    }
  })
})

const port = 5000;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
})