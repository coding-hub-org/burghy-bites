import { Router } from "express";

const router: Router = Router();

router.get("/", (_req, res): void => {
  res.status(200).send("This is the login page!");
});

export default router;
