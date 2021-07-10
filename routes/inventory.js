const router = require("express").Router();
const { create, findAll, deleteOne } = require("../controllers/inventory");

router.route("/").get(findAll).post(create);
router.route("/:id").delete(deleteOne);

module.exports = router;

// router.get("/", findAll);

// Retrieve a single Student with id
// router.get("/:id", inventory.findOne);

// Create a new Student
// router.post("/", create);

// Update a Student with id
//   router.put("/:id", inventory.update);

// Delete a Student with id
// router.delete("/:id", deleteOne);

// Delete all inventory
//   router.delete("/", inventory.deleteAll);
