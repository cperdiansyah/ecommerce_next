/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../backend/config/db';
import Users from '../../../backend/models/userModels';

dbConnect();

export default async (req, res) => {
  const { method } = req;
  // console.log(method);

  switch (method) {
    case 'GET':
      try {
        const users = await Users.find({});
        res.status(200).json({
          success: true,
          data: users,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      break;
    case 'POST':
      try {
        const user = await Users.create(req.body);
        res.status(201).json({
          success: true,
          data: [],
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      break;
    default:
      res.status(405).json({
        success: false,
        message: 'Method not allowed',
      });
  }
};
