import { Router } from "express";

import { submitFeedback } from "../controllers/feedback.controller.js";

const router = Router();

router.route("/feedbacks").post(submitFeedback)

export default router;