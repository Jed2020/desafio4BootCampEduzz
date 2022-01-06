import express from 'express';
import config from 'config';
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";
import db from "./db";

const app = express();

app.use(
    cors({
      origin: config.get("corsOrigin"),
    })
  );

const port = config.get("port");

// parse application/json
app.use(bodyParser.json());

app.listen(4000, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
    db();
    routes(app);
    
});