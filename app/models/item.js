const mongoose = require("mongoose");

const { Schema } = mongoose;

const ItemSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "can't be blank"],
    },
    description: {
      type: String,
      required: [true, "can't be blank"],
    },
    price: {
      type: Number,
      required: [true, "can't be blank"],
    },
    img: {
      type: String,
      required: [true, "can't be blank"],
    },
  },
  { timestamps: true }
);

module.exports = ItemSchema;
