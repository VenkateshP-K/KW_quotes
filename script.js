var head = document.createElement('div');
head.className = 'head';
head.innerHTML='Kanye West Quotes';

var btn = document.createElement("button");
btn.setAttribute("type","button");
btn.innerText="Refresh"
//adding refresh page fn for this function so,that we get another quote when we click
btn.addEventListener('click',function() {
    window.location.reload();
});


//fetching info from API using async and await function 
async function foo(){
    var ele = await fetch("https://api.kanye.rest/")
    var ele2 = await ele.json();
    console.log(ele2);
    
        var div = document.createElement("div");
        div.innerHTML=ele2.quote;
        
        document.body.append(head,div,btn);
}
foo()