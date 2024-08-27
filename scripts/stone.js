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
function sm(d) {
     stl=stonex.length
     for(var a=0;a<stl;a++){
      if(d=="right"){
      
      
        stonex[a]+=10
      
        
     
   }
   if(d=="left"){
     
     
        stonex[a]-=10
      
        
     
   }  
   if(d=="up"){
    
     
        stoney[a]-=10
      
        
     
   }
   if(d=="down"){
   
     
       stoney[a]+=10
      
        
     
   }

     }


}