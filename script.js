let buttons=document.querySelectorAll(".box")
let restart=document.querySelector("#refresh")
let massageDiv=document.querySelector(".massageDiv")
let massage=document.querySelector(".massage")
let New=document.querySelector(".New")
let playerO=true

const winnerCombination=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
buttons.forEach((btnList)=>{
   btnList.addEventListener("click",(btn)=>{
    if(playerO){
        btn.target.innerText="O"
        playerO=false
    }else{
        btn.target.innerText="X"
        playerO=true
    }
    checkWinner()
    btn.target.disabled=true
    
   })
})

const checkWinner=()=>{
  winnerCombination.forEach((pos)=>{
    let post1Val=buttons[pos[0]]
     let post2Val=buttons[pos[1]]
      let post3Val=buttons[pos[2]]
      if(post1Val.innerText=="" || post2Val.innerText=="" || post3Val.innerText==""){

      }
      else if(post1Val.innerText === post2Val.innerText && post2Val.innerText === post3Val.innerText ){
          buttons.forEach((btn)=>{
            btn.disabled=true
          })
           WinnerMassage(post1Val.innerText)
      }else{
        let buttonVal=0;
        buttons.forEach((btn)=>{
          if(btn.innerText !== ""){
            buttonVal+=1
          }
          console.log(buttonVal)
          if(buttonVal==9 && post1Val.innerText !== post2Val.innerText && post2Val.innerText !== post3Val.innerText)
               draw()
        })
      }

  })
}
const draw=()=>{
   restart.disabled=true
   massageDiv.classList.remove("hide")
   massage.innerText=`Game Draw! `
}
const  WinnerMassage=(pos)=>{
     restart.disabled=true
   massageDiv.classList.remove("hide")
   massage.innerText=`Congratulation ,Winner is ${pos} `

}

restart.addEventListener("click",(e)=>{
    buttons.forEach((btn)=>{
  btn.innerText=""
    })
})
New.addEventListener("click",(e)=>{
    restart.disabled=false
     buttons.forEach((btn)=>{
  btn.innerText=""
    })
     massageDiv.classList.add("hide")
      buttons.forEach((btn)=>{
            btn.disabled=false
          })
})