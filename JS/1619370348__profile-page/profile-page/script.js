
function changeJanedoetoAnne(el){
    var element=document.getElementById('name')
    element.innerText='Anne J'
}
function removeItem(el){
    var elementDef=document.getElementById('toddi')
    elementDef.remove()
}
function remove(el){
    var elementDef=document.getElementById('phil')
    elementDef.remove()
}
function changeAcceptto500increase(el){
    var likes=Number(500)
    likes++;  
    console.log(likes)
    document.getElementById('500').innerText=likes
}