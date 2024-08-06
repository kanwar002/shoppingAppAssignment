// App.tsx
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header, ProductModal, Products} from '../../components';
import {Product} from '../../interface';
import {setProducts} from '../../redux/reducer';
import {AppDispatch, RootState} from '../../redux/store';
import styles from './styles';

const ProductList: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const cart = useSelector((state: RootState) => state.products.cart);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const renderItem = ({item}: {item: Product}) => {
    const cartItem = cart.find(val => val.id === item.id);
    const isInCart = !!cartItem;
    const cartQuantity = cartItem ? cartItem.quantity : 0;
    return (
      <Products
        item={item}
        isInCart={isInCart}
        cartQuantity={cartQuantity}
        onPress={() => {
          setSelectedProduct(item);
          setModalVisible(true);
        }}
      />
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <ProductModal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        selectedProduct={selectedProduct}
      />
    </SafeAreaView>
  );
};

export default ProductList;
