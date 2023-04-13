const { default: mongoose } = require("mongoose");

export const dbConnect = () => {
  try {
    const conn = mongoose.connect("mongodb://localhost:27017/digitic");
    console.log("connect to database");
  } catch (error) {
    throw new Error(error as string);
  }
};
