function check() {
  const numberInput = parseInt(document.getElementById("numberInput").value);
  let resultMessage = "";

  if (!isNaN(numberInput)) {
    if (numberInput % 2 === 0) {
      resultMessage = `${numberInput} is an even number.`;
    } else {
      resultMessage = `${numberInput} is an odd number.`;
    }
  } else {
    resultMessage = "Please enter a valid number.";
  }
  let result = document.getElementById("result");
  result.classList.add("display");
  result.innerText = resultMessage;
}
