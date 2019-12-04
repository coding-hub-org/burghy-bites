import {Router} from 'express';
const router : Router = Router();
import {Dish} from '../../models/Dish';
router.get("/", (_req, res):void=>{
    res.status(200).send("This is main dishes");
});
router.get("/:venue/:dish/",(_req, res):void=>{
    Dish.findOne({name: _req.params.dish,venue: _req.params.venue}, (err,dish)=>{
        if (err){
            console.log(err);
            return;
        }
        res.json(
            {
                confirmation:true,
                data:dish
            }
        )
    });
});
router.get("/:venue/",(_req, res):void=>{
    Dish.find({venue: _req.params.venue}, (err,dishes)=>{
        if (err){
            console.log(err);
            return;
        }
        res.json(
            {
                confirmation:true,
                data:dishes
            }
        )
    });
});
export default router;