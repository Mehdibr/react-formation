import {View, Text} from 'react-native';
import React from 'react';
import styles from './ListProducts.styles';
import {IProduct} from '../../../interfaces/Iproduct';

interface IListProductProps {
  produit: IProduct;
}
const ListProducts: React.FC<IListProductProps> = props => {
  return (
    <View style={styles.ListProducts}>
      <Text>
        {props.produit.id}:{props.produit.name}
      </Text>
    </View>
  );
};

export default ListProducts;
