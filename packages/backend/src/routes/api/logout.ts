import { Router } from "express";

const router: Router = Router();

router.get("/", (_req, res): void => {
  res.status(200).send("You logged out!");
});
router.patch("/",(_req, res): void=>{
  console.log("LOG OUT");
  res.status(200).send("You might logged out");
});

export default router;
