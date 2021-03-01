import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const DetailSchedule = ({name}) => {

    let path = `../assets/pics/${name}`;
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20}}>영월역</Text>
                <Text style={{marginLeft: 10, marginTop:5}}> 7/9 - AM : 9 : 00</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Image
                    style={{marginTop: 20}}
                    source={require('../assets/image/left.png')}
                />
                <Image
                    source={require('../assets/image/schedule_image1.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'80%',
        height: 150,
        marginTop: 20,
        marginLeft: 30,
    }
})

export default DetailSchedule;