/** GET Home Page */
module.exports.index = function (req, res) {
    console.log(` ****** Inside homePageController ******`)
    res.render('index', { title: 'Loc8R Express App' });
}