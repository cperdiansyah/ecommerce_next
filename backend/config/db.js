import mongoose from 'mongoose';

const connection = {};

const dbConnect = async () => {
  /* try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected : ${conn.connection.host}`);


  } catch (err) {
    console.error(err.message);
    process.exit(1);
  } */

  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log(`MongoDB Connected : ${connection.isConnected}`);
};

export default dbConnect;
