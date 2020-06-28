const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const NewsController = require("./controllers/NewsController");
const AuthController = require("./controllers/AuthController");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.post("/login", AuthController.userLogin);
routes.post("/register", UserController.userRegister);
routes.post("/forgotPass", UserController.resetUserPassword);

routes.get("/getNews", NewsController.getNews);
routes.get("/searchNews", NewsController.getNewsByQuery);

module.exports = routes;
