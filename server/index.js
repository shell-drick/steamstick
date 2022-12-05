const express = require("express");
const { getContainerStatus, runContainer, getLog} = require("./runContainer");
const app = express();
const router = express.Router();

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

app.use('/', express.static("../build"));
app.use('/container', router);

const port = 5000;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
})