const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId

const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const databaseName = 'task-manager';

const id = new ObjectId();
/* console.log(id);
console.log(id.getTimestamp());
console.log(id.toString());
console.log(id.toHexString().length); */

const client = new MongoClient(url);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');

  const db = client.db(databaseName);

  /* const data = await db
    .collection('users')
    .findOne({ _id: new ObjectId('6543c353c2460d8c24149d7e') });
  console.log(data); */

  // const data_1 = await db.collection('users').find({ age: 27 }).toArray();
  // console.log(data_1);

  // Task
  /*   const data = await db
    .collection('tasks')
    .findOne({ _id: new ObjectId('6543c4a198f768c9f4aa5fd1') });
  console.log(data);

  const data_1 = await db
    .collection('tasks')
    .find({ completed: false })
    .toArray();
  console.log(data_1); */

  /*   const data = await db.collection('users').updateOne(
    { _id: new ObjectId('6543ccc8ad5af9c362fd0f75') },
    {
      $inc: {
        age: 4,
      },
    }
  ); */

  /*   const data = await db.collection('tasks').updateMany(
    { completed: false },n
      $set: {
        completed: true,
      },
    }
  ); */

  /*   const data = await db
    .collection('users')
    .deleteOne({ _id: new ObjectId('6543ccc8ad5af9c362fd0f75') });
  console.log(data); */
  const data = await db.collection('users').deleteMany({ age: 27 });
  console.log(data);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
