import "reflect-metadata"

import envConfig from "./start/envConfig";
envConfig()

import dataSource from "./start/dataSource";
dataSource.initialize()
    .then(() => console.log("connected to database"))
    .catch((e) => console.log("unable to connect to database", e.message))

import http from "http"
import app from "./app"
import getLocalIpAddress from "./utils/getLocalIp";

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Saucy running at localhost:${PORT}`))

const HOST = getLocalIpAddress()
http.createServer(app).listen({ host: HOST, port: PORT }, () => console.log(`Saucy running at ${HOST}:${PORT}`))