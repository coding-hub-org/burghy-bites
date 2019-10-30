import { Router } from "express";

import apiRoute from ".";

const router: Router = Router();

router.use("/api/routes/register", apiRoute);

router.get("/", (_req, res): void => {
  res.status(200).send("This is the register page!");
});

export default router;
