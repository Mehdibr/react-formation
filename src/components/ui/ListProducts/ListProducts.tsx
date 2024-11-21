import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from './ListProducts.styles';
import {IProduct} from '../../../interfaces/Iproduct';

interface IListProductProps {
  produit: IProduct;
  onProductPressed: Function;
}
const ListProducts: React.FC<IListProductProps> = props => {
  return (
    <TouchableHighlight
      style={styles.ListProducts}
      onPress={() => props.onProductPressed(props.produit.id)}>
      <Text style={{fontSize: 25}}>
        {props.produit.id}:{props.produit.name}
      </Text>
    </TouchableHighlight>
  );
};

export default ListProducts;
