import { Router } from "express";

import { getTop10WordsFromLastWeeksPost } from "../controllers/posts";

const router = Router();

router.get("/toptenwords", getTop10WordsFromLastWeeksPost);

export default router;
