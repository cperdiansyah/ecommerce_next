import { useDispatch } from 'react-redux';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { favoritesState } from '../redux/actions/productActions';

const favoriteHooks = () => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const getFavorites = async () => {
    const { data: favorite } = await axiosPrivate.get('/favorite');
    dispatch(favoritesState(favorite.data));
  };

  const addFavorite = async (product) => {
    const { data: favorite } = await axiosPrivate.post(
      `favorite/${product._id}`,
      product
    );
    getFavorites()
    // dispatch(favoritesState(favorite.data));
  };

  return { getFavorites, addFavorite };
};

export default favoriteHooks;
