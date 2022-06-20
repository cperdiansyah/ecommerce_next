/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../backend/config/db';
import Product from '../../../backend/models/productModels';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const products = await Product.find(
          {},
          { name: 1, price: 1, images: 1, rating: 1 }
        );

        res.status(200).json({
          success: true,
          data: products,
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
      }
      break;
    default:
      res.status(405).json({
        success: false,
        message: 'Method not allowed',
      });
  }
};
