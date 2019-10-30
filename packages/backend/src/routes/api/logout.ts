import { Router } from "express";

import apiRoute from ".";

const router: Router = Router();

router.use("/api/routes/logout", apiRoute);

router.get("/", (_req, res): void => {
  res.status(200).send("You logged out!");
});

export default router;
