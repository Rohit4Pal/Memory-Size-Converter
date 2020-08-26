const convertToGB = () => {
  let val = document.getElementById("text-input").value;
  //console.log(val.value);

  let output=document.querySelector("#result");
  let result=`The converted value to GB = ${val/1024}`;
  output.innerHTML=result;
};
