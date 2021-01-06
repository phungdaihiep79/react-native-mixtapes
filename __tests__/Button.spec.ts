import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import {Button} from '../src/components';

describe('Button Component', () => {
  test('render correctly', () => {
    // @ts-ignore
    const tree = create(Button).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
