const Product = require('./database/index.js');
const mongoose =  require('mongoose');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const fs = require('fs');

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 1,
    min: 1
  },
  wordsPerSentence: {
    max: 6,
    min: 3
  }
});

var names = ['bob','bill', 'jimmy', 'armin', 'aida', 'gio', 'mylon', 'jimmy', 'sarah', 'sal', 'dill', 'goku', 'batman', 'spiderman', 'jon', 'moe', 'chelsea', 'derek', 'marcus', 'jonathan', 'drevil', 'anthony', 'hackreactorgrad'];
var gameNames = ['Madden20', 'Madden21', 'Pokemon Shield', 'Pokemon Sword', 'Just Dance 2021', 'Dirt 5', 'Watch Dogs: Legion', 'FIFA 21', 'Bugsnax', 'Cyberpunk 2077', 'Skyrim', 'The Witcher 3', 'Resident Evil 2', 'Resident Evil 3', 'Death Stranding', 'Devil May Cry 5', 'Mortal Kombat 11', 'Fire Emblem Three Houses', 'Gears 5', 'Outer Worlds', 'Astral Chain', 'Super Mario Maker 2', 'Anthem', 'Crackdown 3', 'NBA 2k20', 'Seikiro: Shadows Die Twice', 'Red Dead Redemption 2', 'Tetris Effect', 'Monster Hunter: World - Iceborne', 'Borderlands 3', 'Kingdom Hearts 3', 'Super Smash Bros: Ultimate', 'Star Wars Jedi: Fallen Order', 'Luigis Mansion', 'Mario Kart 8 Deluxe', 'Fifa 20', 'Minecraft: Nintendo Switch Edition', 'Apex Legends', 'Yakuza Kiwami', 'The Lego Movie 2 Videogame', 'Left Alive', 'Overload', 'Hypnospace Outlaw', 'Spider Man', 'Avengers', 'Sonic Racing', 'Minescraft', 'Spider-Man: Miles Morales', 'MLB The Show 20', 'Yakuza: Like A Dragon', 'Destroy All Humans!', 'Mortal Kombat XL', 'NFS Heat', 'UFC 4', 'LEGO Jurassic World', 'NHL 21', 'WWE 2K20', 'God Of War', 'NHL 20', 'Jumanji The Videogame:', 'PGA Tour 2K21', 'The Sims 4', 'Fortnite: Darkfire Bundle', 'Ghost of Tsushima', 'Spyro Reignited Trilogy', 'Persona 5 Royal', 'WWE 2K Battlegrounds', 'Race With Ryan', 'The Last Of Us Part 2', 'Cobra Kai', 'Doom Eternal', 'Overwatch', 'Hitman 2', 'Dragon Ball Z: Kakarot', 'Far Cry 5', 'MediEvil', 'Rage 2', 'Maneater', 'Wreckfest', 'Control', 'Battlefield 1', 'Planet Coaster', 'Mortal Shell', 'RBI Baseball 19', 'Poison Control', 'FIFA 19', 'Family Feud', 'Risk of Rain 2', 'WatchDogs 2', 'No Straight Roads', 'Titanfall 2', 'World War Z', 'Nioh 2', 'Budget Cuts', 'Maid of Sker', 'FIFA 18', 'Madden 18', 'Madden 19', 'Mario Odyssey', 'Mass Effect'];

// var keyWords = ['Ut sit amet sapien metus', 'Integer eget purus', 'Vivamus ultrices', 'Nullam nulla lectus', 'Praesent gravida', 'Pellentesque molestie mauris non libero', 'Fusce sem lorem', 'Suspendisse a mauris nec libero'];


// var randomText = ['Donec sed pellentesque enim','Aliquam tortor mauris, tempor vel augue ut, convallis placerat sem', 'Nunc quis quam vitae risus placerat bibendum nec vel sapien.', 'Phasellus vitae lacus viverra, hendrerit ante eu, ornare tortor.', 'Mauris gravida malesuada lorem id eleifend.', 'Fusce facilisis est ut tempor elementum.', 'Vestibulum lacinia ex ac leo mollis, sit amet dapibus libero ultrices.', 'Mauris ac semper lectus.'];

// var randomDates = [new Date(2018,11,23), new Date(2020, 8, 11), new Date(2020, 6, 24), new Date(2020,5,25), new Date(2020,5,25),new Date(2020,5,25),new Date(2020,5,25),new Date(2020,8,22),new Date(2020,9,11),new Date(2020,6,26),new Date(2020,4,15),new Date(2020,3,13),new Date(2020,6,4),new Date(2020,7,6)];


const random = (num) => {
  return Math.floor(Math.random() * num);
}

const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const getRandomDateCsv = (start, end) => {
  let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  let month = date.getMonth();
  let day = date.getDate();
  if (month === 9 && day === 31) {
    day = 30;
  }
  return `${month}-${day}-${date.getFullYear()}`;
}

const getRandomGame = () => {
  return gameNames[random(gameNames.length)];
}

const createReview = () => {
  var review = {};
  review._id = new mongoose.Types.ObjectId();
  review.user = names[random(names.length)];
  review.text = lorem.generateParagraphs(1);
  review.dateCreated = getRandomDate(new Date(2020, 9, 3), new Date());
  review.stars = random(4) + 1;
  review.summary = lorem.generateSentences(1);
  review.helpfulCount = random(15);

  review.ratings = {
    gameplay: random(4) + 1,
    sound: random(4) + 1,
    graphics: random(4) + 1,
    lastingQuality: random(4) + 1,
    recommended: (Math.random() <= 0.2)
  }

  return review;

};

const createCsvReview = (productId) => {
  let data = '';
  data += names[random(names.length)] + ','; // username
  data += lorem.generateParagraphs(1) + ','; // text
  data += getRandomDateCsv(new Date(2020, 9, 3), new Date()) + ','; // dateCreated
  data += (random(4) + 1).toString() + ','; // stars
  data += lorem.generateSentences(1) + ','; // summary
  data += (random(15)).toString() + ','; // helpfulCount
  data += (random(4) + 1).toString() + ','; // gameplay
  data += (random(4) + 1).toString() + ','; // sound
  data += (random(4) + 1).toString() + ','; // graphic
  data += (random(4) + 1).toString() + ','; // lastingQuality
  data += (Math.random() <= 0.2).toString() + ','; // recommended
  data += productId.toString() + '\n'; // product_id
  return data;
}

// const createRandomAmountOfReviews = (number) => {
//   var reviews = [];
//   for (var i = 0; i < number; i++) {
//     reviews.push(createReview());
//   }
//   return reviews;
// }

// const getRatingData = (object) => {
//   var ratingData = {
//     gameplay: 0,
//     sound: 0,
//     graphics: 0,
//     lastingQuality: 0,
//     recommended: 0
//   }
//   object.reviews.forEach((review) => {
//     for (var key in review.ratings) {
//       if (key === 'recommended' && review.ratings[key] === true) {
//         ratingData[key] += 1;
//       } else {
//         ratingData[key] += review.ratings[key];
//       }

//     }
//   });
//   return ratingData;
// }


// var products = gameNames.map((item) => {
//   var productObj = {};
//   productObj.product = item;
//   var randomNumber = Math.floor(Math.random() * 30);
//   var reviews = createRandomAmountOfReviews(randomNumber);
//   productObj.reviews = reviews;
//   var ratingData = getRatingData(productObj);
//   for (var key in ratingData) {
//     var newVal = ratingData[key] / reviews.length;
//     var rounded = Math.round(newVal * 10) / 10;
//     ratingData[key] = rounded;
//   }
//   productObj.ratings = ratingData;
//   return productObj;
// });

const productCsvWriteStream = fs.createWriteStream('productData.csv');
const reviewCsvWriteStream = fs.createWriteStream('reviewData.csv');
productCsvWriteStream.write('id,product\n', 'utf8');
reviewCsvWriteStream.write('username,text,dateCreated,stars,summary,helpfulCount,gameplay,sound,graphic,lastingQuality,recommended,product_id\n', 'utf8');

const csvProductsGenerator = function(entries) {
  for (let i = 1; i <= entries; i++) {
    let productData = '';
    productData += i.toString() + ',';
    productData += getRandomGame() + '\n';
    productCsvWriteStream.write(productData);
    let numberOfReviews = random(2) + 1;
    for (numberOfReviews; numberOfReviews > 0; numberOfReviews--) {
      reviewCsvWriteStream.write(createCsvReview(i));
    };
  }
}


const productJsonWriteStream = fs.createWriteStream('productData.json');
const reviewJsonWriteStream = fs.createWriteStream('reviewData.json');

const productsGenerator = function(entries) {
    for (let i = 0; i < entries; i++) {
      let reviewsTemp = [];
      let numberOfReviews = random(2) + 1;
      for (numberOfReviews; numberOfReviews > 0; numberOfReviews--) {
        let review = createReview();
        reviewJsonWriteStream.write(JSON.stringify(review));
        reviewsTemp.push(review);
      }
      let product = {};
      product.product = getRandomGame();
      product.reviews = [];
      reviewsTemp.forEach((review) => {
        product.reviews.push(review._id);
      })
      productJsonWriteStream.write(JSON.stringify(product));
    }
}

// productsGenerator(10000000);
csvProductsGenerator(10000000);
// products.forEach((product) => {
//   Product.create(product)
//   .then(() => {
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.error(err);
//   })
// });

