import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 300,
    padding: 20,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 200,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  addToCart: {
    backgroundColor: colors.RED,
  },
  close: {
    flex: 0.7,
    marginLeft: 10,
  },
  addToCartText: {
    color: colors.WHITE,
  },
  descriptionContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  description: {
    width: Dimensions.get('window').width / 2.3,
  },
});
