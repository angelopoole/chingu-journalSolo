import mongoose, { Connection } from 'mongoose';

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

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
