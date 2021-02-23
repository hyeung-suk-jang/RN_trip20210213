import React, { useState, useRef } from 'react';
import { View, Text ,Alert,TextInput,StyleSheet,TouchableOpacity} from 'react-native';



const Join = ({ navigation }) => {
  const [userid, setUserid] = useState('');
  const [userpw, setUserpw] = useState('');
  const [userpwconfirm, setUserpwConfirm] = useState('');
  

  const idInput = useRef();
  const passInput = useRef();
  const passInputConfirm = useRef();
  

  const _joinProc = () => {
    
    if(userid==""){
      Alert.alert('이메일을 입력해주세요.');
      idInput.current.focus();
      return;
    }
    if(userpw ==""){
      Alert.alert('패스워드를 입력해주세요.');
      passInput.current.focus();
      return;
    }

    //fetch
    fetch('http://zanghscoding.iptime.org/codingcourse/api.php', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      userid: userid,
      pass: userpw,
      }),
    }).then((response) => response.json())
      .then((responseJson) => {//success

        //page 이동.
        Alert.alert(responseJson);
        
      })
      .catch((error) => {
        console.error(error);
      });
    }
    return (
        <View style={styles.container}>
            <TextInput
            style={styles.inputbox_id}
            placeholder="UserID"
            ref={idInput}
            onChangeText={userid => setUserid(userid)}
            defaultValue={userid}
          />
           
          <TextInput
            style={styles.inputbox_pw}
            placeholder="Password"
            ref={passInput}
            onChangeText={userpw => setUserpw(userpw)}
            defaultValue={userpw}
            secureTextEntry={true}
          />

          <TextInput
            style={styles.inputbox_pw}
            placeholder="PasswordConfirm"
            ref={passInputConfirm}
            onChangeText={userpwconfirm => setUserpwConfirm(userpwconfirm)}
            defaultValue={userpwconfirm}
            secureTextEntry={true}
          />
          
          
          
          <TouchableOpacity style={styles.touchmargin} onPress={() => {
             //navigation.navigate("Join")
            //서버통신 
            _joinProc()
                  }}>
              <Text style={styles.roundButton1}>확인</Text>
              </TouchableOpacity>
       
        </View>
    );

};

    
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        fontFamily: 'THEBluewindRegular',
        alignItems:'center',
        backgroundColor:'#41BD40'
      },
      flex_item :{
        margin:'auto',
        alignItems:'center',
      },
      inputbox_id:{
        height: 40,
        width:'80%',
        borderBottomColor:'#eeeeee',
        borderBottomWidth: 1,
        marginTop:60,
      }, 
      inputbox_pw:{
        height: 40,
        width:'80%',
        borderBottomColor:'#eeeeee',
        borderBottomWidth: 1,
        marginTop:20,
      }, 
      searchpw:{
        fontSize:20,
        color:'white',
        textAlign:'right'
      },
      pwstyle:{
        width:'80%',
        marginTop:10,
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
        fontSize:20,
        marginTop:20,
      },  
      touchmargin:{
        marginTop:20
      }
  });
export default Join;