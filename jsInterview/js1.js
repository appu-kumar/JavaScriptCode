// console.log("hello world")

// ############################################################
const sampleData = [
  { key: "sample1", data: "data1" },
  { key: "sample2", data: "data2" },
  { key: "sample2", data: "data3" }, // duplicate
  { key: "sample4", data: "data4" },
  { key: "sample2", data: "data5" }, // duplicate
  { key: "sample4", data: "data6" },
  { key: "sample7", data: "data7" }, // duplicate
  { key: "sample5", data: "data8" },
  { key: "sample4", data: "data9" }, // duplicate
  { key: "sample1", data: "data10" } // duplicate
];
// this can be done using the Array.reduce method okay
let output = {};
sampleData.forEach((val)=>{
    if(output[val.key]){
        output[val.key].push(val);
    }
    else{
        output[val.key] = [val];
    }
})
// console.log(output)

// #####################################
// See ?? (Nullish Coalescing) provides the default value if value is undefined or null okay means all fasly value se koi lena dena nhi hai okay
// second para is default value okay if first does not exist


const x = undefined ?? 'ak';
console.log(x);

const y = null ?? 'pk' ;
console.log(y)

// #############################################
// optional chaning
let name1 = object?.name;
console.log(name1)
// object undefined ha ito undefined return ho jayega okay nhi to end tak chalega jab tak name ni mil jata okay

//##############################################

function memoizeOne(fn){
   const alreadyPresent = {};
   return (a,b) => {
      const ab = `{${a},${b}}`;
      if(alreadyPresent[ab]){
         return alreadyPresent[ab];
      }
      else{
        alreadyPresent[ab] = fn(a,b);
      }
   } 
}

const add = (a,b) => a+b;

const memoizedAdd = memoizeOne(add);
console.log(memoizeOne(add))

console.log(memoizedAdd(2,3));



