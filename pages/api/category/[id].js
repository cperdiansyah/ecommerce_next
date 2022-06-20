/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../backend/config/db';
import Category from '../../../backend/models/categoryModels';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const category = await Category.findById(req.query.id);

        if (!category) {
          return res.status(404).json({
            success: false,
            message: 'category not found',
          });
        }

        res.status(200).json({
          success: true,
          data: category,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      break;
    case 'POST':
      /*  try {
        const product = await Product.create(req.body);
        res.status(201).json({
          success: true,
          data: product,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      } */
      break;
    default:
      res.status(405).json({
        success: false,
        message: 'Method not allowed',
      });
  }
};
