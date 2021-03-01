import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {URL} from '../constant';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../actions/userAction';
import auth from '@react-native-firebase/auth';

const initialValue = {
  id: '',
  pw: '',
};

const FirebaseSignup = ({navigation}) => {
  const [userid, setUserid] = useState('');
  const [userpw, setUserpw] = useState('');
  const [errorID, setErrorID] = useState(false);
  const [errorPW, setErrorPW] = useState(false);

  const idInput = useRef();
  const passInput = useRef();

  const dispatch = useDispatch();

  const _searchPW = () => {
    navigation.navigate('SearchPW');
  };
  const _loginProc = () => {
    if (userid == '') {
      setErrorID(true);
      idInput.current.focus();
      return;
    }
    if (userpw == '') {
      setErrorPW(true);
      passInput.current.focus();
      return;
    }
    callSignUp(userid,userpw)
  };

   async function callSignUp(email,password) {
      auth()
      .createUserWithEmailAndPassword(email, password).then((user) => {
        console.log(user,'///data');
      }).catch((error) => {
        console.log(error,'///data');
      })
  };

  const _onchangeTxt = (txt) => {
    setUserid(txt);
    setErrorID(false);
  };
  const _onchangePW = (txt) => {
    setUserpw(txt);
    setErrorPW(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputbox_id, errorID && styles.error_inputbox]}
        placeholder="Enter Email"
        ref={idInput}
        onChangeText={(userid) => _onchangeTxt(userid)}
        defaultValue={userid}
      />
      <View style={[styles.textstyle, !errorID && styles.hidetxt]}>
        <Text style={[styles.lefttxt, errorID && {color: 'red'}]}>
          올바른 아이디를 입력하세요.
        </Text>
      </View>
      <TextInput
        style={[styles.inputbox_pw, errorPW && styles.error_inputbox]}
        placeholder="Enter Password"
        ref={passInput}
        onChangeText={(userpw) => _onchangePW(userpw)}
        defaultValue={userpw}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.touchmargin}
        onPress={() => {
          //navigation.navigate("Join")
          //서버통신
          _loginProc();
        }}>
        <Text style={styles.roundButton1}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    fontFamily: 'THEBluewindRegular',
    alignItems: 'center',
    backgroundColor: '#41BD40',
  },
  flex_item: {
    margin: 'auto',
    alignItems: 'center',
  },
  lefttxt: {
    textAlign: 'left',
  },
  inputbox_id: {
    height: 40,
    width: '80%',
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
    marginTop: 60,
  },
  error_inputbox: {
    borderBottomColor: 'red',
  },
  inputbox_pw: {
    height: 40,
    width: '80%',
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  searchpw: {
    fontSize: 20,
    color: 'white',
    textAlign: 'right',
  },
  textstyle: {
    width: '80%',
    marginTop: 10,
  },
  hidetxt: {
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
    textAlign: 'center',
    lineHeight: 30,
    color: '#41BD40',
    fontSize: 20,
    marginTop: 20,
  },
  touchmargin: {
    marginTop: 20,
  },
});

export default FirebaseSignup;
