const mongoose = require('mongoose');
var Double = require("mongodb").Double;

const ArticleSchema = new mongoose.Schema({
    articleName:{
        type: String,
        required: [true, "Please enter a name for the article"]
    },
    link:{
        type: String,
        required: [true, "Please enter a link for the article"]
    }
}, {timestamps: true})

const SpotSchema = new mongoose.Schema({
    // go buck wild with your schema
    spotName:{
        type: String,
        required: [true, "Please enter spot name"]
    },
    spotLongitude:{
        type: Number,
        required: [true, "Please enter the spots longitude"]
    },
    spotLatitude:{
        type: Number,
        required: [true, "Please enter spots latitude"]
    }
}, { timestamps: true });

const Article = mongoose.model("Article", ArticleSchema);
const Spot = mongoose.model("Spot", SpotSchema);

module.exports = Spot, Article;