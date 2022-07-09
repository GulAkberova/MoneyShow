let money=[500,200,100,50,20,10,5,1]
let inp=document.getElementById("inp")
let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
 let pul=inp.value
    money.map(index=>{
        let mainmoney=parseInt(pul/index)
       if(mainmoney>0){
        pul=pul-mainmoney*index
       let div= document.createElement("div")
       for(let i=0;i<mainmoney;i++){
            let img=document.createElement("img")
            img.src=`./money.img/${index}man.jpg`;
            img.style.left = `${i*60}px`;
            div.append(img)
        }
        document.body.append(div)
       }
    })
})
