const router = require("express").Router();
const {
  create,
  findAll,
  deleteOne,
  updateOne,
  deleteAll,
} = require("../controllers/inventory");

router.route("/").get(findAll).post(create);
router.route("/:id").delete(deleteOne).put(updateOne);

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
