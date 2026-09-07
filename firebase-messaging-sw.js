importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAZxIBtWdhnyT9qrFkkyPyX6TwgFYeYK0",
  authDomain: "lewokdashboard.firebaseapp.com",
  projectId: "lewokdashboard",
  storageBucket: "lewokdashboard.appspot.com",
  messagingSenderId: "326283554039",
  appId: "1:326283554039:web:84804ce68ed322876677f2"
});

const messaging = firebase.messaging();

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

messaging.onBackgroundMessage((payload) => {
  console.log('Background Message received:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3076/3076129.png',
    sound: 'default',
    badge: 'https://cdn-icons-png.flaticon.com/512/3076/3076129.png',
    vibrate: [200, 100, 200]
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});