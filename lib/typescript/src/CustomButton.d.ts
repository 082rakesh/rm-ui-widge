import { type ViewStyle } from 'react-native';
import React from 'react';
import { ButtonType } from './ButtonStyle';
export type Props = {
    children: React.ReactElement;
    onPress?: () => void;
    style?: ViewStyle;
    type?: ButtonType;
};
declare const CustomButton: ({ children, onPress, style, type, }: Props) => React.JSX.Element;
export default CustomButton;
//# sourceMappingURL=CustomButton.d.ts.map