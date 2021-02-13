import axios from "axios";
import {URL} from './constant'
//import { AsyncStorage } from '@react-native-community/async-storage';


//const token = JSON.parse(AsyncStorage.getItem("token"));
//axios.defaults.headers.common["Authorization"] = `User ${token}`;

const api = axios.create({
    baseURL: URL,
    headers: {
        Authorization: `User token`,
    },
});

export default api;
