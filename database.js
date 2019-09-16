const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BloodDonate', { useNewUrlParser: true });
// mongoose.connect('mongodb+srv://naaman:tBZNfUHaMrj8JWAM@cluster0-xcjyv.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
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
  lastName: String,
  phone: String,
  email: String,
  bloodType: String,
  country: String,
  state: String,
  birthday: Date,
  dateOfPublish: { type: Date, default: Date.now },
  reports: Array,
  numberOfCalls: { type: Number, default: 0 }
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

let temp = randomName(1000)

module.exports = {
  Donor,
  creatRepo
}




function randomName(num) {

  let fn = ["Rawabi", "Rashed", "Amal", "Ahmad", "Ali", "Samer", "Khalid", "Sami", "Mohammad", "Deya", "Yasmine", "Doha", "Orayb", "Haya", "Rami", "Fadi", "Shadi", "Hadi", "Wesam", "Murad", "Abdualhay", "Elyas", "Fasil", "Huda", "Ahlam", "Samah", "Raghad", "Rawan", "Rana", "Mona", "Genha", "Amani", "Omar", "Nour", "Lujain", "Jumanh", "Hala", "Osaid", "Fatimah", "Furaat", "Mariam", "Loay", "Tamara", "Nada", "Nadia", "Umaimah", "Hamza", "Sewar", "Rand", "Khalid", "Nadeen"]
  let ln = ["najar", "haddad", "sabaagh", "flaah", "migdadi", "abbadi", "issa", "ziada", "zain", "Mohammad", "Ahmad", "mustafa", "Rashed", "abdallah", "Khalid", "Rami", "fadi", "shadi", "Hadi", "karam", "jaradat", "Rashed", "Ahmad", "Ali", "Samer", "Khalid", "Sami", "Mohammad", "Deya", "Rami", "Fadi", "Shadi", "Hadi", "Wesam", "Murad", "Abdualhay", "Elyas", "Fasil", "Osaid", "Furaat", "Loay", "Hamza", "Khalid"]
  let bt = ['A+', 'A+', 'A+', 'A+', 'A+', 'A+', 'A-', 'A-', 'A-', 'A-', 'A-', 'B+', 'B-', 'AB+', 'O+', 'O+', 'O+', 'O+', 'O+', 'O+', 'O+', 'O+', 'AB-', 'O-', 'O-', 'O-', 'O-', 'O-']
  let st = ["Ajlun", "Amman", "Amman", "Amman", "Aqaba", "Balqa", "Irbid", "Irbid", "Irbid", "Jerash", "Karak", "Mafraq", "Madaba", "Zarqa", "Zarqa", "Zarqa", "Tafielah", "Ma'an"]
  let arrrayOFobj = []
  for (let index = 0; index < num; index++) {
    let donor = {}
    donor.firstName = fn[Math.floor(Math.random() * fn.length)];
    donor.lastName = ln[Math.floor(Math.random() * ln.length)]
    donor.bloodType = bt[Math.floor(Math.random() * bt.length)]
    donor.state = st[Math.floor(Math.random() * st.length)]

    donor.birthday = randomDate(new Date(1955, 0, 0), new Date(2001, 0, 0));
    donor.dateOfPublish = randomDate(new Date(2019, 7, 17), new Date());
    donor.phone = '+962777' + Math.floor(Math.random() * 999999);
    donor.reports = [],
      donor.numberOfCalls = 0,
      donor.country = "Jordan",
      donor.email = "example@orange.jo",

      arrrayOFobj.push(donor)
  }
  return arrrayOFobj
}
console.log('arofobject ', randomName(10))




function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}