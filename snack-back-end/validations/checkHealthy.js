// const healthy = (req, res, next) => {
//   if (
//     req.body.protein === "" ||
//     req.body.fiber === "" ||
//     req.body.added_sugar === ""
//   ) {
//     req.body.is_healthy = null;
//   } else if (
//     req.body.protein >= 5 ||
//     req.body.fiber >= 5 ||
//     req.body.added_sugar < 5
//   ) {
//     req.body.is_healthy = true;
//   } else {
//     req.body.is_healthy = false;
//   }
//   next();
// };

const healthy = (snack) => {
  if (
    snack.protein === null ||
    snack.fiber === null ||
    snack.added_sugar === null
  ) {
    snack.is_healthy = null;
  } else if (
    (snack.protein >= 5 && snack.added_sugar < 5) ||
    (snack.fiber >= 5 && snack.added_sugar < 5)
  ) {
    snack.is_healthy = true;
  } else {
    snack.is_healthy = false;
  }
  return snack.is_healthy;
};

module.exports = healthy;
