
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
