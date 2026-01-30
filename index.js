import express from "express";
const app = express();

const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
    if (req.params.name && req.params.msg) {
        return res.json({
            message: `Hello ${req.params.name}, ${req.params.msg}.`
        });
    }
    else {
        return res.json({
            message: `You've reached the vps.`
        })
    }
});

app.listen(PORT, () => {
    console.log('App is listening on port 3000...');
});