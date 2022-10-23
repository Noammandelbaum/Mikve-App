const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static('client/build'));
const mongoose = require("mongoose");
require("dotenv").config();

const tvilaSchema = new mongoose.Schema({
  adult: Number,
  child: Number,
});
const Tvila = mongoose.model("Tvila", tvilaSchema);

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwoard: String,
  tvilot: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tvila" }],
});
const User = mongoose.model("User", UserSchema);

const FamSchema = new mongoose.Schema({
  famName: String,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
const Fam = mongoose.model("Fam", FamSchema);

// function findFam() {
//   Fam.find({ name: "Punit" }, { age: 0 }, function (err, docs) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Second function call : ", docs);
//     }
//   });
// }

app.post("/api/admin/add-fam", async (req, res) => {
  const { famName } = req.body;
  console.log(famName);
  const fam = new Fam({ famName });
  fam.save((err, fam) => {
    err && console.log(err);
    res.send(fam);
  });
});

app.post("/api/sign-up", async (req, res) => {
  const { famName, name, email, passwoard } = req.body;
  let fam = await Fam.findOne({
    famName,
  }).exec();
  !fam && res.send("Can't find this fam");
  const user = new User({ name, email, passwoard });
  user.save((err) => {
    console.log(user);
    err && console.log(err);
  });
  fam.users.push(user);
  fam.save((err) => {
    err && console.log(err);
    res.send(user);
  });
});

app.post("/api/tvila-reg", async (req, res) => {
  const { idUser, adult, child } = req.body;
  let user = await User.findById(idUser);
  const tvila = new Tvila({ adult, child });
  tvila.save((err) => {
    err && console.log(err);
  });
  user.tvilot.push(tvila);
  user.save((err) => {
    err && console.log(err);
    res.send(tvila);
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_NAME}.${DB_HOST}/?retryWrites=true&w=majority`,
  // `mongodb+srv://noam:rsnKdtn6GrlX6VWa@mikveapp.xrt1qnc.mongodb.net/?retryWrites=true&w=majority`,
  // "mongodb://localhost:27017/mikve_app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    app.listen(process.env.PORT || 8001, () => {
      console.log("Listening on port 8001!");
      err && console.log("err: ", err);
    });
  }
);
// app.get("/admin", async (req, res) => {
//   Fam.find((err, tvilot) => {
//     return res.send(tvilot);
//   });
// });

//קריאות שרת:
//פרטי משתמש להצגה - get
//רישום משפחה - post
//רישום טבילה - post
//רישום טבילה - post
