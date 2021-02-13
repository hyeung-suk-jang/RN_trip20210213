import {URL}  from '../constant'
import api from "../api"
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from '@react-native-community/async-storage';

export const loginAction = (data) => async (dispatch) => {
    const navigation = useNavigation();

    try {
        const resToken = await api.post("/login", data);
        const token = resToken.data.token;
        console.log(token);
        if(token){
            AsyncStorage.setItem(
                'usertoken',token
              );
            navigation.navigate('Main')
        }
        
    } catch (e) {
        console.log(e.response.data.error);
    }
};

