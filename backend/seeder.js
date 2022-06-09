import dbConnect from './config/db';
import Users from './models/userModels';

dbConnect();

const importData = async () => {
  try {
    await Users.deleteMany();
    console.log('Data Destroyed !...');
  } catch (error) {
    console.log('Error: ', error);
  }
};

const destroyData = async () => {
  try {
    await Users.deleteMany();
    console.log('Data Destroyed !...');
  } catch (error) {
    console.log('Error: ', error);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
