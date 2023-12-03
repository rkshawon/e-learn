import express from "express";
import cors from "cors";
import compression from "compression";
import http from "http";
import config from "../env-config";
import mongoose from "mongoose";
import router from "./routes/routes";

const app = express();
const port = config.port || 8001;
mongoose.set("strictQuery", false);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("This is a test route");
});

app.use("/api/v1", router);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(config.database_url);
  console.log("Mongodb database is connected successfuly");
}

server.listen(port, () => {
  console.log("Server runnig at", port);
});
