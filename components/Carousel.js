import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import style from '../style/style';

export default function Carousel({ parentData, currency, date, date2, API, childToParent, childToParent2, childToParent3 }) {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState("");
    const [datetoday, setDatetoday] = useState(new Date());


    useEffect(() => {
        FetchData()
    }, [date, date2])


    useEffect(() => {
        if (text === '') {
            return;
        } else {
            FetchData();
        }
    }, [API]);

    console.log(date, date2)

    function FetchData() {
        let _startDate = new Date(date) //Had get date in this way, otherwise it gets local time instead of utc±0, meaning the results would be off by a few hours
        const unixStartDate = (new Date(Date.UTC(_startDate.getFullYear(), _startDate.getMonth(), _startDate.getDate())).getTime()) / 1000
        let _endDate = new Date(date2)
        const unixEndDate = (new Date(Date.UTC(_endDate.getFullYear(), _endDate.getMonth(), _endDate.getDate())).getTime()) / 1000 + 3600

        const dayRange = (unixEndDate - unixStartDate - 3600) / 60 / 60 / 24

        let _todayDate = new Date(datetoday)
        const unixTodayDate = (new Date(Date.UTC(_todayDate.getFullYear(), _todayDate.getMonth(), _todayDate.getDate())).getTime()) / 1000


        if (unixStartDate > unixEndDate) {
            alert('Start date must be earlier than end date')
            return
        } else if (unixStartDate === unixEndDate - 3600) {
            alert('Select different dates for start and end date')
            return
        } else if (unixStartDate > unixTodayDate) {
            alert('Selected dates cant be from the future')
            return
        } else if (unixEndDate - 3600 > unixTodayDate) {
            alert('Selected dates cant be from the future')
            return
        }

        fetch(API + unixStartDate + "&to=" + unixEndDate)
            .then(res => res.json())
            .then(
                (result) => {
                    let _prices = new Array
                    let _prices2 = new Array
                    let _prices3 = new Array
                    let _totalVolume = new Array
                    for (let i = 0; i < result.prices.length; i++) {
                        //console.log(i, result.prices[i])
                        //console.log(new Date(result.prices[i][0]).toUTCString())
                        if (dayRange < 90) {
                            if (i % 24 == 0 || unixStartDate < 1527120000) { //limit to 1 result, closest to 00:00 UTC || also test if earlier than 2018.5.23, otherwise will result in errors
                                _prices.push(result.prices[i])
                                _prices2.push(result.prices[i])
                                _totalVolume.push(result.total_volumes[i])
                            }
                        } else {
                            _prices.push(result.prices[i])
                            _prices2.push(result.prices[i])
                            _totalVolume.push(result.total_volumes[i])
                        }
                        if (dayRange < 4) {
                            _prices3.push(result.prices[i])
                        }
                    }
                    childToParent(_prices2)  //had to make a new prices array because _prices sometimes misses a value. I think due to being cut in some function, before it sents to chart.js .
                    childToParent2(dayRange)
                    childToParent3(_prices3)
                    GetDownwardTrend(_prices)
                    GetHighestVolume(_totalVolume)
                    maxProfit(_prices)
                },
                (error) => {
                    alert("Error!")
                }
            )
    }
    function GetHighestVolume(_totalVolume, _prices) {
        let max = 0;
        let maxIndex = 0;

        for (let i = 0; i < _totalVolume.length; i++) {
            if (_totalVolume[i][1] > max) {
                max = _totalVolume[i][1];
                maxIndex = i;
            }
        }
        let HighestVolumeDay = new Date(_totalVolume[maxIndex][0]).toUTCString().slice(0, -12)
        setText2("The highest trading volume was " + _totalVolume[maxIndex][1] + " on " + HighestVolumeDay)
    }



    function GetDownwardTrend(_prices) {
        let longestTrend = 1;
        let longestTrendIndex = 0; //index is reversed => get start index by substracting longest trend
        let currentTrend = 0;


        for (let i = 0; i < _prices.length - 1; i++) { //reqursively test longest downward trend
            if (_prices[i + 1][1] < _prices[i][1]) {
                currentTrend++
                if (currentTrend > longestTrend) {
                    longestTrend++
                    longestTrendIndex = i + 1
                }
            } else {
                currentTrend = 0
            }
        }

        //console.log("longestTrendIndex: ", longestTrendIndex)
        let firstDay = new Date(_prices[longestTrendIndex - longestTrend + 1][0]).toUTCString().slice(0, -12)
        let lastDay = (new Date(_prices[longestTrendIndex][0]).toUTCString()).slice(0, -12)
        //console.log("Longest downward trend is: ", longestTrend, " days | From: " + firstDay + " to: " + lastDay)
        setText("Longest downward trend is: " + longestTrend + " days | From: " + firstDay + " to: " + lastDay + " ")
    }


    useEffect(() => {
        Calculate();
    }, [parentData]);

    function Calculate() {
        if (parentData.length === 0 || parentData === "undefined") {
            return null;
        } else {
            let prices = Array.from(parentData);
            let maxProfit = 0;
            let min = prices[0][1];
            let minIndex = 0;
            let maxIndex = 0;

            for (let i = 1; i < prices.length; i++) {
                if (min > prices[i][1]) {
                    min = Math.min(prices[i][1], min);
                    minIndex = i;
                    prices[i] = prices[i].slice(0, minIndex)
                }
                if (maxProfit < prices[i][1] - min) {
                    maxProfit = Math.max(maxProfit, prices[i][1] - min);
                    maxIndex = i;
                }
                setText3('For maximum profit of ' + maxProfit.toFixed(2) + ' ' + currency + ' buy at ' + new Date(prices[minIndex][0]).toUTCString().slice(0, -12) + 'and sell at ' + new Date(prices[maxIndex][0]).toUTCString().slice(0, -12) + '.')
            }
        }
    }



    const getInterval = (offset) => {
        for (let i = 1; i <= 3; i++) {
            if (offset + 1 < (150) * i) {
                return i;
            }
            if (i == 3) {
                return i;
            }
        }
    }

    const [interval, setInterval] = useState(1)
    let bullets = [];
    for (let i = 1; i <= 3; i++) {
        bullets.push(
            <Text
                key={i}
                style={{
                    ...style.bullet,
                    opacity: interval === i ? 0.5 : 0.1
                }}
            >
                &bull;
            </Text>
        );
    }

    useEffect(() => {
        console.log(interval)
    }, [interval])



    return (
        <View style={[style.slotContainer, style.carousel]}>




<View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 130, textAlign: 'center',color: '#fff',fontSize: 17, }}>Calculations</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>


            <ScrollView style={style.scrollView}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={data => {
                    setInterval(getInterval(data.nativeEvent.contentOffset.x));
                }}
            >
                <Text style={style.carouselItem}>{text}</Text>
                <Text style={style.carouselItem}>{text2}</Text>
                <Text style={style.carouselItem}>{text3}</Text>
            </ScrollView>
            <View style={style.bullets}>
                {bullets}
            </View>
        </View>
    )
}