import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';

type ButtonProps = {};

export const Button: FC<ButtonProps> = () => {
  return (
    <TouchableOpacity>
      <Text>Nhấp em đi</Text>
    </TouchableOpacity>
  );
};
