import { Router, response } from 'express';

const routes = Router();

routes.get('/', () => {
    return response.json({ message: 'Hello World' });
});

export default routes;