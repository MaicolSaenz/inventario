/*importamos al framework express */
import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js"
/* asignamos a app toda*/
const app = express();

/*setear un puerto */
app.set("port",5000)

/*routes*/
app.use("/api/categorias",categoriasRoutes)

/*hacemos dispinible a mi server */
export default app;