import {Router} from 'express';
<<<<<<< HEAD
=======

>>>>>>> 825fc880417279611758af0534bb9cd8cce7f64a
const router : Router = Router();

router.get("/", (_req, res):void=>{
    res.status(200).send("This is main dishes");
});
router.get("/:param",(_req, res):void=>{
    res.status(200).json(
        {
            confirmation:true,
            data:{
                name:_req.params.param,
                calories:100000,
                isHealthy:true,
                recipe:["sugar","american cheese","tomato","blueberry","tuna","weed"]
            }
        }
    );
});

export default router;