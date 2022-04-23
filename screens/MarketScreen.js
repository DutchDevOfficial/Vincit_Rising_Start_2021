import React, { useState } from "react";
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { TabActions, useFocusEffect } from "@react-navigation/native";
import style from '../style/style';

export default function MarketScreen({ navigation }) {
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
  const listAPI = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + currency + "&order=market_cap_desc&per_page=20"

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

  function handleOnPress(selection) {
    // OnPress sends the selected crypto here, and jumpTo switches focus to HomeScreen and sends the selected crypto
    const jumpToHome = TabActions.jumpTo('Home', { crypto: selection });
    navigation.dispatch(jumpToHome);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      handleOnPress(item);
    }}
      style={style.listMarket}>
      <Text style={[style.textMarket, { paddingRight: 10 }]}>#{item.market_cap_rank} {item.name}</Text>
      <Image
        style={{ resizeMode: "contain", height: 40, width: 40, }}
        source={{ uri: item.image }}
      />
      <Text style={[style.textMarket, { paddingLeft: 20 }]}>{item.symbol.toUpperCase()}</Text>
      <Text style={[style.textMarket, { paddingLeft: 20 }]}>{item.current_price} €</Text>
      {
        (item.price_change_percentage_24h >= 0) ? (
          <Text style={[style.textMarket, { color: "lightgreen" }]}> +{item.price_change_percentage_24h.toFixed(2)}%</Text>
        ) : (
          <Text style={[style.textMarket, { color: "red" }]}> {item.price_change_percentage_24h.toFixed(2)}%</Text>
        )
      }
    </TouchableOpacity >
  );

  const listHeader = () => {
    return (
      <View>
        <View style={style.headerMarket}>
          <Text style={style.textMarket}>Market cap</Text>
          <Text style={[style.textMarket, { marginLeft: 70 }]}>Price</Text>
          <Text style={[style.textMarket, { marginLeft: 70 }]}>24h:</Text>
        </View>
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#000"
          }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={style.containerBackground}>
      <FlatList
        data={cryptoList}
        renderItem={renderItem}
        ListHeaderComponent={listHeader}
        stickyHeaderIndices={[0]}
        keyExtractor={crypto => crypto.id}
      />
    </SafeAreaView>
  );
}