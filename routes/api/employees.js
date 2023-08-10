// sub directory

const express = require("express");
const router = express();
// const path = require("path");

// import controller
const empolyeesControllers = require("../../controllers/employeesController");

// Routing
// chain different http method
router
  .route("/")
  .get(empolyeesControllers.getAllEmployees)
  .post(empolyeesControllers.createNewEmplyees)
  .put(empolyeesControllers.updateNewEmployees)
  .delete(empolyeesControllers.deleteEmployees);

// other router
router.route("/:id").get(empolyeesControllers.getEmployee);

// export
module.exports = router;
