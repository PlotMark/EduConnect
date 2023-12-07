import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

    const onCharge = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform,OS === 'Android');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = template.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
        setText(fDate + '\n' + fTime)
        console.log(fDate + ' (' + fTime + ')')
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }


    return (
        <View style={StyleSheet.container}>
            <Text style={{fontWeight:'bold', fontSize: 20}}>{text}</Text>
            <View stye={{margin:20}}>
                <Button title='DatePicker' onPress={() => showMode('date')} />
            </View>
            <View stye={{margin:20}}>
                <Button title='TimePicker' onPress={() => showMode('time')} />
            </View>

            {show && (
                <DateTimePicker
                testID='datetimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onCharge={onCharge}
                />)}

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});