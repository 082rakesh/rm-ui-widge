import type { ViewStyle } from 'react-native';
export declare enum ButtonType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    LARGE_PRIMARY = "largePrimary",
    LARGE_SECONDARY = "largeSecondary",
    LINK = "link"
}
export declare const ButtonStyle: {
    style: {
        primary: ViewStyle;
        largePrimary: {
            width: number;
            backfaceVisibility?: "visible" | "hidden" | undefined;
            backgroundColor?: import("react-native").ColorValue | undefined;
            borderBlockColor?: import("react-native").ColorValue | undefined;
            borderBlockEndColor?: import("react-native").ColorValue | undefined;
            borderBlockStartColor?: import("react-native").ColorValue | undefined;
            borderBottomColor?: import("react-native").ColorValue | undefined;
            borderBottomEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderBottomLeftRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderBottomRightRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderBottomStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderColor?: import("react-native").ColorValue | undefined;
            borderCurve?: "circular" | "continuous" | undefined;
            borderEndColor?: import("react-native").ColorValue | undefined;
            borderEndEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderEndStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderLeftColor?: import("react-native").ColorValue | undefined;
            borderRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderRightColor?: import("react-native").ColorValue | undefined;
            borderStartColor?: import("react-native").ColorValue | undefined;
            borderStartEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderStartStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderStyle?: "solid" | "dotted" | "dashed" | undefined;
            borderTopColor?: import("react-native").ColorValue | undefined;
            borderTopEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderTopLeftRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderTopRightRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderTopStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            opacity?: import("react-native").AnimatableNumericValue | undefined;
            elevation?: number | undefined;
            pointerEvents?: "auto" | "box-none" | "none" | "box-only" | undefined;
            alignContent?: "center" | "flex-start" | "flex-end" | "stretch" | "space-between" | "space-around" | undefined;
            alignItems?: import("react-native").FlexAlignType | undefined;
            alignSelf?: import("react-native").FlexAlignType | "auto" | undefined;
            aspectRatio?: string | number | undefined;
            borderBottomWidth?: number | undefined;
            borderEndWidth?: number | undefined;
            borderLeftWidth?: number | undefined;
            borderRightWidth?: number | undefined;
            borderStartWidth?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            bottom?: import("react-native").DimensionValue | undefined;
            display?: "none" | "flex" | undefined;
            end?: import("react-native").DimensionValue | undefined;
            flex?: number | undefined;
            flexBasis?: import("react-native").DimensionValue | undefined;
            flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
            rowGap?: number | undefined;
            gap?: number | undefined;
            columnGap?: number | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
            height?: import("react-native").DimensionValue | undefined;
            justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
            left?: import("react-native").DimensionValue | undefined;
            margin?: import("react-native").DimensionValue | undefined;
            marginBottom?: import("react-native").DimensionValue | undefined;
            marginEnd?: import("react-native").DimensionValue | undefined;
            marginHorizontal?: import("react-native").DimensionValue | undefined;
            marginLeft?: import("react-native").DimensionValue | undefined;
            marginRight?: import("react-native").DimensionValue | undefined;
            marginStart?: import("react-native").DimensionValue | undefined;
            marginTop?: import("react-native").DimensionValue | undefined;
            marginVertical?: import("react-native").DimensionValue | undefined;
            maxHeight?: import("react-native").DimensionValue | undefined;
            maxWidth?: import("react-native").DimensionValue | undefined;
            minHeight?: import("react-native").DimensionValue | undefined;
            minWidth?: import("react-native").DimensionValue | undefined;
            overflow?: "visible" | "hidden" | "scroll" | undefined;
            padding?: import("react-native").DimensionValue | undefined;
            paddingBottom?: import("react-native").DimensionValue | undefined;
            paddingEnd?: import("react-native").DimensionValue | undefined;
            paddingHorizontal?: import("react-native").DimensionValue | undefined;
            paddingLeft?: import("react-native").DimensionValue | undefined;
            paddingRight?: import("react-native").DimensionValue | undefined;
            paddingStart?: import("react-native").DimensionValue | undefined;
            paddingTop?: import("react-native").DimensionValue | undefined;
            paddingVertical?: import("react-native").DimensionValue | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: import("react-native").DimensionValue | undefined;
            start?: import("react-native").DimensionValue | undefined;
            top?: import("react-native").DimensionValue | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: import("react-native").ColorValue | undefined;
            shadowOffset?: Readonly<{
                width: number;
                height: number;
            }> | undefined;
            shadowOpacity?: import("react-native").AnimatableNumericValue | undefined;
            shadowRadius?: number | undefined;
            transform?: string | (({
                perspective: import("react-native").AnimatableNumericValue;
            } & {
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotate: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotateX: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotateY: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotateZ: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                scale: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                scaleX: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                scaleY: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                translateX: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                translateY: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                skewX: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                skewY: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                matrix?: undefined;
            }) | ({
                matrix: import("react-native").AnimatableNumericValue[];
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
            }))[] | undefined;
            transformOrigin?: string | (string | number)[] | undefined;
            transformMatrix?: number[] | undefined;
            rotation?: import("react-native").AnimatableNumericValue | undefined;
            scaleX?: import("react-native").AnimatableNumericValue | undefined;
            scaleY?: import("react-native").AnimatableNumericValue | undefined;
            translateX?: import("react-native").AnimatableNumericValue | undefined;
            translateY?: import("react-native").AnimatableNumericValue | undefined;
        };
        secondary: {
            backgroundColor: string;
            borderWidth: number;
            backfaceVisibility?: "visible" | "hidden" | undefined;
            borderBlockColor?: import("react-native").ColorValue | undefined;
            borderBlockEndColor?: import("react-native").ColorValue | undefined;
            borderBlockStartColor?: import("react-native").ColorValue | undefined;
            borderBottomColor?: import("react-native").ColorValue | undefined;
            borderBottomEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderBottomLeftRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderBottomRightRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderBottomStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderColor?: import("react-native").ColorValue | undefined;
            borderCurve?: "circular" | "continuous" | undefined;
            borderEndColor?: import("react-native").ColorValue | undefined;
            borderEndEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderEndStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderLeftColor?: import("react-native").ColorValue | undefined;
            borderRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderRightColor?: import("react-native").ColorValue | undefined;
            borderStartColor?: import("react-native").ColorValue | undefined;
            borderStartEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderStartStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderStyle?: "solid" | "dotted" | "dashed" | undefined;
            borderTopColor?: import("react-native").ColorValue | undefined;
            borderTopEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderTopLeftRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderTopRightRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderTopStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            opacity?: import("react-native").AnimatableNumericValue | undefined;
            elevation?: number | undefined;
            pointerEvents?: "auto" | "box-none" | "none" | "box-only" | undefined;
            alignContent?: "center" | "flex-start" | "flex-end" | "stretch" | "space-between" | "space-around" | undefined;
            alignItems?: import("react-native").FlexAlignType | undefined;
            alignSelf?: import("react-native").FlexAlignType | "auto" | undefined;
            aspectRatio?: string | number | undefined;
            borderBottomWidth?: number | undefined;
            borderEndWidth?: number | undefined;
            borderLeftWidth?: number | undefined;
            borderRightWidth?: number | undefined;
            borderStartWidth?: number | undefined;
            borderTopWidth?: number | undefined;
            bottom?: import("react-native").DimensionValue | undefined;
            display?: "none" | "flex" | undefined;
            end?: import("react-native").DimensionValue | undefined;
            flex?: number | undefined;
            flexBasis?: import("react-native").DimensionValue | undefined;
            flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
            rowGap?: number | undefined;
            gap?: number | undefined;
            columnGap?: number | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
            height?: import("react-native").DimensionValue | undefined;
            justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
            left?: import("react-native").DimensionValue | undefined;
            margin?: import("react-native").DimensionValue | undefined;
            marginBottom?: import("react-native").DimensionValue | undefined;
            marginEnd?: import("react-native").DimensionValue | undefined;
            marginHorizontal?: import("react-native").DimensionValue | undefined;
            marginLeft?: import("react-native").DimensionValue | undefined;
            marginRight?: import("react-native").DimensionValue | undefined;
            marginStart?: import("react-native").DimensionValue | undefined;
            marginTop?: import("react-native").DimensionValue | undefined;
            marginVertical?: import("react-native").DimensionValue | undefined;
            maxHeight?: import("react-native").DimensionValue | undefined;
            maxWidth?: import("react-native").DimensionValue | undefined;
            minHeight?: import("react-native").DimensionValue | undefined;
            minWidth?: import("react-native").DimensionValue | undefined;
            overflow?: "visible" | "hidden" | "scroll" | undefined;
            padding?: import("react-native").DimensionValue | undefined;
            paddingBottom?: import("react-native").DimensionValue | undefined;
            paddingEnd?: import("react-native").DimensionValue | undefined;
            paddingHorizontal?: import("react-native").DimensionValue | undefined;
            paddingLeft?: import("react-native").DimensionValue | undefined;
            paddingRight?: import("react-native").DimensionValue | undefined;
            paddingStart?: import("react-native").DimensionValue | undefined;
            paddingTop?: import("react-native").DimensionValue | undefined;
            paddingVertical?: import("react-native").DimensionValue | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: import("react-native").DimensionValue | undefined;
            start?: import("react-native").DimensionValue | undefined;
            top?: import("react-native").DimensionValue | undefined;
            width?: import("react-native").DimensionValue | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: import("react-native").ColorValue | undefined;
            shadowOffset?: Readonly<{
                width: number;
                height: number;
            }> | undefined;
            shadowOpacity?: import("react-native").AnimatableNumericValue | undefined;
            shadowRadius?: number | undefined;
            transform?: string | (({
                perspective: import("react-native").AnimatableNumericValue;
            } & {
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotate: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotateX: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotateY: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotateZ: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                scale: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                scaleX: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                scaleY: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                translateX: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                translateY: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                skewX: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                skewY: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                matrix?: undefined;
            }) | ({
                matrix: import("react-native").AnimatableNumericValue[];
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
            }))[] | undefined;
            transformOrigin?: string | (string | number)[] | undefined;
            transformMatrix?: number[] | undefined;
            rotation?: import("react-native").AnimatableNumericValue | undefined;
            scaleX?: import("react-native").AnimatableNumericValue | undefined;
            scaleY?: import("react-native").AnimatableNumericValue | undefined;
            translateX?: import("react-native").AnimatableNumericValue | undefined;
            translateY?: import("react-native").AnimatableNumericValue | undefined;
        };
        largeSecondary: {
            width: number;
            backgroundColor: string;
            borderWidth: number;
            backfaceVisibility?: "visible" | "hidden" | undefined;
            borderBlockColor?: import("react-native").ColorValue | undefined;
            borderBlockEndColor?: import("react-native").ColorValue | undefined;
            borderBlockStartColor?: import("react-native").ColorValue | undefined;
            borderBottomColor?: import("react-native").ColorValue | undefined;
            borderBottomEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderBottomLeftRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderBottomRightRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderBottomStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderColor?: import("react-native").ColorValue | undefined;
            borderCurve?: "circular" | "continuous" | undefined;
            borderEndColor?: import("react-native").ColorValue | undefined;
            borderEndEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderEndStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderLeftColor?: import("react-native").ColorValue | undefined;
            borderRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderRightColor?: import("react-native").ColorValue | undefined;
            borderStartColor?: import("react-native").ColorValue | undefined;
            borderStartEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderStartStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderStyle?: "solid" | "dotted" | "dashed" | undefined;
            borderTopColor?: import("react-native").ColorValue | undefined;
            borderTopEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderTopLeftRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderTopRightRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderTopStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            opacity?: import("react-native").AnimatableNumericValue | undefined;
            elevation?: number | undefined;
            pointerEvents?: "auto" | "box-none" | "none" | "box-only" | undefined;
            alignContent?: "center" | "flex-start" | "flex-end" | "stretch" | "space-between" | "space-around" | undefined;
            alignItems?: import("react-native").FlexAlignType | undefined;
            alignSelf?: import("react-native").FlexAlignType | "auto" | undefined;
            aspectRatio?: string | number | undefined;
            borderBottomWidth?: number | undefined;
            borderEndWidth?: number | undefined;
            borderLeftWidth?: number | undefined;
            borderRightWidth?: number | undefined;
            borderStartWidth?: number | undefined;
            borderTopWidth?: number | undefined;
            bottom?: import("react-native").DimensionValue | undefined;
            display?: "none" | "flex" | undefined;
            end?: import("react-native").DimensionValue | undefined;
            flex?: number | undefined;
            flexBasis?: import("react-native").DimensionValue | undefined;
            flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
            rowGap?: number | undefined;
            gap?: number | undefined;
            columnGap?: number | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
            height?: import("react-native").DimensionValue | undefined;
            justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
            left?: import("react-native").DimensionValue | undefined;
            margin?: import("react-native").DimensionValue | undefined;
            marginBottom?: import("react-native").DimensionValue | undefined;
            marginEnd?: import("react-native").DimensionValue | undefined;
            marginHorizontal?: import("react-native").DimensionValue | undefined;
            marginLeft?: import("react-native").DimensionValue | undefined;
            marginRight?: import("react-native").DimensionValue | undefined;
            marginStart?: import("react-native").DimensionValue | undefined;
            marginTop?: import("react-native").DimensionValue | undefined;
            marginVertical?: import("react-native").DimensionValue | undefined;
            maxHeight?: import("react-native").DimensionValue | undefined;
            maxWidth?: import("react-native").DimensionValue | undefined;
            minHeight?: import("react-native").DimensionValue | undefined;
            minWidth?: import("react-native").DimensionValue | undefined;
            overflow?: "visible" | "hidden" | "scroll" | undefined;
            padding?: import("react-native").DimensionValue | undefined;
            paddingBottom?: import("react-native").DimensionValue | undefined;
            paddingEnd?: import("react-native").DimensionValue | undefined;
            paddingHorizontal?: import("react-native").DimensionValue | undefined;
            paddingLeft?: import("react-native").DimensionValue | undefined;
            paddingRight?: import("react-native").DimensionValue | undefined;
            paddingStart?: import("react-native").DimensionValue | undefined;
            paddingTop?: import("react-native").DimensionValue | undefined;
            paddingVertical?: import("react-native").DimensionValue | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: import("react-native").DimensionValue | undefined;
            start?: import("react-native").DimensionValue | undefined;
            top?: import("react-native").DimensionValue | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: import("react-native").ColorValue | undefined;
            shadowOffset?: Readonly<{
                width: number;
                height: number;
            }> | undefined;
            shadowOpacity?: import("react-native").AnimatableNumericValue | undefined;
            shadowRadius?: number | undefined;
            transform?: string | (({
                perspective: import("react-native").AnimatableNumericValue;
            } & {
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotate: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotateX: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotateY: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotateZ: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                scale: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                scaleX: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                scaleY: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                translateX: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                translateY: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                skewX: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                skewY: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                matrix?: undefined;
            }) | ({
                matrix: import("react-native").AnimatableNumericValue[];
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
            }))[] | undefined;
            transformOrigin?: string | (string | number)[] | undefined;
            transformMatrix?: number[] | undefined;
            rotation?: import("react-native").AnimatableNumericValue | undefined;
            scaleX?: import("react-native").AnimatableNumericValue | undefined;
            scaleY?: import("react-native").AnimatableNumericValue | undefined;
            translateX?: import("react-native").AnimatableNumericValue | undefined;
            translateY?: import("react-native").AnimatableNumericValue | undefined;
        };
        link: {
            backfaceVisibility?: "visible" | "hidden" | undefined;
            backgroundColor?: import("react-native").ColorValue | undefined;
            borderBlockColor?: import("react-native").ColorValue | undefined;
            borderBlockEndColor?: import("react-native").ColorValue | undefined;
            borderBlockStartColor?: import("react-native").ColorValue | undefined;
            borderBottomColor?: import("react-native").ColorValue | undefined;
            borderBottomEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderBottomLeftRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderBottomRightRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderBottomStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderColor?: import("react-native").ColorValue | undefined;
            borderCurve?: "circular" | "continuous" | undefined;
            borderEndColor?: import("react-native").ColorValue | undefined;
            borderEndEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderEndStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderLeftColor?: import("react-native").ColorValue | undefined;
            borderRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderRightColor?: import("react-native").ColorValue | undefined;
            borderStartColor?: import("react-native").ColorValue | undefined;
            borderStartEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderStartStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderStyle?: "solid" | "dotted" | "dashed" | undefined;
            borderTopColor?: import("react-native").ColorValue | undefined;
            borderTopEndRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderTopLeftRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderTopRightRadius?: import("react-native").AnimatableNumericValue | undefined;
            borderTopStartRadius?: import("react-native").AnimatableNumericValue | undefined;
            opacity?: import("react-native").AnimatableNumericValue | undefined;
            elevation?: number | undefined;
            pointerEvents?: "auto" | "box-none" | "none" | "box-only" | undefined;
            alignContent?: "center" | "flex-start" | "flex-end" | "stretch" | "space-between" | "space-around" | undefined;
            alignItems?: import("react-native").FlexAlignType | undefined;
            alignSelf?: import("react-native").FlexAlignType | "auto" | undefined;
            aspectRatio?: string | number | undefined;
            borderBottomWidth?: number | undefined;
            borderEndWidth?: number | undefined;
            borderLeftWidth?: number | undefined;
            borderRightWidth?: number | undefined;
            borderStartWidth?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            bottom?: import("react-native").DimensionValue | undefined;
            display?: "none" | "flex" | undefined;
            end?: import("react-native").DimensionValue | undefined;
            flex?: number | undefined;
            flexBasis?: import("react-native").DimensionValue | undefined;
            flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
            rowGap?: number | undefined;
            gap?: number | undefined;
            columnGap?: number | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
            height?: import("react-native").DimensionValue | undefined;
            justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
            left?: import("react-native").DimensionValue | undefined;
            margin?: import("react-native").DimensionValue | undefined;
            marginBottom?: import("react-native").DimensionValue | undefined;
            marginEnd?: import("react-native").DimensionValue | undefined;
            marginHorizontal?: import("react-native").DimensionValue | undefined;
            marginLeft?: import("react-native").DimensionValue | undefined;
            marginRight?: import("react-native").DimensionValue | undefined;
            marginStart?: import("react-native").DimensionValue | undefined;
            marginTop?: import("react-native").DimensionValue | undefined;
            marginVertical?: import("react-native").DimensionValue | undefined;
            maxHeight?: import("react-native").DimensionValue | undefined;
            maxWidth?: import("react-native").DimensionValue | undefined;
            minHeight?: import("react-native").DimensionValue | undefined;
            minWidth?: import("react-native").DimensionValue | undefined;
            overflow?: "visible" | "hidden" | "scroll" | undefined;
            padding?: import("react-native").DimensionValue | undefined;
            paddingBottom?: import("react-native").DimensionValue | undefined;
            paddingEnd?: import("react-native").DimensionValue | undefined;
            paddingHorizontal?: import("react-native").DimensionValue | undefined;
            paddingLeft?: import("react-native").DimensionValue | undefined;
            paddingRight?: import("react-native").DimensionValue | undefined;
            paddingStart?: import("react-native").DimensionValue | undefined;
            paddingTop?: import("react-native").DimensionValue | undefined;
            paddingVertical?: import("react-native").DimensionValue | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: import("react-native").DimensionValue | undefined;
            start?: import("react-native").DimensionValue | undefined;
            top?: import("react-native").DimensionValue | undefined;
            width?: import("react-native").DimensionValue | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: import("react-native").ColorValue | undefined;
            shadowOffset?: Readonly<{
                width: number;
                height: number;
            }> | undefined;
            shadowOpacity?: import("react-native").AnimatableNumericValue | undefined;
            shadowRadius?: number | undefined;
            transform?: string | (({
                perspective: import("react-native").AnimatableNumericValue;
            } & {
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotate: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotateX: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotateY: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                rotateZ: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                scale: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                scaleX: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                scaleY: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                translateX: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                translateY: import("react-native").AnimatableNumericValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                skewX?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                skewX: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewY?: undefined;
                matrix?: undefined;
            }) | ({
                skewY: import("react-native").AnimatableStringValue;
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                matrix?: undefined;
            }) | ({
                matrix: import("react-native").AnimatableNumericValue[];
            } & {
                perspective?: undefined;
                rotate?: undefined;
                rotateX?: undefined;
                rotateY?: undefined;
                rotateZ?: undefined;
                scale?: undefined;
                scaleX?: undefined;
                scaleY?: undefined;
                translateX?: undefined;
                translateY?: undefined;
                skewX?: undefined;
                skewY?: undefined;
            }))[] | undefined;
            transformOrigin?: string | (string | number)[] | undefined;
            transformMatrix?: number[] | undefined;
            rotation?: import("react-native").AnimatableNumericValue | undefined;
            scaleX?: import("react-native").AnimatableNumericValue | undefined;
            scaleY?: import("react-native").AnimatableNumericValue | undefined;
            translateX?: import("react-native").AnimatableNumericValue | undefined;
            translateY?: import("react-native").AnimatableNumericValue | undefined;
        };
    };
};
//# sourceMappingURL=ButtonStyle.d.ts.map