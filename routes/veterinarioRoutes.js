import  express  from "express";
const router = express.Router();

import { 
    perfil,
    registrar, 
    confirmar, 
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    actualizarPerfil,
    actualizarPassword
 } from "../controllers/veterinarioControllers.js";
import checkAuth from "../middleware/authMiddleware.js";

//Area PUBLICA
router.post("/", registrar);

router.get("/confirmar/:token", confirmar); //parametro dinamico ... para leerlo se utiliza: console.log(rq.params.token) o cualquier nombre que le hayas dado

router.post("/login", autenticar);

router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

//AREA PRIVADA
router.get("/perfil", checkAuth, perfil);
router.put('/perfil/:id', checkAuth, actualizarPerfil)
router.put('/actualizar-password', checkAuth, actualizarPassword)


export default router;