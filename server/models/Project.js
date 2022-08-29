const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  clientId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Client",
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
