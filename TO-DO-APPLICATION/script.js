const ToDoList= document.querySelector(".list")
// console.log(ToDoList)
const inputElement= document.querySelector("input");
const add= document.querySelector("#add-btn");
// console.log(inputElement);
// console.log(add)

add.addEventListener('click', ()=>{
    const currtask= inputElement.value;
    console.log(currtask); //...working
    inputElement.value="";
    const newdiv= document.createElement("div");
    newdiv.classList.add("task");
    newdiv.innerHTML= ` <div class="left-section" style="display: flex; flex-wrap: wrap; gap: 20px;">
                 <input type="checkbox" class="checkbox"> 
                 <p>${currtask}</p>
            </div>
            <div class="right-section">
                <span class="moveup">⬆️</span>
                <span class="binBtn">🗑️</span>
                <span class="movedown">⬇️</span>
            </div>`
console.log(newdiv)
    ToDoList.append(newdiv);
})

    ToDoList.addEventListener('click', (e)=>{
        
//........................................remove............................................

     if(e.target.classList.contains("binBtn")){
        // console.log("bin clicked")
        const Remdiv= e.target.parentElement.parentElement;
       Remdiv.remove();
    }



//............................Move Up........................................
if(e.target.classList.contains("moveup")){
        // console.log("bin clicked")
        const mdiv= e.target.parentElement.parentElement;
        const prevsib= mdiv.previousElementSibling;
        if(prevsib)
        // console.log(prevsib)
        prevsib.before(mdiv);
        else{ToDoList.append(mdiv)}
    }



//.........................Move Down...........................
if(e.target.classList.contains("movedown")){
        // console.log("bin clicked")
        const mdiv= e.target.parentElement.parentElement;
        const prevsib= mdiv.nextElementSibling;
        if(prevsib)
        // console.log(prevsib)
        prevsib.after(mdiv);
        else{ToDoList.prepend(mdiv)}
    }


//.........................checkBox..................................
if(e.target.classList.contains("checkbox")){
        const data= e.target.nextElementSibling;
       
       data.classList.toggle("checked");
        
    }
    
})

    
