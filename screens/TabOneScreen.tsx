import {StyleSheet, Switch, TextInput} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from "react";
import CounterText from "./CounterText"

interface Props{
  color: string;
}

// interface Pic{
//   pic: string;
// }
//
// function Pict (props: Pic){
//   const {pic} = props;
//   return(
//       <img src={pic} />
//       );
// };

function App (props: Props) {
  const {color} = props;
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState(false);
  function onValueChange(newValue: boolean) {
    setValue(newValue)
  };
  return(
    <View style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={newValue=>setName(newValue)}/>
      <Text style={styles.title}>{name}さん、Google DSC Cloud Leagueへようこそ！</Text>
      <View style={styles.separator} lightColor="#114c4b" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Text style={{color}}>頑張りましょう。</Text>
      <Switch value={value} onValueChange={onValueChange} />
      <CounterText count={10} />
      {/*<Pict pic={"#"} />*/}
    </View>

  );
};



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>, props: Props) {
  return (
      <App color={'#2cb'}></App>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    width: 256,
    padding: 4,
  },
});
