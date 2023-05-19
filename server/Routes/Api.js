import Express from 'express';
import TagController from "../Controllers/TagController.js";

const router = Express.Router();

router.get("/tag", TagController.get);

export default router;