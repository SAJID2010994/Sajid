//imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {getDatabase,ref,child,set,update,remove,get} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
var canva=document.getElementById('y')
var ctx=canva.getContext('2d')
canva.width=window.innerWidth
canva.height=window.innerHeight
var left=document.getElementById('left')
var right=document.getElementById('right')
var up=document.getElementById('up')
var down=document.getElementById('down')
var atkbtn=document.getElementById('attack')
var pickbtn=document.getElementById('pick')
let playerx = canva.width / 2
let playery = canva.height / 2
let pxo=canva.width / 2
let pyo=canva.height / 2
var atkc=1
var plc=1
left.addEventListener('touchstart',()=>{
    controls.left=true
})
right.addEventListener('touchstart',()=>{
    controls.right=true
})
up.addEventListener('touchstart',()=>{
    controls.up=true
})
down.addEventListener('touchstart',()=>{
    controls.down=true
})
atkbtn.addEventListener('touchstart',()=>{
  if (atkc == 1) {
    attack()
    atkc = 0
    setTimeout(() => {
      atkc = 1
    }, 600)
  }
        
       
})
//variables
let treec=0
let treex=[]
let treey=[]
let tree_health=[]

let trc=0


let idle=0
let idle_time=0
let playerState={
    left:false,
    up:false,
    down:false,
    idle:true,
}
let controls={
    left:false,
    up:false,
    down:false,
    release:false,
}
let paframe=0
let left_animation_time=30
let gameFrame=0
let animation_time=7
let stonec=0
let stonex=[]
let stoney=[]
let woodc=0
let woodx=[]
let woody=[]
let sol=0
let treem=0
let itemsCount={
    stones:0,
    planks:0,
}
let playerup=0
let txt=0
let treetest=[]
let pt=0
let multiplayer=false
let gamertage;
// document.getElementById('c').style.top=`${window.innerHeight-200}vh`
left.addEventListener('touchend', () => {
  controls.left = false
  playerState.up = false
  playerState.down = false
  playerState.right = false
  playerState.left = false
  playerState.idle = true
  controls.release = true
})
right.addEventListener('touchend', () => {
  controls.right = false
  playerState.up = false
  playerState.down = false
  playerState.right = false
  playerState.left = false
  playerState.idle = true
  controls.release = true
})
up.addEventListener('touchend', () => {
  controls.up = false
  playerState.up = false
  playerState.down = false
  playerState.right = false
  playerState.left = false
  playerState.idle = true
  controls.release = true
})
down.addEventListener('touchend', () => {
  controls.down = false
  playerState.up = false
  playerState.down = false
  playerState.right = false
  playerState.left = false
  playerState.idle = true
  controls.release = true
})
pickbtn.addEventListener('touchstart',()=>{
    trc=1
    
})
pickbtn.addEventListener('touchend', () => {
  trc = 0

})
// atkbtn.addEventListener('touchend',()=>{
// sol=0
// playerState.up=false 
// playerState.down=false
// playerState.right=false
// playerState.left=false
// playerState.idle=true
// controls.release=true
// })

console.log(ctx);
//wood function
function wood() {
  var ctxx=ctx.getTransform().e
  var ctxy=ctx.getTransform().f
  let wooda=woodx.length
    for(var a=0;a<wooda;a++){
        if(woodx[a]+ctxx<canva.width && woodx[a]+ctxx>-2 && woody[a]+ctxy<canva.height && woody[a]+ctxy>-2){ 
          if (playerx < woodx[a]+ctxx+ 50 && playerx +  34> woodx[a] +ctxx&& playery > woody[a]+ctxy-5 &&  playery < woody[a]+ctxy+40) {
            pickbtn.removeAttribute('hidden')
            if (trc==1) {  
              woodc--
              woodx.splice(a, 1)
              woody.splice(a, 1)
              itemsCount.planks += 1
            }
          }
        
            ctx.drawImage(wd,woodx[a],woody[a],70,80)
         }
    }
}
//tree function
treec=20000//Math.floor(Math.random()*50000)+1

let amm=0

for(var i=0;i<treec;i++){
   
   var py=Math.floor(Math.random()*80000)
var ny=Math.floor(Math.random()*-80000)-1
tree_health.push(2)
treex.push(Math.floor(Math.random()*80000))
treey.push(Math.floor(Math.random()*py+Math.random()*ny))

tree_health.push(2)
treex.push(Math.floor(Math.random()*-80000)-1)
treey.push(Math.floor(Math.random()*py+Math.random()*ny))

}
var ttl=treex.length

function tree(){
     var ctxx=ctx.getTransform().e
var ctxy=ctx.getTransform().f
  if (trc==1) {
    
  }
for(var a=0;a<ttl;a++){


    if(treex[a]+ctxx<canva.width && treex[a]+ctxx>-2 &&treey[a]+ctxy< canva.height && treey[a]+ctxy>-2){   

        if(tree_health[a]==0){
           woodc++
           woodx.push(treex[a])
           woody.push(treey[a])
tree_health.splice(a,1)
treex.splice(a,1)
treey.splice(a,1)
      }

      ctx.drawImage(tr,treex[a],treey[a],80,110)

     }
             
  
    
}
    
}
//controls

window.onkeypress=b=>{
  if (b.key=='w') {
      controls.up=true
  }
  if (b.key=='a') {
      controls.left=true
  }
     if (b.key=='d') {
      controls.right=true
  }
     if (b.key=='s') {
      controls.down=true
  }
     if (b.key=='k') {
         if(sol==0){
          attack()
          sol++
         }
         controls.release=false
    
  }

  if (b.key=='p') {
  
      trc=1
  }
}
window.onkeyup=b=>{
  playerState.up=false 
  playerState.down=false
  playerState.right=false
  playerState.left=false
  playerState.idle=true
  controls.release=true
  if (b.key=='w') {
      controls.up=false 
  }
  if (b.key=='a') {
      controls.left=false
  }
     if (b.key=='d') {
      controls.right=false
  }
     if (b.key=='s') {
      controls.down=false
  }
  if (b.key=='k') {
       sol=0
      
 
}
if (b.key=='p') {
  
      trc=0
  }
}

function ctrl() {
  if(multiplayer==true){
    
    if (controls.up==true) {
// console.log('kdjdj');
      pyo-=10
      set(ref(db,'Players/'+gamertage),{
        posx:pxo,
        posy:pyo
      })
    
  }
    
  
    if (controls.left==true) {
      // tm('right') 
      // sm('right')
      // wm('right')
      // ctx.translate(10,0)
      pxo-=10
      set(ref(db,'Players/'+gamertage),{
        posx:pxo,
        posy:pyo
      })
      // console.log(ctx.getTransform());
      // playerState.up=false 
      // playerState.down=false
      // playerState.right=false
      // playerState.left=true
      // playerState.idle=false 

  }
    if (controls.down==true) {
      // tm('up')  
      // ctx.translate(0,-10)
      pyo+=10
      set(ref(db,'Players/'+gamertage),{
        posx:pxo,
        posy:pyo
      })
      // sm('up')
      // wm('up')
      // playerState.up=false 
      // playerState.down=true
      // playerState.right=false
      // playerState.left=false
      // playerState.idle=false

  }
    if (controls.right==true) {
      // tm('left')
      // ctx.translate(-10,0)
      pxo+=10
      set(ref(db,'Players/'+gamertage),{
        posx:pxo,
        posy:pyo
      })
      // sm('left') 
      // wm('left') 
      //         playerState.up=false 
      // playerState.down=false
      // playerState.right=true
      // playerState.left=false
      // playerState.idle=false
    
 
  }
  }
  if(multiplayer==false){
    if (controls.up==true) {
      // tm('down')
      // sm('down')
      // wm('down')
      ctx.translate(0,10)
      pyo-=10
      // console.log(ctx.getTransform());
      playerState.up=true 
      playerState.down=false
      playerState.right=false
      playerState.left=false
      playerState.idle=false
    
  }
    if (controls.left==true) {
      // tm('right') 
      // sm('right')
      // wm('right')
      ctx.translate(10,0)
      pxo-=10
    
      // console.log(ctx.getTransform());
      playerState.up=false 
      playerState.down=false
      playerState.right=false
      playerState.left=true
      playerState.idle=false 

  }
    if (controls.down==true) {
      // tm('up')  
      ctx.translate(0,-10)
      pyo+=10

      // sm('up')
      // wm('up')
      playerState.up=false 
      playerState.down=true
      playerState.right=false
      playerState.left=false
      playerState.idle=false

  }
    if (controls.right==true) {
      // tm('left')
      ctx.translate(-10,0)
      pxo+=10

      // sm('left') 
      // wm('left') 
              playerState.up=false 
      playerState.down=false
      playerState.right=true
      playerState.left=false
      playerState.idle=false
    
 
  }
  }

}
//stone
stonec=20000//Math.floor(Math.random()*50000)+1
let smm=0
for(var i=0;i<stonec;i++){
   
   var psy=Math.floor(Math.random()*80000)
var nsy=Math.floor(Math.random()*-80000)-1
stonex.push(Math.floor(Math.random()*80000))
stoney.push(Math.floor(Math.random()*psy+Math.random()*nsy))
stonex.push(Math.floor(Math.random()*-80000)-1)
stoney.push(Math.floor(Math.random()*psy+Math.random()*nsy))

}
var stl=stonex.length
function stone(){
     var ctxx=ctx.getTransform().e
     var ctxy=ctx.getTransform().f
for(var a=0;a<stl;a++){
     if(stonex[a]+ctxx<canva.width &&stonex[a]+ctxx>-2 &&stoney[a]+ctxy<canva.height && stoney[a]+ctxy>-2){
          if (playerx < stonex[a]+ctxx+ 20 && playerx + 34 > stonex[a]+ctxx && playery < stoney[a]+ctxy+ -1 && playery + 70 > stoney[a]+ctxy) {
               pickbtn.removeAttribute('hidden')
               if (trc==1) {
                    stonex.splice(a, 1)
                    stoney.splice(a, 1)
                    itemsCount.stones += 1
               }
             }
      
          ctx.drawImage(st,stonex[a],stoney[a],20,25)
     }
    
    
}
    
}
//pick
function pick() {
  //stone
  console.log('sre v');
  for(var a=0;a<stl;a++){
      if(stonex[a]<canva.width && stonex[a]>-2 && stoney[a]<canva.height && stoney[a]>-2){
          if(playerx < stonex[a]+20 && playerx+34 > stonex[a] && playery < stoney[a]+-1 && playery+70 > stoney[a]){
   stonex.splice(a,1)
   stoney.splice(a,1)
   itemsCount.stones+=1
           }
      }
  }
  //wood
  for(var a=0;a<woodc;a++){
      if(playerx < woodx[a]+20 && playerx+34 > woodx[a] && playery+70 > woody[a]){
        
          if(playerx < woodx[a]+50 && playerx+34 > woodx[a] && playery < woody[a]+10 && playery+70 > woody[a]){
            console.log('ss')
  woodc--
   woodx.splice(a,1)
   woody.splice(a,1)
   itemsCount.planks+=1
           }
      }
  }
}
//players

function player() {
  if(playerState.idle==true){
      if(idle_time==30){
          idle=0
          idle_time=0
      }
              if(idle==0){ ctx.drawImage(pl,0,0,51,55,pxo,pyo,50,50)}}
  
if(playerState.left==true){

gameFrame++
if(gameFrame % animation_time == 0){
  if(paframe<2) paframe++
  else paframe=0
}
ctx.drawImage(pl,51*(paframe),55,51,55,pxo,pyo,50,50)
}
if(playerState.right==true){
gameFrame++
if(gameFrame % animation_time == 0){
  if(paframe<2) paframe++
  else paframe=0
}
ctx.drawImage(pl,51*(paframe),55*2,51,55,pxo,pyo,50,50)
}
if(playerState.up==true){
gameFrame++
if(gameFrame % animation_time == 0){
  if(paframe<2) paframe++
  else paframe=0
}
ctx.drawImage(pl,51*(paframe),55*3,51,55,pxo,pyo,50,50)
}
if(playerState.down==true){
gameFrame++
if(gameFrame % animation_time == 0){
  if(paframe<2) paframe++
  else paframe=0
}
ctx.drawImage(pl,51*(paframe),0,51,55,pxo,pyo,50,50)
}

  }
//attack
function attack() {
  var ctxx=ctx.getTransform().e
  var ctxy=ctx.getTransform().f
  //tree
  console.log('ajskj');
  for(var a=0;a<ttl;a++){
      if(treex[a]+ctxx<canva.width && treex[a]+ctxx>-2 && treey[a]+ctxy<canva.height && treey[a]+ctxy>-2){
          if(playerx < treex[a]+ctxx+40 && playerx+34 > treex[a]+ctxx && playery < treey[a]+ctxy+70 && playery+55 > treey[a]+ctxy){
              tree_health[a]--
           }}
      
  }
}
//adding sprites
var tr=document.getElementById('tree')
var pl=document.getElementById('player')
var st=document.getElementById('stone')
var wd=document.getElementById('wood')
var mgrnd=document.getElementById('mgrnd')
var grnd=document.getElementById('background')
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
//database functions
let db=getDatabase()
let refDb=ref(db)
let abv=0
class database{
write(px,py){
  set(ref(db,'Players/'+gamertage),{
    posx:px,
    posy:py
  })
}
read(){
 get(child(refDb,'Players/mahadi')).then(function(snap){
  return snap
  })
}
}
let server=new database()
 console.log(server.read());
 set(ref(db,'Players/mahadi'),{
  posx:100,
  posy:500
})
//  ctx.imageSmoothingEnabled=false;
if(window.location.search=='?true'){
  multiplayer=true
  gamertage=prompt('Enter your gamertage !','')
  //startup
  get(child(refDb,'Players/'+gamertage)).then(function(snap){
   if(snap.exists()){console.log(snap.val())}else{ 
     server.write(0,0)
   }
   
    })

       function multi(){
  ctrl()
         get(child(refDb,'Players/')).then(function(snap){
          ctx.clearRect(-1000000,-1000000,5000000,5000000)
           for(var i=0;i<Object.keys(snap.val()).length;i++){
            var result = Object.keys(snap.val()).map((key) => [key, snap.val()[key]]);
       
            console.log(result[i][1]);
            ctx.drawImage(pl,0,0,51,55,result[i][1].posx,result[i][1].posy,50,50)
           }
            
             })
  requestAnimationFrame(multi)
       }
       multi()
}else{
  function main(){
    pickbtn.setAttribute('hidden','')     
    ctx.clearRect(-1000000,-1000000,5000000,5000000)
    console.log(multiplayer);
    ctrl()
    stone()
    wood()
    player(0)
    tree()
    requestAnimationFrame(main)
        }
        main()
}


