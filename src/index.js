import './css/main.scss'

console.log("Imported")

var gatillo = document.getElementById("gatillo")
var sider = document.getElementById("sider")

gatillo.addEventListener("click", ()=>{
    if ( sider.className.match(/(?:^|\s)lado(?!\S)/) ){
        sider.className =sider.className.replace( /(?:^|\s)lado(?!\S)/g , 'sider' )
    }else{
        sider.className =sider.className.replace( /(?:^|\s)sider(?!\S)/g , 'lado' )
    }
})