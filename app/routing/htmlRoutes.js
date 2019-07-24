var friends = require('../data/friends.js');

module.exports = function (app) {
  app.get('/api/friends', function (req,res) {
      res.json(friends);
  });
};


app.post('/api/friends', function (req, res) {
    var yourFriend = req.body;
    var bestMatch = {};

    for(var i = 0; i < yourFriend.scores.length; i++) {
      if(yourFriend.scores[i] == "1 (Strongly Disagree)") {
        yourFriend.scores[i] = 1;
      } else if(yourFriend.scores[i] == "5 (Strongly Agree)") {
        yourFriend.scores[i] = 5;
      } else {
        yourFriend.scores[i] = parseInt(yourFriend.scores[i]);
      }
    }
});