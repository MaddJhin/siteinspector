const mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create Post Schema using Schema Class
var SiteSchema = new Schema({
  ownerName: {
    type: String
  },
  interviewPerson: {
    type: String
  },
  policyNumber: {
    type: Number,
  },
  claimNumber: {
    type: Number,
    unique: true
  },
  inspectionDate: { 
    type: Date, 
    default: Date.now 
  },
  claims: [{
    type: Schema.Types.ObjectId,
    ref: "Claim",
  }]
});

var Site = mongoose.model("Site", SiteSchema);

module.exports = Site;