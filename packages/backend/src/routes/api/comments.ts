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
router.post("/",(_req, res):void=>{
  console.log("COMMENT");
  Review.create({
    author:_req.body.author,
    forDish: _req.body.forDish,
    forVenue: _req.body.forVenue,
    content: _req.body.content,
    score: _req.body.score
  },(err:any,review:any)=>{
    if (err) console.log(err);
    console.log(review);
  });
  res.status(200).send("Comment");
});
export default router;
