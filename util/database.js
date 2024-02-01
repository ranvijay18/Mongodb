const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://ranvi:2580@Ranvi@cluster0.j1shrhc.mongodb.net/?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
    });
};

const getDb = () => {
  if(_db){
    return _db;
  }
  throw "No database found!";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
