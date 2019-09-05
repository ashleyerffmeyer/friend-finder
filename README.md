# Friend Finder Node and Express Servers Application

Compatibility-based full-stack site that takes results from users surveys and compares answers with those from other users

[Link to Friend Finder on Heroku!](https://rocky-reef-72181.herokuapp.com/) 

## Authors
Ashley Erffmeyer, with major support from KU's Coding Boot Camp staff members:
* Ryan LaRue (Instructor)
* Eli Vargas (TA)
* Seth Willis (TA)

## Tools Used
* JavaScript
* Node.js
* Express.js
* [Body-Parser](https://www.npmjs.com/package/body-parser)
* [Path](https://www.npmjs.com/package/path)
* Heroku

## Prerequisites & Installations

In order to run this application, first install node.js, express.js, and npm. To install the app, clone this repository and use 'npm install' to gather dependencies specified in the package.json file (body parser, path, etc.).

## Instructions

The survey has 10 questions. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

The`server.js` file requires the basic npm packages used in class: `express` and `path`.

The`htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which displays the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This displays a JSON of all possible friends.
   * A POST routes `/api/friends`. This is used to handle incoming survey results and the compatibility logic.

The application's data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

6. Determine the user's most compatible friend using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
   * The modal should display both the name and picture of the closest match.


 