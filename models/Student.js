const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Student", studentSchema, "Students");
