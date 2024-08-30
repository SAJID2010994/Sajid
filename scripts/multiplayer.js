// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhHoaC7-scyj9D1mLflGx9kq3-nNlnCoA",
  authDomain: "game-7fbdb.firebaseapp.com",
  databaseURL: "https://game-7fbdb-default-rtdb.firebaseio.com",
  projectId: "game-7fbdb",
  storageBucket: "game-7fbdb.appspot.com",
  messagingSenderId: "637092416990",
  appId: "1:637092416990:web:51b8f2c03d6d57093ae14f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {getDatabase,ref,child,set,update,remove,get} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
let db=getDatabase()
function write(){
  console.log('djdj')
update(ref(db,'Players/mahadi'),{
  posx:20
}).then(()=>{
  alert('djjd')
})
}
function read() {
let refDb=ref(db)
get(child(refDb,'Players/mahadi/')).then((snap) => {
console.log(snap.val())
})
}
read()
document.getElementById('hh').addEventListener('click',()=>{
  write()
})
