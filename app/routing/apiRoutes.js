// Requiring in data from friends
var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.get("/api/friends", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        // Parse result of the user survey POST
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        // Calculates the difference between score of user and scores of those in the database
        var totalDifference = 0;

        // Loop thru friends in database
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            // Loop thru scores of each friend
            for (var j = 0; j < friends[i].length; j++) {

                // Calculate the differences between the scores and sum them into the totalDistance value
                totalDifference = Math.abs(parseInt(userScores[j]) - parseInt(friends[i]).scores[j]);

                // If totalDifference is less than the best match
                if (totalDifference <= bestMatch.friendDifference) {
                    // Assigning new friend to be the bestMatch
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        // Save user's data to database 
        friends.push(userData);

        // Return a JSON with the user's new best match 
        res.json(bestMatch);

    });
};