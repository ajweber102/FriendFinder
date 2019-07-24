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

    // Comparing scores 
    var matchIndex = 0;
    // Score difference
    var matchDifference = 40;

    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;

      for(var index = 0; index < friends[i].scores.length; index++) {
        var scoreDifference = Math.abs(friends[i].scores[index] - yourFriend.scores[index]);
        totalDifference += scoreDifference;
      }
      // Saving the index and difference w/ conditional
      if (totalDifference < matchDifference) {
        matchIndex = i;
        matchDifference = totalDifference;
      }
    }
    // Storing the best match
    bestMatch = friends[matchIndex];

    // Put new friend into existing log array
    friends.push(yourFriend);

    // Returning the best match
    res.json(bestMatch);
});