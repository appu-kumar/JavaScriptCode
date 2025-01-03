


// function r(){
//       // var i=undefined
//     //    console.log('up',i);
    
//        for(var i=1;i<=4;i++){
//           setTimeout(()=>{
//                   console.log(i);
//           },i*1000)
//        }
//     //    console.log('below', i);
// }

// r();





// call back queue    settime with i=5, settime with i=5, settime with i=5  ...



function r(){                    // this will print i every time
  //    console.log('up',i);
  
     for(let i=1;i<=4;i++){
        setTimeout(()=>{
                console.log(i);
        },i*1000)
     }
  //    console.log('below', i);
}

r();