function delayedGreeting(name, delayTime){
    setTimeout(()=>{
        console.log(`hello:${name}`);
    }, delayTime)
}

delayedGreeting("rasel", 2000)