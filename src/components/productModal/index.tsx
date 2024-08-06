import React, {FC} from 'react';
import {Image, Modal, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Product} from '../../interface';
import {addToCart} from '../../redux/reducer';
import CustomButton from '../CustomButton';
import styles from './styles';

interface ProductModalProps {
  visible: boolean;
  onRequestClose: () => void;
  selectedProduct: Product | null;
}

const ProductModal: FC<ProductModalProps> = ({
  visible,
  onRequestClose,
  selectedProduct,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart(selectedProduct));
      onRequestClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <View style={styles.content}>
          {selectedProduct?.image && (
            <Image
              source={{uri: selectedProduct.image}}
              style={styles.image}
              resizeMode="contain"
            />
          )}
          <View style={styles.descriptionContainer}>
            <Text>Description: </Text>
            <Text style={styles.description}>
              {selectedProduct?.description || 'No description available'}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              text="Add To Cart"
              onPress={handleAddToCart}
              style={styles.addToCart}
              textStyle={styles.addToCartText}
              iconName="shopping_cart"
            />
            <CustomButton
              text="Close"
              onPress={onRequestClose}
              style={styles.close}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProductModal;
