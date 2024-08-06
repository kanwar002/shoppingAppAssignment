import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.GREY,
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.BLACK,
  },
  icon: {
    marginRight: 6,
    marginTop: 2,
  },
});
