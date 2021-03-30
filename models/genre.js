var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: [3, 'Too few characters'],
      max: [100, 'Too much characters']
    }
  }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

// Export model
module.exports = mongoose.model('Genre', GenreSchema);

