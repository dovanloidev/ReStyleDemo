import React, {forwardRef, useMemo} from 'react';
import {View} from 'react-native';
import useTheme from './useTheme';

const definedProps = obj => {
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => v !== undefined),
  );
};

const createComponent = (BaseComponent = View) => {
  const ReStyleComponent = forwardRef(({style, ...props}, ref) => {
    const {colors, spacing, textVariants} = useTheme();

    const themeStyles = useMemo(() => {
      const textVariant = textVariants?.[props?.textVariants];
      const customStyle = definedProps({
        ...textVariant,
        color: colors?.[props?.color],
        backgroundColor: colors?.[props?.backgroundColor],
        padding: spacing?.[props?.padding],
        paddingTop: spacing?.[props?.paddingTop],
        paddingLeft: spacing?.[props?.paddingLeft],
        paddingBottom: spacing?.[props?.paddingBottom],
        paddingRight: spacing?.[props?.paddingRight],
        paddingVertical: spacing?.[props?.paddingVertical],
        paddingHorizontal: spacing?.[props?.paddingHorizontal],
        margin: spacing?.[props?.margin],
        marginTop: spacing?.[props?.marginTop],
        marginLeft: spacing?.[props?.marginLeft],
        marginBottom: spacing?.[props?.marginBottom],
        marginRight: spacing?.[props?.marginRight],
        marginVertical: spacing?.[props?.marginVertical],
        marginHorizontal: spacing?.[props?.marginHorizontal],
      });

      const styles = {...style, ...customStyle};

      return styles;
    }, [
      textVariants,
      props?.textVariants,
      props?.color,
      props?.backgroundColor,
      props?.padding,
      props?.paddingTop,
      props?.paddingLeft,
      props?.paddingBottom,
      props?.paddingRight,
      props?.paddingVertical,
      props?.paddingHorizontal,
      props?.margin,
      props?.marginTop,
      props?.marginLeft,
      props?.marginBottom,
      props?.marginRight,
      props?.marginVertical,
      props?.marginHorizontal,
      colors,
      spacing,
      style,
    ]);

    return <BaseComponent ref={ref} {...props} style={themeStyles} />;
  });

  return ReStyleComponent;
};

export default createComponent;
