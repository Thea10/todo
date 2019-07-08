const input = document.getElementById('input');
var list = document.getElementById('list');
var listItems = document.getElementsByClassName('list-items');
var checkbox = document.getElementsByClassName('check');



Enter = (e) => {
  // console.log(e);
   if (event.which === 13){
       //console.log('enter key');
       Save();     
   }
}

Save = (e) => {
    //console.log(e);
    if (input.value === ""){
        input.classList.add('error');
    }
    else{
        Create();
    }    
}

function Create() {
    var cmp = input.value;
    const a = [...listItems];

    const itemExists = a.some(function(i){
        if(i.innerText === cmp){
            return true;
        }
    });

    if (itemExists){
        console.log('error');
        input.classList.add('error');
    }else{
        input.classList.remove('error');
        list.innerHTML += `  <li class="list-items"> ${cmp}<input type="checkbox" class="check" onclick="Del(event)"> </li>`;   
        /* input.classList.remove('error');
        var newLi = document.createElement('li');
        newLi.className="list-items";
        var newbox = document.createElement('input');
        newbox.type = "checkbox";
        newbox.className = "check";
        list.appendChild(newLi);
        newLi.innerText = input.value;
        newLi.appendChild( newbox); */
        
    }      
}; 

 Del = (e) => {
    var rem = e.target.parentElement;
    rem.remove();
}


  
    




   
 
