import PushNotification from 'react-native-push-notification';
import React, { useState } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useToast } from 'react-native-styled-toast'

//const { toast } = useToast()

export const ShowNotification = (title1, message1) => {

  PushNotification.localNotification({
    title: title1,
    message: message1,
  });
  //toast({ message: 'Woo! This is a success toast.' })

  //setTimeout(() => setIsAlert(false), 3000);
  // return(
  //    <AwesomeAlert
  //         show={true}
  //         showProgress={false}
  //         title="AwesomeAlert"
  //         message="I have a message for you!"
  //         closeOnTouchOutside={false}
  //         closeOnHardwareBackPress={true}
  //         showCancelButton={false}
  //         showConfirmButton={false}
  //       />
  // )
};

// export const CancleNotification = () => {
//   PushNotification.cancelAllLocalNotifications();
// };
