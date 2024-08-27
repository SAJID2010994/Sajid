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
function tm(d) {
   ttl=treex.length
   for(var a=0;a<ttl;a++){
    if(d=="right"){
      
      
         treex[a]+=10
       
         
      
    }
    if(d=="left"){
   
      
         treex[a]-=10
       
         
      
    }  
    if(d=="up"){
 
      
         treey[a]-=10
       
         
      
    }
    if(d=="down"){
  
      
         treey[a]+=10
       
         
      }
    }

    
}