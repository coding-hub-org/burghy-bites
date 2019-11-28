import { Router } from "express";
import {Review} from "../../models/Review";
const router: Router = Router();

router.get("/", (_req, res): void => {
  res.status(200).send("comment page");
});
router.get("/:venue/:dish/",(_req, res):void=>{
  Review.find({forDish: _req.params.dish, forVenue: _req.params.venue}, (err, reviews) =>{
    if (err){
      console.log(err);
      return;
    }    
    res.json(
      {
        confirmation:true,
        data:reviews
      }
    )
  });
});
export default router;
