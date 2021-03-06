import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const TripItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={props.onItemClick}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.title}>영월</Text>
                <Text style={styles.period}> 7/9 오전 9시 출발(3시간)</Text>
            </View>
            <View
                style={{width: 400, height: 180,}}>
                <Image
                    source={require('../assets/image/image1.png')}
                    style={{width: 400, height: 180, resizeMode:'stretch'}}
                    />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10
    },
    title : {
        fontSize: 25,
        marginLeft: 10,
    },
    period : {
        marginTop: 10,
        marginLeft: 20,
    }
})

export default TripItem;