import { Router } from "express";
import {User} from '../../models/User';
import {sha256} from 'js-sha256';
const router: Router = Router();

router.get("/", (_req, res): void => {
  console.log("CHECK");
  res.status(200).send("This is the login page!");
});

router.patch("/", (_req, res): void =>{
  let flag=true;
  User.findOne({email:_req.body.email},(err,user:any)=>{
    
    if (err) console.log(err);  
    console.log(user);
    if (!user || (sha256(_req.body.password) !== user.hashedPass))
      res.json(
        {
          confirmation:false
        }
      );
    else
        {
          res.status(200).json(
            {
              confirmation:true,
              data: user
            }
          );      
          
        }
    
  });
});

export default router;
