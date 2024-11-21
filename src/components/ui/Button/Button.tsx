import React, {ReactElement} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Alert,
} from 'react-native';
import styles from './Button.style';

interface IButtonProps {
  children: ReactElement;
  style?: ViewStyle;
  action: Function;
}
const Button: React.FunctionComponent<IButtonProps> = props => {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={props.action}
      style={{...props.style, ...styles.Button}}>
      {props.children}
    </TouchableOpacity>
  );
};
export default Button;
