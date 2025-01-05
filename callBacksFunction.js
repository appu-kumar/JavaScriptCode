function handleEventListner() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xzy(){
    console.log(count++);
  });
}

handleEventListner();
