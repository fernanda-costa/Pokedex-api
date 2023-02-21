import express from 'express';
import controller from '../controllers/usuario-controller';
const router = express.Router();

router.get('/usuarios', controller.getUsuarios);
router.get('/usuario', controller.getUsuario);

export = router;