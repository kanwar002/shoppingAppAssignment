import React, {FC} from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';

interface CustomButtonProps {
  text: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
  iconName?: string;
  iconColor?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  text,
  style,
  textStyle,
  onPress,
  iconName,
  iconColor = colors.WHITE,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, style]}>
      {iconName && (
        <Icon
          name={'shopping-cart'}
          size={14}
          color={iconColor}
          style={styles.icon}
        />
      )}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
