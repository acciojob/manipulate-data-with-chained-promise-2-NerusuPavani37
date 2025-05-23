
 let arr =[1, 2, 3, 4];

 function getArray(){
  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(arr);
    },3000)
  })
 }

function evenArr(arr){
   return new Promise((resolve) =>{
    setTimeout(()=>{
     let evenArr = arr.filter(num => num%2 === 0)
     let output = document.getElementById('output');
      output.innerHTML += evenArr;
      resolve(evenArr);
   },1000)
   })
}

function multiplyByTwo(evenArr){
  return new Promise((resolve) =>{
    setTimeout(()=>{
     let doubledArr = evenArr.map(num => num*2);
     let output = document.getElementById('output');
      output.innerHTML += `<br>
      ${doubledArr}
      `;
      resolve("done");
   },2000)
   })
}


getArray()
.then((arr)=>{
  return evenArr(arr);
})
.then((evenArr)=>{
  return multiplyByTwo(evenArr);
})
.then((data) =>{
  console.log(data);
})
.catch((err) =>{
  console.log(err);
})