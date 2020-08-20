import express, { response } from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsConstroller from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsConstroller();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;
