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
    await axiosPrivate.post(`cart/${product._id}`, product);
    getCarts();
  };

  const updateCart = async (id, data) => {
    await axiosPrivate.put(`cart/${id}`, data);

    getCarts();
  };

  const deleteCarts = async (productId) => {
    await axiosPrivate.delete(`cart/${productId}`);
    getCarts();
  };

 


  return { getCarts, addCarts, deleteCarts, updateCart };
};

export default cartHooks;
