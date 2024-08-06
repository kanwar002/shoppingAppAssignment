import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import {useDispatch} from 'react-redux';
import {Product} from '../../interface';
import {decrementQuantity, incrementQuantity} from '../../redux/reducer';
import CustomButton from '../CustomButton';
import styles from './styles';

interface ProductsProps {
  item: Product;
  onPress: (item: Product) => void;
  isInCart: boolean;
  cartQuantity: number;
}

const Products: FC<ProductsProps> = ({
  item,
  onPress,
  isInCart,
  cartQuantity,
}) => {
  const dispatch = useDispatch();

  const handleDecrement = () => dispatch(decrementQuantity(item.id));
  const handleIncrement = () => dispatch(incrementQuantity(item.id));
  const handlePress = () => onPress(item);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
      <View style={styles.container}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={styles.ratingContainer}>
            <StarRating
              rating={item.rating.rate}
              maxStars={5}
              starSize={20}
              starStyle={styles.starStyle}
              onChange={() => {}}
              enableSwiping={false}
            />
            <View style={styles.overlay} />
            <Text style={styles.rating}>{item.rating.count}</Text>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>Rs.{item.price}</Text>
            {isInCart && (
              <View style={styles.buttonsContainer}>
                <CustomButton
                  text="-"
                  style={styles.button}
                  onPress={handleDecrement}
                />
                <Text style={styles.quantity}>{cartQuantity}</Text>
                <CustomButton
                  text="+"
                  style={styles.button}
                  onPress={handleIncrement}
                />
              </View>
            )}
          </View>
          <Text style={styles.price}>Category: {item.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Products;
