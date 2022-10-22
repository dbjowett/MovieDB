import { MongoClient } from 'mongodb';

const mongoURL = `mongodb+srv://dbjowett:${process.env.MONGODB_PASSWORD}@cluster0.tst7z.mongodb.net/authentication?retryWrites=true&w=majority`;

export async function connect() {
  const client = await MongoClient.connect(mongoURL);
  return client;
}
