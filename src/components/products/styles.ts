import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderWidth: 1,
    borderColor: colors.LIGHT_GREY,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  image: {
    width: 100,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: colors.TEXT_GREY,
    marginVertical: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -5,
  },
  starStyle: {
    marginVertical: 4,
  },
  rating: {
    fontSize: 12,
    color: colors.TEXT_GREY,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    padding: 2,
    flex: 0.2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    flex: 0.2,
    textAlign: 'center',
  },
});
