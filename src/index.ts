import express from "express";
import cors from "cors";
import compression from "compression";
import http from "http";
import config from "../env-config";

const app = express();
const port = config.port || 8001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

const server = http.createServer(app);
app.get("/", (req, res) => {
  res.send("This is a test route");
});

server.listen(port, () => {
  console.log("Server runnig at", port);
});
