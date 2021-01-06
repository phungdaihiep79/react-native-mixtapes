import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';

type ButtonProps = {};

export const Button: FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity>
      <Text>Nhấp em đi</Text>
    </TouchableOpacity>
  );
};
