// import moment from 'moment';
// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, Button} from 'react-native';
// import DateRangePicker from 'react-native-daterange-picker';

// const MyDateRangePicker = () => {
//   const [showPicker, setShowPicker] = useState(false);
//   //   const [startDate, setStartDate] = useState(new Date('2022-04-01'));
//   //   const [endDate, setEndDate] = useState(new Date('2022-04-01'));

//   const handleConfirm = (start, end) => {
//     setStartDate(start);
//     setEndDate(end);
//     setShowPicker(false);
//   };

//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   const handleDateChange = (startDate, endDate) => {
//     setStartDate(startDate);
//     setEndDate(endDate);
//   };

//   const handlePress = () => {
//     console.log(
//       `Selected date range: ${startDate.toDateString()} - ${endDate.toDateString()}`,
//     );
//   };

//   return (
//     // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//     //   <TouchableOpacity onPress={() => setShowPicker(true)}>
//     //     <Text>Open Date Range Picker</Text>
//     //   </TouchableOpacity>
//     //   {startDate && endDate && (
//     //     <Text>
//     //       Selected date range: {startDate.toISOString().slice(0, 10)} -{' '}
//     //       {endDate.toISOString().slice(0, 10)}
//     //     </Text>
//     //   )}
//     //   {showPicker && (
//     //     <DateRangePicker
//     //       onChange={handleConfirm}
//     //       endDate={endDate}
//     //       startDate={startDate}
//     //     />
//     //   )}
//     // </View>
//     <View>
//       <DateRangePicker
//         onChange={handleDateChange}
//         endDate={endDate}
//         startDate={startDate}
//         range
//       />
//       <Button title="Confirm" onPress={handlePress} />
//     </View>
//   );
// };

// export default MyDateRangePicker;

import moment from 'moment';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import DateRangePicker from 'rnv-date-range-picker';

const MyDateRangePicker = () => {
  const [selectedRange, setRange] = useState({});
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DateRangePicker
          onSelectDateRange={range => {
            setRange(range);
          }}
          responseFormat="YYYY-MM-DD"
          maxDate={moment().date}
          minDate={moment().subtract(100, 'days')}
        />
        <View style={styles.container}>
          <Text>first date: {selectedRange.firstDate}</Text>
          <Text>second date: {selectedRange.secondDate}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
});

export default MyDateRangePicker;
