import { SafeAreaView, View, StyleSheet, Text, FlatList, Image } from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={style.container}>
      <Text style={style.titulo}>Doces</Text>
      <FlatList
        data={DadosSabores}
        renderItem={({ item }) => (
          <View>
            <Text style={style.sabores1}> {item.sabor} </Text>
            <Image style={style.imagem} source = {item.imagem}/>
            <Text style={style.sabores}> {item.descricao} </Text>
          </View>
          
        )}
      />
    </SafeAreaView>
    
  );
}
//Image:'./assets/cupcake.png', <Text style={style.sabores}> {item.descricao} </Text>
const DadosSabores = [
  { sabor: 'Cupcake',
   imagem: require('./assets/cupcake.png') ,
   descricao: 'Um cupcake de chocolate que combina o sabor profundo e amargo do cacau. A cobertura cremosa de chocolate intenso, quase como um ganache, adiciona um toque aveludado irresistível em cada mordida.'
   },

    { sabor: 'Brigadeiro',
   imagem: require('./assets/brigadeiro1.png') ,
   descricao: 'Um brigadeiro cremoso e doce, feito com leite condensado e chocolate'
   },

   { sabor: 'Milk Shake',
   imagem: require('./assets/cupcake.png') ,
   descricao: 'Milkshake de chocolate cremoso, feito com sorvete de chocolate e leite fresco'
   },

   { sabor: 'Cocada',
   imagem: require('./assets/cocada.png') ,
   descricao: 'A cocada tradicional é doce, cremosa e tem o sabor marcante do coco.'
   },

   { sabor: 'Churros',
   imagem: require('./assets/churros.png') ,
   descricao: 'O churros de doce de leite é crocante por fora e macio por dentro, recheado com um doce de leite cremoso que derrete na boca. '
   },
];

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#87CEFA',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 28,
  },
  sabores: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#ADD8E6',
    width: 320,
    borderRadius: 15,
    marginBottom:30,
  },
  imagem: {
    alignItems: 'center',
    marginTop: 10,
    height:200,
    width:200,
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft:65,
  },
  sabores1: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#ADD8E6',
    width: 320,
    borderRadius: 15,
    
  },
});
