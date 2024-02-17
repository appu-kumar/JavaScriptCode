const randomColorGenerator=function(){

      const hex="123456789ABCDEFG";
      
       let color='#';            // #ffffff    6 character append hote hao ok
       for(let i=0;i<6;i++)
       {
            color+=hex[Math.floor(Math.random()*16)];
       }

       return color;
}

let bgChanger;
let changeBgColor=function(){
    document.querySelector('body').style.backgroundColor=randomColorGenerator();
}
document.querySelector('#start').addEventListener('click',()=>{
      bgChanger=setInterval(changeBgColor,1000);  
})

document.querySelector('#stop').addEventListener('click',()=>{
      clearInterval(bgChanger);
})
