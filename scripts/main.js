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
//adding sprites
var tr=document.getElementById('tree')
var pl=document.getElementById('player')
var st=document.getElementById('stone')
var wd=document.getElementById('wood')
var mgrnd=document.getElementById('mgrnd')
var grnd=document.getElementById('background')
//main function
   

//  ctx.imageSmoothingEnabled=false;
function main(){
pickbtn.setAttribute('hidden','')     
ctx.clearRect(-1000000,-1000000,5000000,5000000)

ctrl()
stone()
wood()
player(0)
tree()
requestAnimationFrame(main)
    }
    main()

