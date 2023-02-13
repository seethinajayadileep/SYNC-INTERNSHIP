const b2=document.getElementById("sign");
const s1=document.getElementById("rem");
function remove2(){
    s1.parentElement.remove();
}
b2.addEventListener("click",remove2);







const stop=document.getElementById("sign").addEventListener("click", function()
{
    event.preventDefault();
});



