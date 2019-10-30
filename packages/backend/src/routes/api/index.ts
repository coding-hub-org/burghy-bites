import { Router } from "express";

import loginRoute from "../../routes/api/login";
import registerRoute from "../../routes/api/register";
import venuesRoute from "../../routes/api/venues";
import logoutRoute from "../../routes/api/logout";
import comments from "../../routes/api/comments";

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
