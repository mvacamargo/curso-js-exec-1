module.exports = (app) => {

    app.get('/', function (req, res) {
        res.marko(
            require('../view/index.marko')
        );
    })

}