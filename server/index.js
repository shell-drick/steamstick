const express = require("express");
const { getContainerStatus } = require("./runContainer");
const app = express();
const router = express.Router();

router.get('/status', (req, res) => {
    getContainerStatus().then(stats => {
        res.send(stats);
    })
})

router.post('/start', (req, res) => {
    console.log(req.body);
})

app.use('/', express.static("../build"));
app.use('/container', router);

const port = 3000;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
})