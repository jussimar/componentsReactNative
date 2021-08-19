import React, {Component} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor:0,
      status: false
    }
  }

  render(){
  
    return (
      <View style={styles.container}>
         <Text style={styles.titulo1}>Usando Componentes de Interface</Text>
         <Text style={styles.titulo2}>Exemplo de Slider</Text>
         
         <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSlider)=>this.setState({valor:valorSlider})}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000000"
        />
        <Text style={styles.resultado}>Valor Slider: {this.state.valor.toFixed(2)}</Text>
        
        <Text style={styles.titulo2}>Exemplo de Switch</Text>
        <Text> 
            Status
        <Switch 
          value={this.state.status}
          onValueChange={(valorStatus)=>this.setState({status:valorStatus})}
        />
        </Text>
        <Text style={styles.resultado}>
          Situação do status: {(this.state.status ? "Ativo":"inativo")}
          
        </Text>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo1:{
    fontSize:30,
    textAlign: 'center',
    marginBottom:20
  },
  titulo2:{
    fontSize:25,
    textAlign: 'center'
  },
  resultado:{
    fontSize:20,
    textAlign: 'center'
  }
});
