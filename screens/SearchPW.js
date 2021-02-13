import React, { useState, useRef } from 'react';
import { View, Text ,Alert,TextInput,StyleSheet,TouchableOpacity} from 'react-native';




const SearchPW = ({ navigation }) => {
  const [userid, setUserid] = useState('');
  const [errorID, setErrorID] = useState(false);
  const [errorPW, setErrorPW] = useState(false);

   
  const idInput = useRef();
  const _searchPWProc = () =>{
    
  }
    return (
        <View style={styles.container}>
            <TextInput
            style={[styles.inputbox_id, errorID && styles.error_inputbox]}
            placeholder="UserID"
            ref={idInput}
            onChangeText={userid => _onchangeTxt(userid)}
            defaultValue={userid}
          />
          <View style={[styles.textstyle, !errorPW && styles.hidetxt]}><Text style={styles.lefttxt, errorPW && {color:'red'}}>올바른 비밀번호를 입력하세요.</Text></View>
          
           <TouchableOpacity style={styles.touchmargin} onPress={() => {
             //서버통신 
            _searchPWProc()
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
  lefttxt:{
      textAlign:'left'
  },
  inputbox_id:{
    height: 40,
    width:'80%',
    borderBottomColor:'#eeeeee',
    borderBottomWidth: 1,
    marginTop:60,
  }, 
  error_inputbox:{
      borderBottomColor:'red',
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
  textstyle:{
    width:'80%',
    marginTop:10,
  },
  hidetxt:{
      opacity: 0,
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
export default SearchPW;