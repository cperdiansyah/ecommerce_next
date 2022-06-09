/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../backend/config/db';
import Users from '../../../backend/models/userModels';

import usersData from '../../../backend/data/users';

dbConnect();

export default async (req, res) => {
  const { method } = req;
  console.log(method);

  switch (method) {
    case 'POST':
      /* POST For ADD initial All Data */
      try {
        await Users.insertMany(usersData);
        const user = await Users.find({});
        res.status(201).json({
          success: true,
          message: 'Data Added !...',
          data: user,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      break;
    case 'DELETE':
      /* GET For Destroy All Data */
      try {
        await Users.deleteMany();
        res.status(200).json({
          success: true,
          message: 'Data Destroyed !...',
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
