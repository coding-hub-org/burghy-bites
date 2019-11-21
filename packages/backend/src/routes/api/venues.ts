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

router.get("/little-al's", (_req, res): void => {
  res.status(200).send("This is little-al's");
});
router.get("/clinton", (_req, res): void => {
  res.status(200).send("This is Clinton!");
});
router.get("/sundowner", (_req, res): void => {
  res.status(200).send("This is Sundowner");
});
router.get("/griddles", (_req, res): void => {
  res.status(200).send("This is griddles");
});
router.get("/sono", (_req, res): void => {
  res.status(200).send("This is SONO");
});
router.get("/subway", (_req, res): void => {
  res.status(200).send("This is Subway");
});
router.get("/tim-horton's", (_req, res): void => {
  res.status(200).send("This is Tim Horton's");
});
router.get("/samuel-d's", (_req, res): void => {
  res.status(200).send("This is Samuel D's");
});
router.get("/scoops", (_req, res): void => {
  res.status(200).send("This is Scoops");
});
export default router;
