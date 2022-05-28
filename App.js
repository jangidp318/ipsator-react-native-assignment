import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GroupBooking from './components/GroupBookingForm'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <GroupBooking />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
