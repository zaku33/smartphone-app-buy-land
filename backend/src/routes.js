const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const ProjectController = require("./controllers/ProjectController.js");
const NewsController = require("./controllers/NewsController.js");

const routes = express.Router();

routes.get("/getNews", NewsController.getNews);
routes.get("/searchNews", NewsController.getNewsByQuery);


routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      pin: Joi.string().required().length(2),
    }),
  }),
  OngController.create
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentController.index
);

// .........authorization is removed (uncomment this)..............
// routes.get('/project', celebrate({
//   [Segments.HEADERS]: Joi.object({
//     authorization: Joi.string().required(),
//   })
// }), ProjectController.index);

//................copy of project api listed above (comment this)......
routes.get(
  "/project",
  celebrate({
    [Segments.HEADERS]: Joi.object(),
  }),
  ProjectController.index
);

// .........authorization is removed(uncomment this )...................
// routes.get('/project/:id/task',
//  celebrate({[Segments.HEADERS]: Joi.object({
//     authorization: Joi.string().required(),
//   }).unknown(),
//  }),
// ProjectController.getTasksByPrjId);

//.......copy of task api listed above (comment this)...............
routes.get(
  "/project/:id/task",
  celebrate({ [Segments.HEADERS]: Joi.object().unknown() }),
  ProjectController.getTasksByPrjId
);

routes.post("/project", ProjectController.create);

routes.post("/incidents", IncidentController.create);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentController.delete
);

module.exports = routes;
