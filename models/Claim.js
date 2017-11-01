const mongoose = require("mongoose");

// Create a Schema class with mongoose
const Schema = mongoose.Schema;

// Create a NoteSchema with the Schema class
const ClaimSchema = new Schema({
  title: {
    type: String
  }
});

// Make a Note model with the NoteSchema
const Claim = mongoose.model("Claim", ClaimSchema);

// Export the Note model
module.exports = Claim;