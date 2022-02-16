const healthy = (req, res, next) => {
  if (
    req.body.protein === "" ||
    req.body.fiber === "" ||
    req.body.added_sugar === ""
  ) {
    req.body.is_healthy = null;
  } else if (
    req.body.protein >= 5 ||
    req.body.fiber >= 5 ||
    req.body.added_sugar < 5
  ) {
    req.body.is_healthy = true;
  } else {
    req.body.is_healthy = false;
  }
  next();
};
module.exports = healthy;
