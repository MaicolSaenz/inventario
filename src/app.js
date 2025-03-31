/*importamos al framework express */
import express from "express";

/* */
const app = express();

/*setear un puerto */
app.set("port",5000)

/*hacemos dispinible a mi server */
export default app;