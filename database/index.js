const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => {
  console.log('connected to mongo');
})
.catch((err) => {
  console.error(err);
})

const productSchema = new mongoose.Schema({
  product: String,
  reviews: [{type: mongoose.Schema.ObjectId, ref: 'Reviews'}],
  ratings: {
    gameplay: Number,
    sound: Number,
    graphics: Number,
    lastingQuality: Number,
    recommended: Number
  }
});

const reviewSchema = new mongoose.Schema({
  user: String,
  text: String,
  dateCreated: Date,
  stars: Number,
  summary: String,
  helpfulCount: Number,
  ratings: {
    gameplay: Number,
    sound: Number,
    graphics: Number,
    lastingQuality: Number,
    recommended: Boolean
  }
})

const Product = mongoose.model('Product', productSchema);
const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = {Product, Reviews};