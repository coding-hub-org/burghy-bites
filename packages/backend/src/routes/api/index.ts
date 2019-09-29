
import { Router } from "express";

const router: Router = Router();

router.get("/", (_req, res): void => {
    res.status(200).json({ message: "Hello world!" });
});

export default router;