"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonType = exports.ButtonStyle = void 0;
let ButtonType = exports.ButtonType = /*#__PURE__*/function (ButtonType) {
  ButtonType["PRIMARY"] = "primary";
  ButtonType["SECONDARY"] = "secondary";
  ButtonType["LARGE_PRIMARY"] = "largePrimary";
  ButtonType["LARGE_SECONDARY"] = "largeSecondary";
  ButtonType["LINK"] = "link";
  return ButtonType;
}({});
const primary = {
  borderRadius: 5,
  alignItems: 'center',
  padding: 10,
  backgroundColor: 'red'
};
const linkStyle = {
  backgroundColor: 'transparent',
  // Color should be used from the colorPalatte file.
  padding: 10,
  alignItems: 'center'
};
const secondary = {
  backgroundColor: 'transparent',
  borderWidth: 1
};
const ButtonStyle = exports.ButtonStyle = {
  style: {
    primary,
    largePrimary: {
      ...primary,
      width: 200 // Width can be static or can be based on the screen size, useWindowDimensions hooks can be used to get screen width & height
    },
    secondary: {
      ...primary,
      ...secondary
    },
    largeSecondary: {
      ...primary,
      ...secondary,
      width: 200
    },
    link: {
      ...linkStyle
    }
  }
};
//# sourceMappingURL=ButtonStyle.js.map