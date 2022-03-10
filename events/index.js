// TODO 1: Buat atau impor variabel EventEmitter dari core module events.
const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }

// TODO 2: Buat variabel myEmitter yang merupakan instance dari EventEmitter.
  const onbirthdayEventListener = ({ name }) => {
    birthdayEventListener(name);
}

// TODO 3: Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
myEventEmitter.on('birthday', onbirthdayEventListener);

// TODO 4: Bangkitkan event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.
myEventEmitter.emit('birthday', { name: 'Sahid' });
