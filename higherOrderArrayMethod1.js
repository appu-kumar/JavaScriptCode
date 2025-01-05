const arr = [1, 3, 3, 3, 3, 3, 3, 3];

// +++++++++++++++++++++++++++++++++++ for of loop ++++++++++++++++++++++++++++++++++++
/*
for(const num of arr)
{
    console.log(num);
}  */

/*

const map=new Map();
map.set("IN","india");
map.set("USA","United states of America");
map.set("pak","pakistan");
map.set("IN","India");

// console.log(map);

for(const [key,value] of map)
{
    console.log(`key:-${key}  value:-${value}`);
}



/*
const user={
        name:"appu",
        role:5,
        subjects:5
}

// can not iterate over Object
for(const [key,value] of user)
{
    console.log(key,value);
}
*/

//+++++++++++++++++++++++++++++++++++++++ for in loop +++++++++++++++++++++++++++++++

/*
const user = {
    name: "appu",
    roll: 5,
    subjects: 5
}

for (const key in user) {
    console.log(key);
    console.log(user[key]);
}
*/

//++++++++++++++++++++++++++++++++++ forEach loop very imp +++++++++++++++++++++
/*
        db se data array ki form me aata hai   [{}{}{}{}] [[][][][][]]    in me traverse karne ke liye forEach loop sahi hai
*/

// const mobileInfo = [
//   { type: "nokia", price: 5000, pkId: 345 },
//   { type: "jio", price: 5000, pkId: 345 },
//   { type: "iphone", price: 5000, pkId: 345 },
//   { type: "mi", price: 5001, pkId: 345 },
// ];

/*
/// function 3 paramters leta hi marzi zitna use krna hai kro   item,idx,pura arraay 
mobileInfo.forEach((item)=>{                                 //(item,idx,arr)
    console.log(item.type);
    // console.log(idx);
    // console.log(arr);
});
*/

// used for the traversal only
/// forEach loop takes the item and manipulate that's it.
// disadv. it does not return anything
// array.forEach((element, index, array) => {
//     // Your logic here
//   });
  

// mobileInfo.forEach((ele, idx, arr )=>{
//     console.log(ele)
// })


/*
// own forEach method
function access(ele,idx,arr){
      console.log(ele);
}
Array.prototype.myForEach = (access)=>{
     for(let i=0;i<this.length;i++){
        access(this[i],i,this);
     } 
}
mobileInfo.myForEach(access);
*/

const mobileInfo = [
    { type: "nokia", price: 5000, pkId: 345 },
    { type: "jio", price: 5000, pkId: 345 },
    { type: "iphone", price: 5000, pkId: 345 },
    { type: "mi", price: 5001, pkId: 345 },
  ];
  

// my own map

/*
function callback(ele){
      return ele.price%2 === 0;
}

Array.prototype.myMap = function(callback) {
   let output = [];
   for(let i=0;i<this.length;i++){
      if(callback(this[i])){
          output.push(this[i]);
      }
   }

   return output;
}

console.log(mobileInfo.myMap(callback))
*/

// my reduce method

let ans = mobileInfo.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr.price)){
        acc[curr.price]+=1;
    }
    else{
        acc[curr.price]=1;
    }
    return acc;
},{});

console.log(ans)



