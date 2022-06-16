const $inputEl = document.getElementById("input-el")
const $originalValueEls = document.querySelectorAll(".original-value")
const $convertedValueEls = document.querySelectorAll(".converted-value")


$inputEl.addEventListener("keyup", () => {
    const inputValue = $inputEl.value

    for (let el in $originalValueEls) {
      $originalValueEls[el].textContent = inputValue
    }
  
    const footDec = (inputValue * 3.28084).toFixed(3)
    const meterDec = (inputValue * 0.3048).toFixed(3)
    const gallonDec = (inputValue * 0.2641722).toFixed(3)
    const literDec = (inputValue * 3.785).toFixed(3)
    const poundDec = (inputValue * 0.45359237).toFixed(3)
    const kiloDec = (inputValue * 2.20462).toFixed(3)
    const allConverters = [footDec, meterDec, gallonDec, literDec, poundDec, kiloDec]
    
    
    for (let i = 0; i < $convertedValueEls.length; i++) {
      $convertedValueEls[i].innerHTML = allConverters[i]
    }

})