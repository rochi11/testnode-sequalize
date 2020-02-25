import express, { json } from 'express';                    // Este archivo (app.js) sirve para configurar el servidor
import morgan from 'morgan';

// Importando rutas
// import sesionRouter from './routes/sesiones';
import userRouter from './routes/usuarios';
// import recomendationRoute from './routes/recomendaciones';
// import productRoute from './routes/productos';
// import purchasesRoute from './routes/compras';
// import categoriesRoute from './routes/categorias';
// import preferenceRoute from './routes/afinidad';

// Inicializacion
const app = express();

// Midlewares
app.use(morgan('dev'));
app.use(json());

// Routes
// app.use('/api/sesiones', sesionRouter);
app.use('/api/usuarios', userRouter);
// app.use('/api/recomendaciones', recomendationRoute);
// app.use('/api/productos', productRoute);
// app.use('/api/compras', purchasesRoute);
// app.use('/api/categorias', categoriesRoute);
// app.use('/api/preferencias', preferenceRoute);

export default app;