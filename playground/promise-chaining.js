require('../src/db/mongoose');

const User = require('../src/models/user');

// 65449e8a53e3fafce595fefd

/* User.findByIdAndUpdate('6544a0a9f62b3afabddc73a1', { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  }); */

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age: age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('65449e8a53e3fafce595fefd', 29)
  .then((count) => console.log('count', count))
  .catch((e) => console.log(e));
