import { Router } from "express";
import {Venue} from '../../models/Venue';
const router: Router = Router();



router.get("/", (_req, res): void => {
  Venue.find({}, (err, venues) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(
      {
        confirmation:true,
        data:venues
      }
    )
  });
});
router.get("/:name/",(_req, res):void=>{
  Venue.findOne({name: _req.params.name}, (err,venue)=>{
      if (err){
          console.log(err);
          return;
      }
      res.json(
          {
              confirmation:true,
              data:venue
          }
      )
  });
});

export default router;
