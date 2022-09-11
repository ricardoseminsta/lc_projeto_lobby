import express, { Request, Response, ErrorRequestHandler } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import visiterRoutes from './routes/visiterRoutes';
import doormanRoutes from './routes/doormanRoutes';

dotenv.config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.get('/ping', (req: Request, res: Response) => res.json({ pong: true }));

server.use(visiterRoutes);
server.use(doormanRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.render('pages/404');
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400); // Bad Request
    console.log(err);
    res.json({ error: 'Ocorreu algum erro.' });
}
server.use(errorHandler);

server.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});