import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";

var app = express();
app.get("/", (req, res) => res.send("Welcome to KapeKape"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

export default app;
