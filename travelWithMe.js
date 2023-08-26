import express from 'express';
import http from 'http';
import bodyParser from "body-parser";
import dotenv from "dotenv";
const app = express();
const server = http.createServer(app);
import cors from 'cors';
import autenticationRoute from "./routes/authenticationRoutes.js"


dotenv.config();
app.use(cors())
// Middlewares
// app.use(cors({
//     origin: "*",
//     methods: ["GET", "POST"],
//     credentials: true
// }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const route = express.Router()
//app.use(useragent.express());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    if (req.method === "OPTIONS") {
        res.header("ACCESS-CONTROL-ALLOW-METHODS", "PUT, POST, PATCH, GET, DELETE");
        return res.status(200).json({});
    }
    next();
});

app.use("/travel_with_me/autenticate", autenticationRoute);



const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`server connected to ${PORT}`);
});









