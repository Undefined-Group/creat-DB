const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BloodDonate', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let donorSchema = new mongoose.Schema({
  // _id: String,
  firstName: String,
  lasttName: String,
  phone: Number,
  email: String,
  bloodType: String,
  country: String,
  city: String,
  birthday: Date,
  dateOfPublish: { type: Date, default: Date.now },
  reports: Array,
  numberOfcalls: Number
});

let Donor = mongoose.model('donor', donorSchema);





// Example function
let readRepos = (cb) => {
  Donor.find({}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      // console.log('data:', data);
      cb(data)
    }
  })
}

let creatRepo = (cb) => {
  // console.log("creatRepo in DB req", newRepo);
  Donor.create(temp, (err, data) => {
    if (err) {
      cb(err)
    } else {
      // console.log('new data:', data);
      readRepos(cb)
    }
  })
}

let temp = [{
  firstName: "naaman",
  lasttName: "munther",
  phone: +962799333626,
  email: "naaman@engineer.com",
  bloodType: "A+",
  country: "Jordan",
  city: "Amman",
  birthday: '1994-06-09',
  reports: [],
  numberOfcalls: 1
}, {
  firstName: "rawabi",
  lasttName: "Okour",
  phone: +962777522509,
  email: "naaman@engineer.com",
  bloodType: "o+",
  country: "Jordan",
  city: "Amman",
  birthday: '1996-09-09',
  reports: [],
  numberOfcalls: 0
}, {
  firstName: "rasid",
  lasttName: "mi8dadi",
  phone: +962777522509,
  email: "naaman@engineer.com",
  bloodType: "o-",
  country: "Jordan",
  city: "Irbid",
  birthday: '1995-05-05',
  reports: [],
  numberOfcalls: 0
}, {
  firstName: "doha",
  lasttName: "dojan",
  phone: +962777522509,
  email: "naaman@engineer.com",
  bloodType: "b-",
  country: "Jordan",
  city: "zarqaa",
  birthday: '1993-10-05',
  reports: [],
  numberOfcalls: 20
}
]

module.exports = {
  Donor,
  creatRepo
}