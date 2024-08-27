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