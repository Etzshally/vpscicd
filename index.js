import express from "express";
const app = express();

const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
    const { name, msg } = req.query;

    if (name && msg) {
        return res.json({
            message: `Hello ${name}, ${msg}`
        });
    } else {
        return res.json({
            message: `You've reached Shahpaal's VPS.`
        });
    }
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}...`);
});