const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("client/build"));
const mongoose = require("mongoose");
require("dotenv").config();

const tvilaSchema = new mongoose.Schema({
  countAdult: Number,
  countChild: Number,
});
const Tvila = mongoose.model("Tvila", tvilaSchema);

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  tvilot: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tvila" }],
});
const User = mongoose.model("User", UserSchema);

const FamSchema = new mongoose.Schema({
  famName: String,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
const Fam = mongoose.model("Fam", FamSchema);

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
  const { famName, name, email, password } = req.body;
  let userErr = await User.findOne({
    email,
  }).exec();
  if (userErr) {
    res.status(400).send(`מייל בשמוש בחשבון אחר, נסה מייל אחר.`);
    return;
  }

  let fam = await Fam.findOne({
    famName,
  }).exec();
  if (!fam) {
    res
      .status(400)
      .send(
        `.המשפחה אינה מעודכנת במערכת, שלם במזומן במקווה או פנה למנהל המקווה`
      );
    return;
  }

  for (let i = 0; i < fam.users.length; i++) {
    const currUser = await User.findById(fam.users[i]);
    if (currUser.name === name) {
      res.status(400).send(`.השם כבר רשום במערכת, נסה שם אחר`);
      return;
    }
  }

  const user = new User({ name, email, password });
  user.save((err) => {
    err && console.log(err);
  });
  fam.users.push(user);
  fam.save((err) => {
    err && console.log(err);
    res.status(200).send(user);
  });
});

app.post("/api/sign-in", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({
    email,
  }).exec();
  console.log("user", user);
  if (!user || user.password !== password) {
    res.status(400).send(`פרטי הכניסה אינם נכונים, נסה שנית.`);
    return;
  } else res.status(200).send(user);
});

app.post("/api/tvila-reg", async (req, res) => {
  const { idUser, countAdult, countChild } = req.body;
  // console.log("idUser", idUser);
  // console.log("countAdult", countAdult);
  // console.log("countChild", countChild);
  let user = await User.findById(idUser);
  const tvila = new Tvila({ countAdult, countChild });
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
// })
