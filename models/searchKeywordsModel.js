const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchKeywordsSchema = new Schema(
  {
    searchedKeyword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const SearchKeywords = mongoose.model('searchKeywords', searchKeywordsSchema);

module.exports = SearchKeywords;
