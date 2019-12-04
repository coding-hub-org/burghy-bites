import { Router } from "express";
const router: Router = Router();

router.get("/", (_req, res): void => {
  console.log("CHECK");
  res.status(200).send("This is the login page!");
});

router.patch("/", (_req, res): void =>{
  console.log("LOG IN");
  res.status(200).send("You try to login");  
});

export default router;
