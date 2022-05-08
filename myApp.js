require('dotenv').config();
const myMongoEnv = process.env['MONGO_URI']

let mongoose = require("mongoose");
mongoose.connect(myMongoEnv, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name : String,
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);


const createAndSavePerson = (done) => {
  let first = new Person({name: 'mengmeng', age: 12, favoriteFoods: ['meat', 'cake']});
  first.save(function(err, data){
    if (err) return console.error('createAndSavePerson\n', err);
    console.log('createAndSavePerson\n', data);
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data){
    if (err) return console.error('createManyPeople\n', err);
    console.log('createManyPeople\n', data);
    done(null , data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, data){
    if (err) return console.error('findPeopleByName\n', err);
    console.log('findPeopleByName\n', data);
    done(null , data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({'favoriteFoods': food}, function(err, data){
    if (err) return console.error('findOneByFood\n', err);
    console.log('findOneByFood\n', data);
    done(null , data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function(err, data){
    if (err) return console.error('findPersonById\n', err);
    console.log('findPersonById\n', data);
    done(null , data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, function(err, data){
    if (err) {
      return console.error('findEditThenSave\n', err);
    }else{
      data.favoriteFoods.push(foodToAdd);
      data.save(function(err, data){
        if(err) return console.error('findEditThenSave', err)
        console.log('findEditThenSave\n', data);
        done(null , data);
      });
    }
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    {'name': personName}, 
    {'age': ageToSet},
    {'new': true }, function(err, data){
    if (err) return console.error('findAndUpdate\n', err);
    console.log('findAndUpdate\n', data);
    done(null , data);
  });
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function(err, data){
    if (err) return console.error('removeById\n', err);
    console.log('removeById\n', data);
    done(null , data);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({'name': nameToRemove}, function(err, data){
    if (err) {
      return console.error('removeManyPeople\n', err);
    } else {
      console.log('removeManyPeople\n', data);
      done(null , data);
    }
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;