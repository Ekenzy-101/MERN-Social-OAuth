const { connect } = require("mongoose");

const { MONGO_URI } = require("../config");

module.exports = async () => {
  await connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log(`Connected to ${MONGO_URI}`);
};
