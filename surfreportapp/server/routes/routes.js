const controller = require('../controllers/controller');

module.exports = app => {
    //CREATE
    app.post("/api/create/spot", controller.createSpot);
    app.post("/api/create/article", controller.createArticle);
    //READ
    app.get("/api/spots", controller.getSpots);
    app.get("/api/spot/:id", controller.getOneSpot);
    app.get("/api/articles", controller.getArticles);
    app.get("/api/article/:id", controller.getOneArticle);
    //UPDATE
    app.put("/api/update/spot", controller.updateSpot);
    app.put("/api/update/article", controller.updateArticle);
    //DELETE
    app.delete("/api/delete/spot", controller.deleteSpot);
    app.delete("/api/delete/article", controller.deleteArticle);
}