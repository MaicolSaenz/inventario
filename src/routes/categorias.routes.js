import{Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controlles.js";
/* creamos el enrutador */
const router = Router();

/* configuramos respuesta metodo http get */
router.get("/",categoriaController.getCategorias)

/*hacemos disponible al router */
export default router;