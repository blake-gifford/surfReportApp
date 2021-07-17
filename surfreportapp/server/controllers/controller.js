const Spot = require('../models/models');
const Article = require('../models/models');
module.exports = {
    // insert methods here
    //CREATE
    createSpot:(req,res) =>{
        Spot.create(req.body)
            .then(spot => res.json({ message: "success", results: spot }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    createArticle:(req,res) =>{
        Article.create(req.body)
            .then(article => res.json({ message: "success", results: article }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    //READ
    getSpots(req,res){
        Spot.find()
            .then(spot => res.json({ message: "success", results: spot }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    getOneSpot(req,res){
        Spot.findOne({"spot_id": req.params.id})
            .then(spot => res.json({ message: "success", results: spot }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    getOneArticle(req,res){
        Article.findOne({"article_id": req.params.id})
            .then(article => res.json({ message: "success", results: article }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    getArticles(req,res){
        Article.find()
            .then(article => res.json({ message: "success", results: article }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    //UPDATE
    updateSpot(req,res){
        Spot.findByIdAndUpdate(req.params.id,{ $push: { trips: req.body } }, { new: true, runValidators: true })
            .then(spot => res.json({ message: "success", results: spot }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    updateArticle(req,res){
        Article.findByIdAndUpdate(req.params.id,{ $push: { trips: req.body } }, { new: true, runValidators: true })
            .then(article => res.json({ message: "success", results: article }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    //DELETE
    deleteSpot(req,res){
        Spot.findByIdAndDelete(req.params.id)
            .then(spot => res.json({ message: "success", results: spot }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    deleteArticle(req,res){
        Article.findByIdAndDelete(req.params.id)
            .then(article => res.json({ message: "success", results: article }))
            .catch(err => res.json({ message: "error", error: err }))
    }
}