import { Router } from "express";

import { getTop10WordsFromLast25Stories } from "../controllers/stories";

const router = Router();

router.get("/toptenwords", getTop10WordsFromLast25Stories);

export default router;
