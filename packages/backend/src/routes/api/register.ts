import { Router } from "express";

const router: Router = Router();

router.get("/", (_req, res): void => {
  res.status(200).send("This is the register page!");
});
router.post("/", (_req, res): void =>{
  console.log("SIGN UP");
  res.status(200).send("You signing up");
})

export default router;
