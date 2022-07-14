import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Animated, useWindowDimensions } from 'react-native';

import { BottomSheetProps } from '../../interfaces';
import { Wrapper, Container, Content } from './styles';

export const BottomSheet = React.memo(
  ({ children, open, closeComponent }: PropsWithChildren<BottomSheetProps>) => {
    const dimensions = useWindowDimensions();

    const [bottomSheetTranslateY] = useState(
      new Animated.Value(dimensions.height),
    );
    const [backgroundContainerTranslateY] = useState(
      new Animated.Value(dimensions.height),
    );
    const [backgroundContainerOpacity] = useState(new Animated.Value(0));

    const openBottomSheet = useCallback(() => {
      Animated.sequence([
        Animated.timing(backgroundContainerTranslateY, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundContainerOpacity, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.spring(bottomSheetTranslateY, {
          toValue: 0,
          bounciness: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }, [
      backgroundContainerOpacity,
      backgroundContainerTranslateY,
      bottomSheetTranslateY,
    ]);

    const closeBottomSheet = useCallback(() => {
      Animated.sequence([
        Animated.timing(bottomSheetTranslateY, {
          toValue: dimensions.height,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundContainerOpacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundContainerTranslateY, {
          toValue: dimensions.height,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    }, [
      backgroundContainerOpacity,
      backgroundContainerTranslateY,
      bottomSheetTranslateY,
      dimensions.height,
    ]);

    useEffect(() => {
      if (open) {
        openBottomSheet();
      } else {
        closeBottomSheet();
      }
    }, [
      dimensions.height,
      open,
      bottomSheetTranslateY,
      backgroundContainerTranslateY,
      openBottomSheet,
      closeBottomSheet,
    ]);

    return (
      <Container
        style={{
          opacity: backgroundContainerOpacity,
          transform: [{ translateY: backgroundContainerTranslateY }],
        }}
      >
        <Content
          style={{
            transform: [{ translateY: bottomSheetTranslateY }],
          }}
        >
          {children}
        </Content>
      </Container>
    );
  },
);
