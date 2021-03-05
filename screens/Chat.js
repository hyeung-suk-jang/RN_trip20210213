import React, {Component} from 'react';

import {GiftedChat} from 'react-native-gifted-chat';
import * as firebase from 'firebase';
import {firebaseConfig,FCMKey} from '../config/config'

export default class Chat extends Component {

///you have to change current User after final now its tested

  state = {
    messages: [],
    currentUser: {
      _id: '3',
      name: 'Test',
    },
  };

  componentDidMount = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase
      .database()
      .ref('messages')
      .child(this.state.currentUser._id)
      .child(this.props.route.params.userData._id)
      .on('child_added', (Value) => {
          console.log("child add ",Value.val().message[0])
        this.setState((prevState) => {
       
            // return{
            //     messages:[...prevState.messages,Value.val().message[0]]
            // }

            return{
                messages:  GiftedChat.append(prevState.messages,Value.val().message[0])  
            }
          
        });
      });

      console.log("data is ",this.state.messages)
  };


  sendMessage = async (messages) => {
    let msgId = firebase
    .database()
    .ref('messages')
    .child(this.state.currentUser._id)
    .child(this.props.route.params.userData._id)
    .push().key;
  let updates = {};
  let message = {
    message: messages,
  };
  updates[
    'messages/' +
    this.state.currentUser._id +
      '/' +
      this.props.route.params.userData._id +
      '/' +
      msgId
  ] = message;
  // updates['messages/'+ msgId] = message
  updates[
    'messages/' +
      this.props.route.params.userData._id +
      '/' +
      this.state.currentUser._id +
      '/' +
      msgId
  ] = message;
  // updates['messages/' + msgId] = message;
  firebase.database().ref().update(updates);

    this.sendNotification(messages.text)
}

//send Notification

sendNotification= async(messageText)=>{

    //here 3 is user ID
    let accessToken=''
        firebase
        .database()
        .ref('users/'+this.props.route.params.userData._id)
        .once('value', snap =>{ 
        console.log("test",snap.val().push_token)

          const message = {  
            registration_ids: [snap.val().push_token],
            notification: {
              title: "Message from "+this.state.currentUser.name,
              body: messageText,
              "vibrate": 1,
              "sound": 1,
              "show_in_foreground": true,
              "priority": "high",
              "content_available": true,
            },
          }
          let headers = new Headers({
            "Content-Type": "application/json",
            Authorization: "key="+FCMKey
          })
          let response = fetch("https://fcm.googleapis.com/fcm/send", {
            method: "POST",
            headers,
            body: JSON.stringify(message),
          }).then(response=>response.json())
          .then(responsejson=>{
            console.log(responsejson)
          })
          .catch(error=>{
            console.log(error)
          })
    
          this.setState({notificatinToken:snap.val()})
          console.log('Access token===>', ( this.state.notificatinToken.push_token))
        }
          );
      }


  render() {
    return (
      <GiftedChat
        messages={
            this.state.messages
}
        onSend={(messages) => this.sendMessage(messages)}
        user={{
          _id: this.state.currentUser._id,
          name:this.state.currentUser.name,
          avatar: 'https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450'
        }}
        isTyping={true}
        isLoadingEarlier={true}
        showAvatarForEveryMessage ={true}
        showUserAvatar={true}
      />
    );
  }
}

