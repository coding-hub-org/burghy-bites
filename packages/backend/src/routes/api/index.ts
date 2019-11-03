import { Router } from "express";

import loginRoute from "./login";
import registerRoute from "./register";
import venuesRoute from "./venues";
import logoutRoute from "./logout";
import comments from "./comments";

const router: Router = Router();

router.get("/", (_req, res): void => {
  res.status(200).json({ message: "Hello world!" });
});

router.use("/login", loginRoute);
router.use("/register", registerRoute);
router.use("/venues", venuesRoute);
router.use("/logout", logoutRoute);
router.use("/comments", comments);

export default router;
