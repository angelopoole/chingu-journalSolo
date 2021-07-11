import mongoose, { Connection } from 'mongoose';

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_URI || 'undefined',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(
      `MongoDB Connected: ${connection.connection.host}// using version ${connection.version}`
        .cyan.underline
    );
  } catch (error) {
    console.error(error);
  }
};

export { connectDb };
//
