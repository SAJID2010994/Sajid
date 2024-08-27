
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
function wm(d) {
    if(d=="right"){
      for(var a=0;a<woodc;a++){
      
         woodx[a]+=10
       
         
      }
    }
    if(d=="left"){
      for(var a=0;a<woodc;a++){
      
        woodx[a]-=10
       
         
      }
    }  
    if(d=="up"){
      for(var a=0;a<woodc;a++){
      
         woody[a]-=10
       
         
      }
    }
    if(d=="down"){
      for(var a=0;a<woodc;a++){
      
        woody[a]+=10
       
         
      }
    }
    
}