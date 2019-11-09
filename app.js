// imports
const express = require("express");
const app = express();
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanatize = require("express-mongo-sanitize");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: "limit crossed by your IP " // limit each IP to 100 requests per windowMs
});
const cookieParser=require("cookie-parser");
//  apply to all requests
app.use(limiter);
app.use(helmet());
app.use(express.static("public"));
app.use(express.json());
// ("/api/plans/:id");
app.use(mongoSanatize());
app.use(cookieParser(),(req,res,next)=>{
// console.log(req.cookies.jwt);
next();
})
// view engine
app.set("view engine", "pug");
// views folder
app.set("views", "template");
const planRouter = require("./router/planRouter");
const userRouter = require("./router/userRouter");
const viewRouter = require("./router/viewRouter");
const diabetesRouter=require("./router/diabetesRouter");
app.use("/", viewRouter);
app.use("/api/user", userRouter);
//
// Middle ware
app.use("/api/plans", planRouter);
app.use("/api/forms", diabetesRouter);
// app.use("/signup")
// server
module.exports = app;
// const fs = require("fs");
// app.use(express());
// Middleware
// app.use("/",(req,res,next)=>{
//   console.log("Hi from middleWare 👌👌");
//   next();
// })
// handler function
// routes
// Routers=> incoming path => middlewares
// define
// app.get("/api/plans", getAllPlans);
// app.get("/api/user");
// app.get("/api/plans/:id", getPlan);
// app.get("/api/user/:id", getUser);

// app.post("/api/plans", createPlan);
// app.post("/api/user");

// app.patch("/api/plans/:id", updatePlan);
// app.patch("/api/user/:id", updateUser);

// app.delete("/api/plans/:id", deleteUser);
// app.delete("/api/user/:id", deletePlan);
