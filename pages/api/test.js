import dbConnect from '../../backend/config/db';

dbConnect();

export default async (req, res) => {
  res.json({
    message: 'Hello world!',
  });
};
