if("serviceworker" in navigator){
    navigator.serviceWorker.register('/serviceWorker.js')
    .then((reg)=>console.log(" sw registered", reg))
    .catch((error)=>console.log("sw not registered", error))
}