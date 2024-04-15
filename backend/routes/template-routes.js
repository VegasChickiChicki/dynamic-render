import express from "express";
import { templateController } from "../controllers/template-controller.js";

const templateRouter = express.Router();

templateRouter.get('/', templateController.getTemplate);

templateRouter.put('/', templateController.updateTemplate);

export {
	templateRouter
}
