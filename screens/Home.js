import React,{ useEffect,useState,useContext }  from 'react';
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const Home = ({ navigation }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
      if (user === null) {
        auth().onAuthStateChanged(onAuthStateChanged)
      }
  });

  function onAuthStateChanged(user) {
    console.log(user.uid,'///user-uuid');
    setUser(user);
  }

    return (
        <View style={styles.container}>
            <View style={styles.flex_item}>
              <Text style={styles.hello}>여행기</Text>
              <Text style={styles.subtitle}>열심히 일 한 당신 떠나요!</Text>
            </View>
            <View style={styles.flex_item}>
            <TouchableOpacity onPress={() => {
             navigation.navigate("Login")
                  }}>
              <Text style={styles.roundButton1}>로그인</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchmargin} onPress={() => {
             navigation.navigate("Join")
                  }}>
              <Text style={styles.roundButton1}>회원가입</Text>
              </TouchableOpacity>
            </View>            
        </View>
    );

};

    
const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection: 'column',
      fontFamily: 'THEBluewindRegular',
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:'#41BD40'
    },
    flex_item :{
      margin:'auto',
      alignItems:'center',
    },
    hello:{
    color:'white',
    fontFamily: 'THEBluewind',
      fontSize:85,
    },
    subtitle:{
      fontSize:20,
      color:'white'
    },
    roundButton1: {
      width: 350,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'white',
      textAlign:'center',
      lineHeight:30,
      color:'#41BD40',
      fontSize:20
    },  
    touchmargin:{
      marginTop:20
    }
  });
export default Home;