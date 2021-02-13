import '@firebase/auth';
import '@firebase/firestore';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey : 'AIzaSyCaKVeqIxVbfQqMQdbA2-pfaXJ-yf2B1ng',
  authDomain : 'nanichat-8dcc4.firebaseapp.com',
  databaseURL : 'https://nanichat-8dcc4.firebaseio.com',
  projectId : 'nanichat-8dcc4',
  storageBucket : 'nanichat-8dcc4.appspot.com',
  messagingSenderId : '92032707736',
  appId : '1:92032707736:android:7eb7f53ff3769af7edb4ed'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
