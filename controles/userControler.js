const movieModel = require("../models/models");
exports.hello = (req, res, next) => {
  try {
    res.render("layout/layout",{admin:false});
  } catch (error) {
    next(error);
  }
};
