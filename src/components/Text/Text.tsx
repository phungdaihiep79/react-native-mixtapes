import React, {FC, useEffect, useMemo} from 'react';
import {View, RNText} from 'react-native';

type TextProps = {};

export const Text: FC<TextProps> = (props) => {
  return (
    <View>
      <RNText>Exemple Text</RNText>
    </View>
  );
};
