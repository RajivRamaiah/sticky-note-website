import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyA5hHFYKk444bwsXYACWha9fuHN6G-gnXk',
  authDomain: 'sticky-note-central.firebaseapp.com',
  databaseURL: 'https://sticky-note-central.firebaseio.com',
  storageBucket: '',
};

firebase.initializeApp(config);

const database = firebase.database();

export function deleteNote(id) {
  database.ref('id').remove();
}

export function updateNote(id, data) {
  database.ref('notes').child(id).update(data);
}

export function addNote(note) {
  database.ref('notes').push(note);
}

export function onNotesChanged(handleNotes) {
  database.ref('notes').on('value', (snapshot) => {
    handleNotes(snapshot.val());
  });
}
