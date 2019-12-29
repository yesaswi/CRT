const router = require("express").Router();
const Student = require("../models/Student");
const { registerValidation } = require("../validation");

router.post("/register", async (req, res) => {
  //Validating the entered data
  try {
    const value = await registerValidation(req.body);
  } catch (err) {
    return res.status(400).send(err);
  }

  // Checking if student already exits
  const idExists = await Student.findOne({ _id: req.body._id });
  if (idExists) return res.status(400).send("ID already exists");

  //CREATING NEW Student
  const student = new Student({
    _id: req.body._id,
    name: req.body.name
  });
  try {
    const savedStudent = await student.save();
    res.send({ ID: student._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/list", async (req, res) => {
  try {
    const students = await Student.find({});
    res.send(students);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.get("/:Studentid", async (req, res) => {
  try {
    const student = await Student.findById(req.params.Studentid);
    if (student != null) res.send({ Students: student });
    else res.status(404).send({ Error: err, Message: "Student ID not found" });
  } catch (err) {
    return res
      .status(404)
      .send({ Error: err, Message: "Student ID not found" });
  }
});

router.patch("/update", async (req, res) => {
  try {
    const idExists = await Student.findByIdAndUpdate(
      { _id: req.body._id },
      { name: req.body.name }
    );
    return res.send({ Result: idExists._id });
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const idDelete = await Student.findByIdAndRemove({ _id: req.body._id });
    return res.send({ Result: idDelete._id });
  } catch (err) {
    return res.status(404).send({ Result: "ID not found" });
  }
});

module.exports = router;
