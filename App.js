import React, { useState, useEffect } from 'react';
import { Dimensions, StatusBar,StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Svg, { Path } from 'react-native-svg';
import moment from "moment";
export default function App() {

  const [today] =useState(new Date())
  const [selectedStartDate, setSelectedStartDate] = useState();
  const startDate = selectedStartDate
    ? selectedStartDate.format('YYYY-MM-DD').toString()
    : '';

  return (
    <View >
    <View>
    <View style={styles.box}>
          <Svg 
            height={500}
            width={Dimensions.get('screen').width}
            viewBox="0 0 1440 320"
            style={styles.topWavy}
          >
              <Text style={styles.textOne}>{today.toDateString()}</Text>
            <Path
              fill="cyan"
              d='M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
            />
          </Svg>
        </View>
      
    </View>
      <View >
   
        </View>

    
   <View style={styles.container}>
    <View   style={styles.calen}>
   <CalendarPicker
 
   onDateChange={setSelectedStartDate} />
   </View>
   
      <Text style={styles.dateText}> {startDate}</Text>
   </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
  marginTop: 40
  },
  textOne:{
textAlign: 'center',
marginTop: 70,
fontSize: 30
  },
  calen:{


  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  dateText: {
 textAlign: "center",
 marginTop: 40,
 fontSize: 30,
 backgroundColor: "cyan",
 height: Dimensions.get('screen').height,

  },
  top: {},
  bottom: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    bottom: 0,
  },
  box: {
  backgroundColor: "cyan",

    height: 230,
  },
});