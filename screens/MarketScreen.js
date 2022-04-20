import React, { useState } from "react";
import { Text, View, Image, ScrollView } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import style from '../style/style';

export default function MarketScreen() {
  const [currency, setCurrency] = useState("eur");
  const [cryptoList, setCryptoList] = useState([
    {
      "id": "bitcoin",
      "symbol": "btc",
      "name": "Bitcoin",
      "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      "current_price": 38397,
      "market_cap": 730166367955,
      "market_cap_rank": 1,
      "fully_diluted_valuation": 806334532553,
      "total_volume": 21270451479,
      "high_24h": 38622,
      "low_24h": 37630,
      "price_change_24h": 521.04,
      "price_change_percentage_24h": 1.37566,
      "market_cap_change_24h": 9873056036,
      "market_cap_change_percentage_24h": 1.3707,
      "circulating_supply": 19016293.0,
      "total_supply": 21000000.0,
      "max_supply": 21000000.0,
      "ath": 59717,
      "ath_change_percentage": -35.70173,
      "ath_date": "2021-11-10T14:24:11.849Z",
      "atl": 51.3,
      "atl_change_percentage": 74750.05868,
      "atl_date": "2013-07-05T00:00:00.000Z",
      "roi": null,
      "last_updated": "2022-04-19T22:39:02.744Z"
    }]);
  const listAPI = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + currency + "&order=market_cap_desc&per_page=10"

  useFocusEffect(
    React.useCallback(() => {
      fetchCryptos();
    }, [])
  );

  function fetchCryptos() {
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
    <View style={style.containerBackground}>
      <ScrollView>
        <Text>Market screen</Text>

        {cryptoList.map((crypto) => (
          <View style={style.slotContainer}>
            <Text key={crypto.id}>#{crypto.market_cap_rank} {crypto.name}</Text>
            <Image
              style={{
                width: 30,
                height: 30,
                alignSelf: 'center'
              }}
              source={{
                uri: crypto.image,
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                paddingBottom: 10
              }}>{crypto.current_price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}