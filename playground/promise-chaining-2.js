require('../src/db/mongoose');

const Task = require('../src/models/task');

/* Task.findByIdAndDelete('6544996b852109749994e6a2')
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
 */

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('65450b0188fa11aec6d96012')
  .then((count) => {
    console.log('count - ', count);
  })
  .catch((e) => {
    console.log(e);
  });
