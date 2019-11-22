import {Router} from 'express';
const router : Router = Router();
import {Dish} from '../../models/Dish';
router.get("/", (_req, res):void=>{
    res.status(200).send("This is main dishes");
});
router.get("/:param",(_req, res):void=>{
    Dish.findOne({name: _req.params.param}, (err,dish)=>{
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

export default router;