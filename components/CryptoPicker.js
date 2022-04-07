import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import style from '../style/style';

export default function CryptoPicker({ getCrypto, listAPI }) {
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [cryptoList, setCryptoList] = useState([
    {
      "id": "bitcoin",
      "symbol": "btc",
      "name": "Bitcoin",
      "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
    }]);
  
    const [Enabled, setEnabled] = useState(false);

  function FetchCryptos() {
    fetch(listAPI)
      .then(res => res.json())
      .then(
        (result) => {
          let cryptos = Array.from(result);
          setCryptoList(cryptos);
        },
        (error) => {
          alert("Error!")
        }
      )
  }
  return (
    <View style={style.container}>
      <Text style={style.text}>Select crypto</Text>
      <Picker enabled={Enabled}
        style={style.field}
        selectedValue={selectedCrypto}
        onValueChange={(itemValue) => {
          getCrypto(itemValue);
          setSelectedCrypto(itemValue);
        }}>
        {cryptoList.map((crypto) => (
          <Picker.Item label={crypto.name} value={crypto.id} key={crypto} />
        ))}
      </Picker>
      <Pressable style={style.button} onPress={() => {FetchCryptos(); setEnabled(true);}}>
        <Text style={style.buttonText}>Fetch cryptos</Text>
      </Pressable>
    </View>
  )
}