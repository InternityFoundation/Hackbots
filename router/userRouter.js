const express = require("express");
let userRouter = express.Router();
let {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUser
} = require("../controller/userController");
let {
  loginUser,
  userSignUp,
  protectRoute,
  forgetPassword,
  resetPassword,
  logoutUser,updateMyPassword
} = require("../controller/authController");
// handler
// routers
userRouter
  .route("")
  .get(getAllUser)
  .post(createUser);
// authentication routes
// resource
userRouter.route("/login").post(loginUser);
userRouter.route("/signup").post(userSignUp);
userRouter.route("/logout").get(logoutUser);

userRouter.route("/forgetPassword").post(forgetPassword);
userRouter.route("/resetPassword/:token").patch(resetPassword);


userRouter.route("/updateUser").patch(protectRoute, updateUser);
userRouter.route("/password").patch(protectRoute,updateMyPassword);




userRouter
  .route("/:id")
  .get(protectRoute, getUser)
  .patch(protectRoute, updateUser)
  .delete(deleteUser);
module.exports = userRouter;
