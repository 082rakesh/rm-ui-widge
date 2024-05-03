"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _ButtonStyle = require("./ButtonStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CustomButton = ({
  children,
  onPress,
  style = {},
  type = _ButtonStyle.ButtonType.PRIMARY
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [styles[type], {
      ...style
    }],
    onPress: onPress
  }, children);
};
const styles = _reactNative.StyleSheet.create({
  primary: {
    ..._ButtonStyle.ButtonStyle.style.primary
  },
  secondary: {
    ..._ButtonStyle.ButtonStyle.style.secondary
  },
  largePrimary: {
    ..._ButtonStyle.ButtonStyle.style.largePrimary
  },
  largeSecondary: {
    ..._ButtonStyle.ButtonStyle.style.largeSecondary
  },
  link: {
    ..._ButtonStyle.ButtonStyle.style.link
  }
});
var _default = exports.default = CustomButton;
//# sourceMappingURL=CustomButton.js.map