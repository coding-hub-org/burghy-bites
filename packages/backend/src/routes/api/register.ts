import { Router } from "express";
import {sha256} from 'js-sha256';
import {User} from '../../models/User';
const router: Router = Router();

router.get("/", (_req, res): void => {
  res.status(200).send("This is the register page!");
});
router.post("/", (_req, res): void =>{
  console.log("SIGN UP");
  User.create({
    firstName:_req.body.firstName,
    lastName: _req.body.lastName,
    email: _req.body.email,
    hashedPass: sha256( _req.body.password),
    token: ''
  }, (err:any,user:any)=>{
    if (err) console.log(err);
    console.log(user);
    
  });
  res.status(200).send("You signing up");
})

export default router;
