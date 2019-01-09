var db = require("./../models");

// var User = {
//   findAll: function(cb) {
//     db.User.findAll({}).then(function(dbUsers) {
//       cb(dbUsers);
//     });
//   },
//   findUserById: function(id, cb) {
//     db.User.findOne({
//       where: {
//         id: id
//       }
//     }).then(function(dbUser) {
//       cb(dbUser);
//     });
//   }
// };

// User.findAll(function(data) {
//   console.log(data);
// });

// User.findUserById(1, function(data) {
//   console.log(data);
// });

var User = {
  findAll: function() {
    return new Promise(function(resolve, reject) {
      db.User.findAll({})
        .then(function(dbUsers) {
          resolve(dbUsers);
        })
        .catch(function(err) {
          reject(err);
        });
    });
  },
  findUserById: function(id) {
    return new Promise(function(resolve, reject) {
      db.User.findOne({
        where: {
          id: id
        }
      })
        .then(function(dbUser) {
          if (dbUser) {
            resolve(dbUser);
          } else {
            reject(dbUser);
          }
        })
        .catch(function(err) {
          reject(err);
        });
    });
  }
};

// Using async/await here
// async function findAllUserThenGetOne() {
//   try {
//     var allUsers = await User.findAll();
//     var findOneUser = await User.findUserById(1);
//     console.log("allUsers", allUsers);
//     console.log("oneUser", findOneUser);
//   } catch(e) {
//     console.log(e);
//   }
// }

// findAllUserThenGetOne();

// using promises here
// User.findAll()
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// User.findUserById(2)
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.log("ERROR", err);
//   });

module.exports = User;
