// Require mongoose
var mongoose = require("mongoose");
// Create article schema
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  },
  
  url: {
    type: String,
    required: false
  }
  
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;