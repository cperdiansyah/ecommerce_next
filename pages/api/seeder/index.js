/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../backend/config/db';

import User from '../../../backend/models/userModels';
import usersData from '../../../backend/data/users';

import Category from '../../../backend/models/categoryModels';
import categoryData from '../../../backend/data/cartegories';

import Product from '../../../backend/models/productModels';
import productData from '../../../backend/data/products';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({});
        const categories = await Category.find({});

        const products = await Product.find({});

        res.status(200).json({
          success: true,
          data: { users, categories, products },
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      break;
    case 'POST':
      /* POST For ADD initial All Data */
      try {
        await User.deleteMany();
        await Category.deleteMany();
        await Product.deleteMany();

        /* Insert User */
        await User.insertMany(usersData);
        const users = await User.find({});

        /* Insert Category */
        await Category.insertMany(categoryData);
        const categories = await Category.find({});

        /* Insert Product */
        const adminUser = users[0]._id;
        const categoryId = categories[0]._id;

        const initialProduct = productData.map((product) => {
          return {
            ...product,
            user: adminUser,
            category: categoryId,
          };
        });
        // console.log(initialProduct);
        await Product.insertMany(initialProduct);

        res.status(201).json({
          success: true,
          message: 'Data Added !...',
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
        await User.deleteMany();
        await Category.deleteMany();
        await Product.deleteMany();

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
