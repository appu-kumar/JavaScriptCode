
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
  ];

 // const values=books.filter((item)=>item);             // filter returns an item and stored into the values.
  //console.log(values);

  // how can we do this thing with the help of the foreach loop
/*
  const values=[];

  books.forEach((book)=>{
      if(book.title.length>5)
          values.push(book);
  })

  console.log(values);
  */

//   const values=books.map((book)=>book.title.length>5);     // map gives true and false filter gives the values.
//   console.log(values);


   const ages=[1,2,3,4,5,6,7,8,9];
  // map chaning
  const values=ages
              .map((age)=>age*10)          // pehele ye complete hoga okay
              .map((age)=>age+1)
              .filter((age)=>age>=18);

  console.log(values);