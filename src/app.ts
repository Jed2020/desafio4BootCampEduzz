import express from 'express';
import config from 'config';

const app = express();

const port = config.get("port");

app.listen(4000, () => {
    console.log(`Application listening at http://localhost:${port}`);
});