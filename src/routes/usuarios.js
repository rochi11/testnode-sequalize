import { Router } from 'express';
const router = Router();

import { createUsuario } from '../controllers/usuario.controller';

//   /api/usuarios/
router.post('/', createUsuario);

export default router;