import {View, Text} from 'react-native';
import React, {ReactElement} from 'react';
import styles from './TemplateName.styles';

interface ITemplateNameProps {
  chilidren: React.ReactElement | Array<React.ReactElement>;
}
const TemplateName: React.FC<ITemplateNameProps> = props => {
  return <View style={styles.TemplateName}>{props.chilidren}</View>;
};

export default TemplateName;
