import React, { ReactElement } from "react";
import {Text,TouchableOpacity,StyleSheet,ViewStyle,Image,View} from "react-native";

interface IHeaderProps{
    Img:string,
    Text:string,
}

const Header:React.FunctionComponent<IHeaderProps> = (props)=> {
   
    return  (
              <View style={styles.Header}>
            <Image style= { styles.image} source={{ uri: props.Img }}/>
      <Text style={styles.text}> {props.Text}</Text>
      </View>
    );
}
export default Header;

const styles = StyleSheet.create({
    Header: { height: 60, flexDirection: 'row', alignItems:"center" },
    image: { height: 55, width: 55 },
    text: { flexGrow: 1, textAlign: 'center', color:'skyblue', fontSize:35 }
})