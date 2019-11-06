import { Router } from "express";

const router: Router = Router();

router.get("/", (_req, res): void => {
  res.status(200).send("You logged out!");
});

export default router;
