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