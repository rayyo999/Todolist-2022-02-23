window.addEventListener("load",()=>{
    const showarr = [];
    const text = document.getElementById("text");
    const date = document.getElementById("date");
    const addbtn = document.getElementById("addbtn");
    const list = document.getElementById("list");
    addbtn.addEventListener("click",()=>{
        if(text.value === "" || date.value === ""){
            alert("Type Somethings....");
            return
        }
        let wantToAdd = {};
        wantToAdd.text = text.value;
        wantToAdd.date = date.value;
        showarr.push(wantToAdd);
        render();
        text.value = "";
        
    })
    list.addEventListener("click",(e)=>{
        if(e.target.id === "delbtn"){
            const num = e.target.getAttribute("data-num");
            showarr.splice(num,1);
            render();
        }
    })
    function render() {
        let showstr = "";
        showarr.forEach((item,index)=>{
            if(index % 2 === 0){
                showstr += `<li class="bg-light m-1 p-1"><span>${item.text}</span><span class="px-4">${item.date}</span><button class="btn btn-danger p-1" id="delbtn" data-num="${index}" style="position:; ">Delete</button></li>`;
            } else{
                showstr += `<li class="m-1 p-1 "><span>${item.text}</span><span class="px-4">${item.date}</span><button class="btn btn-danger p-1" id="delbtn" data-num="${index}">Delete</button></li>`;
            }
        })
        list.innerHTML = showstr;
    }
    console.log("load");
})