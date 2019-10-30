import { Router } from "express";

import apiRoute from ".";

const router: Router = Router();

router.use("/api/routes/login", apiRoute);

router.get("/", (_req, res): void => {
  res.status(200).send("This is the login page!");
});

export default router;
