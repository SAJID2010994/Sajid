import kaboom from "./kaboom.js"
var canva=document.getElementById("y")
kaboom({
    canvas:canva,
    background: [126,200,80, ]
})
 
//loading sprites
loadSprite("ubtn","images/up.png")
loadSprite("dbtn","images/down.png")
loadSprite("lbtn","images/left.png")
loadSprite("rbtn","images/right.png")
loadSprite('tree','images/tree.png')
loadSprite('stone','images/stone.png')
var gd=loadSprite("ground",'images/background.png')

loadSprite("pl",'images/kis.png',{
    sliceX:19,
    anims:{
        'walk-left':{
            from:16,
            to:18,
             loop:true
            // speed:3
        },
        'walk-right':{
            from:13,
            to:15,
             loop:true
        },
        'walk-up':{
            from:10,
            to:12,
             loop:true
        },
        'walk-down':{
            from:7,
            to:9,
             loop:true
        }, 
        'idle':{
            from:0,
            to:1,
             loop:true,
            speed:0.5
        }
    }   
})
//adding background
var grnd=add([
    sprite('ground'),
    pos(width()/2,height()/2),
    anchor('center'),
    scale(1),
    fixed()
])
grnd.scaleTo(Math.max(
    width()/421,
    height()/458
))
//defining variables
var speed=300
var t=0
var l=0
var r=0
var u=0
var clicked={
    left:"0",
    right:"0",
    up:"0",
    down:"0"
}
var hit=0
//controls
var lbtn=add([
    sprite('lbtn'),
    area(),
    fixed(),
    pos(20,height()-120),
    scale(0.5)
])
var rbtn=add([
    sprite('rbtn'),
    area(),
    fixed(),
    pos(155,height()-120),
    scale(0.5)
])
var dbtn=add([
    sprite('dbtn'),
    area(),
    fixed(),
    pos(90,height()-70),
    scale(0.5)
])
var ubtn=add([
    sprite('ubtn'),
    area(),
    fixed(),
    pos(95,height()-170),
    scale(0.5)
])
//key events
onKeyDown('left',(g)=>{left()})
onKeyDown('right',()=>{right()})
onKeyDown('up',()=>{up()})
onKeyDown('down',()=>{down()})
onKeyPress('left',(g)=>{wa(0)})
onKeyPress('right',(g)=>{wa(1)})
onKeyPress('up',(g)=>{wa(2)})
onKeyPress('down',(g)=>{wa(3)})
onKeyPress('a',(g)=>{hit=1})
onKeyRelease(()=>{agamc()})
// touch events
onUpdate(()=>{
    if(clicked.left==1){
left()
    }
    if(clicked.right==1){
        right()
            }
            if(clicked.up==1){
                up()
                    }
                    if(clicked.down==1){
down()
    }
    if(hit==1){


    }
})

onTouchStart((id,pos)=>{

if(lbtn.hasPoint(id)){
clicked.left="1"
wa(0)
}else if(rbtn.hasPoint(id)){
    clicked.right="1"
    wa(1)
    }else if(ubtn.hasPoint(id)){
        wa(2)
        clicked.up="1"
        }else if(dbtn.hasPoint(id)){
            wa(3)
            clicked.down="1"
            }
})
onTouchEnd(()=>{
    clicked.left=0
    clicked.right=0
    clicked.uo=0
    clicked.down=0
    agamc()
})
//move funtions

function left(){
    player.move(-speed,0)
  
}
function right(){
    player.move(speed,0)
}
function up(){
    player.move(0,-speed)
}
function down(){
    player.move(0,speed)
}
//attack and break functions
function attack(){

}
//animation controller
function wa(a){
if(a==0){
player.play('walk-left')
}
if(a==1){
    player.play('walk-right')
    }   
    if(a==2){
        player.play('walk-up')
        }  
        if(a==3){
            player.play('walk-down')
            } 
}
function agamc(){
player.stop()
player.play('idle')
}
//stone
for(var f=0;f<10000;f++){
    var ny=randi(0,30)
    var randomxs=rand(0,10000)
    var randomys=rand(0,10000)  
    var randomxms=rand(0,-10000)
    var randomyms=rand(0,-10000)  
    if(ny==1){
        var stone=add([
            sprite('stone'),
            pos(randomxs,randomys),
            area(),
            scale(0.5),
             offscreen({pause:true}),
             'st'
        ])
        var stone=add([
            sprite('stone'),
            pos(randomxms,randomyms),
            area(),
            scale(0.5),
             offscreen({pause:true}),
             'st'
        ])  
    } 
      
    

}
//player
var player=add([
    sprite('pl'),
    health(5),
    scale(2),
    area(),
   pos(center()),
    'jd'
])
player.onUpdate(()=>{
    camPos(player.pos)
    

})

//tree
for(var e=0;e<10000;e++){
    var yn=randi(0,20)
    var randomx=rand(0,10000)
    var randomy=rand(0,10000)  
    var randomxm=rand(0,-10000)
    var randomym=rand(0,-10000)  
    if(yn==1){
        // var tree=
       add([
            sprite('tree'),
            pos(randomx,randomy),
            area(),
             offscreen({pause:true}),
             health(6),
             'tr'
        ])
      //  var tree=
    //   add([
    //         sprite('tree'),
    //         pos(randomxm,randomym),
    //         area(),
    //          offscreen({pause:true}),
    //          health(1),
    //          'tr',

    //     ])  
     } 
      
    

}

//controls
var lbtn=add([
    sprite('lbtn'),
    area(),
    fixed(),
    pos(20,height()-120),
    scale(0.5)
])
var rbtn=add([
    sprite('rbtn'),
    area(),
    fixed(),
    pos(155,height()-120),
    scale(0.5)
])
var dbtn=add([
    sprite('dbtn'),
    area(),
    fixed(),
    pos(90,height()-70),
    scale(0.5)
])
var ubtn=add([
    sprite('ubtn'),
    area(),
    fixed(),
    pos(95,height()-170),
    scale(0.5)
])
player.onCollide('tr',(wtree)=>{
    console.log('ejjjj')
    wtree.hurt(1)
    })
    // tree.on('death',(ad)=>{
    //     destroy(ad)
    //     console.log("hdhdwhydjswkk")
    // })