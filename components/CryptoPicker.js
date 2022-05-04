import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
import style from '../style/style';

export default function CryptoPicker({ getCrypto, listAPI, crypto }) {
  const [selectedCrypto, setSelectedCrypto] = useState(0);
  const [cryptoList, setCryptoList] = useState([
    { "id": "bitcoin", "name": "Bitcoin" }
  ]);

  useEffect(() => {
    FetchCryptos()
  }, [listAPI]);

  useEffect(() => {
    setSelectedCrypto(crypto.market_cap_rank - 1)
  }, [crypto]);

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
    <View>
      <Text style={style.text}>Select crypto</Text>
      <Picker
        style={style.field}
        selectedValue={selectedCrypto}
        onValueChange={(itemValue) => {
          getCrypto(cryptoList[itemValue]);
          setSelectedCrypto(itemValue);
        }}>
        {cryptoList.map((crypto, index) => (
          <Picker.Item label={crypto.name} value={index} key={crypto} />
        ))}
      </Picker>
    </View>
  )
}