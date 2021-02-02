import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, Button} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

export default function Home() {
  const [updateData, setupdateData] = useState(true);
  useEffect(() => {
    console.log('update');
  }, [updateData]);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <LineChart
        data={{
          labels: ['Janu    ary', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        // yAxisLabel="$"
        yAxisSuffix="KM"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      <Text
        style={{
          alignSelf: 'center',
        }}>
        This Year Progress
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>30</Text>
          <Text>Days</Text>
        </View>
        <View>
          <Text>45.2%</Text>
          <Text>Average</Text>
        </View>
        <View>
          <Text>160 KM</Text>
          <Text>Total</Text>
        </View>
      </View>

      <Button
        title={'refresh'}
        onPress={() => {
          setupdateData(!updateData);
        }}
      />
    </View>
  );
}
