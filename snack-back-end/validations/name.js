const name = (req, res, next) => {
  let array = req.body.name.split(" ");
  let newName = [];
  for (let item of array) {
    if (item.length > 2) {
      newName.push(item[0].toUpperCase() + item.slice(1).toLowerCase());
    } else {
      newName.push(item);
    }
  }
  req.body.name = newName.join(" ");
  next();
};

module.exports = name;
