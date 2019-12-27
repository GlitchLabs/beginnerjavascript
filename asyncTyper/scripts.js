function wait(ms=0){
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    })
}