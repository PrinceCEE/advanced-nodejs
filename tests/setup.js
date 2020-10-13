jest.setTimeout(30000);

require("../models/User");
const keys = require("../config/keys");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
})