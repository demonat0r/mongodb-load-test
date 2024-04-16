import { MongoClient } from 'mongodb';

let connection: MongoClient;

beforeAll(async () => {
    connection = await MongoClient.connect(process.env['MONGO_URI']);
});
  
afterAll(async () => {
    await connection.close();
});
