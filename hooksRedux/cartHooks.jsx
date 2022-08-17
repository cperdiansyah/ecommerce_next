import { useDispatch } from 'react-redux';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { cartsState } from '../redux/actions/productActions';

const cartHooks = () => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const getCarts = async () => {
    const { data: cartData } = await axiosPrivate.get('/cart');
    dispatch(cartsState(cartData.data));
  };

  const addCarts = async (product) => {
    const { data: cartData } = await axiosPrivate.post(
      `cart/${product._id}`,
      product
    );
    dispatch(cartsState(cartData.data));
  };
  return { getCarts, addCarts };
};

export default cartHooks;
