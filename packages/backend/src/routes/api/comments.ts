import { Router } from "express";

import apiRoute from ".";

const router: Router = Router();

router.use("/api/routes/comments", apiRoute);

router.get("/", (_req, res): void => {
  res.status(200).send("comment page");
});

export default router;
