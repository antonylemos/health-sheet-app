import { Animated } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.TouchableWithoutFeedback``;

export const Container = styled(Animated.View)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.cover};
`;

export const Content = styled(Animated.View)`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 16px;
`;
