import { app } from "./data/server"
import { createRouter } from "./routes/createRouter";
import { walkRouter } from "./routes/walkRouter";


app.use("/dog-walk", createRouter);
app.use("/walk", walkRouter);