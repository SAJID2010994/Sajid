
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
