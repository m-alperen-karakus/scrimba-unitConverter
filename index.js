let input = document.getElementById('input')
let length = document.getElementById('length')
let volume = document.getElementById('volume')
let mass = document.getElementById('mass')
let convert = document.getElementById('convert')


convert.addEventListener('click', converter)


function converter(){
    const inputValue = input.value
    let feet = (inputValue * 3.281).toFixed(3)
    let gallon = (inputValue * 0.264).toFixed(3)
    let pound = (inputValue * 2.204).toFixed(3)
    let meter = (inputValue * 0.3048).toFixed(3)
    let liter = (inputValue * 3.78541178).toFixed(3)
    let kilogram = (inputValue * 0.48).toFixed(3)

    length.textContent = inputValue + " meters = " +feet +" feet" + " | " + inputValue +" feet = "+ meter +" meters"
    volume.textContent = inputValue + " liters = " +gallon +" gallons" + " | " + inputValue +" gallons = "+ liter +" liters"
    mass.textContent = inputValue + " kilos = " +pound +" pounds" + " | " + inputValue +" pound = "+ kilogram +" kilos"

}
converter()
