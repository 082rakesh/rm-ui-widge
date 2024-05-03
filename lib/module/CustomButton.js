import { StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { ButtonStyle, ButtonType } from './ButtonStyle';
const CustomButton = ({
  children,
  onPress,
  style = {},
  type = ButtonType.PRIMARY
}) => {
  return /*#__PURE__*/React.createElement(Pressable, {
    style: [styles[type], {
      ...style
    }],
    onPress: onPress
  }, children);
};
const styles = StyleSheet.create({
  primary: {
    ...ButtonStyle.style.primary
  },
  secondary: {
    ...ButtonStyle.style.secondary
  },
  largePrimary: {
    ...ButtonStyle.style.largePrimary
  },
  largeSecondary: {
    ...ButtonStyle.style.largeSecondary
  },
  link: {
    ...ButtonStyle.style.link
  }
});
export default CustomButton;
//# sourceMappingURL=CustomButton.js.map