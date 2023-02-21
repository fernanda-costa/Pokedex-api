import express from 'express';
import controller from '../controllers/usuario-controller';
const router = express.Router();

router.get('/usuarios', controller.getUsuarios);
router.post('/login', controller.login);

export = router;