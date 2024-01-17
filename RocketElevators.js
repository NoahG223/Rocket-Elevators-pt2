const NumberOfAppartments = document.getElementById("numberofappartments")
NumberOfAppartments.style.display = 'none'
const MaxOccupationPerFloor = document.getElementById("maxOccupationPerFloor")
MaxOccupationPerFloor.style.display = 'none'
const NumberOfFloors = document.getElementById("numberOfFloors")
NumberOfFloors.style.display = 'none'
const NumberOfElevators = document.getElementById("numberOfElevators")
NumberOfElevators.style.display = 'none'
const sixthInput = document.getElementById("qual")
sixthInput.style.display = 'none'
const seventhInput = document.getElementById("AmountofElevators")
seventhInput.style.display = 'none'
const eigthInput = document.getElementById("NUMELE")
const ninthInput = document.getElementById("AMTELE")
const tenthInput = document.getElementById("Elevatorcost")
tenthInput.style.display = 'block'
const eleventhInput = document.getElementById("Elevatorcost")


function clearInput() {
    document.getElementById("numberofappartments").value=0;
}

const button = document.getElementById("dropdown1")
button.addEventListener('change', () => {
    console.log(button.value)
    if (button.value === "Residential"){
    NumberOfFloors.style.display = 'block'  
    NumberOfAppartments.style.display = 'block'
    MaxOccupationPerFloor.style.display = 'none'
    NumberOfElevators.style.display = 'none'
    sixthInput.style.display = 'block'
    seventhInput.style.display = 'block' 
     
    } else if (button.value === "Commercial"){
      NumberOfAppartments.style.display = 'none'
      NumberOfFloors.style.display = 'block'
      MaxOccupationPerFloor.style.display = 'block'
      NumberOfElevators.style.display = 'none'  
      sixthInput.style.display = 'block'
      seventhInput.style.display = 'block' 
       } else if (button.value === "Industrial"){
        NumberOfAppartments.style.display = 'none'
        NumberOfFloors.style.display = 'none'
        MaxOccupationPerFloor.style.display = 'none'  
        NumberOfElevators.style.display = 'block'  
        sixthInput.style.display = 'block'
        seventhInput.style.display = 'block' 
    }       else if (button.value = '--- Select --- '){
            clearInput
            NumberOfAppartments.style.display = 'none'
            NumberOfFloors.style.display = 'none'
            MaxOccupationPerFloor.style.display = 'none'  
            NumberOfElevators.style.display = 'none'
            NumberOfElevators.style.display = 'none'
            sixthInput.style.display = 'none'
            seventhInput.style.display = 'none'
              
    }       
})

eigthInput.addEventListener('input', () => {
    console.log(eigthInput.value)
 ninthInput.value = eigthInput.value
})

const button2 = document.getElementById("dropdown2")
button2.addEventListener('change', () => {
   console.log(button2.value)
   if (button2.value === "stanard1" ){
   priceperunit.value = 8000
   } else if (button2.value === "premium1") {
    priceperunit.value = 12000
   } else if (button2.value === "excelium1") {
    priceperunit.value = 15000
   }
})




NumberOfAppartments.addEventListener('input', ()=> {
    calculateElevators()
})
NumberOfFloors.addEventListener('input', ()=> {
    calculateElevators()
})
function calculateElevators(){
   const totalApartments = parseFloat (document.getElementById('Residentialappartments').value);
   console.log(totalApartments)
   const totalFloors = parseFloat (document.getElementById('Floorsinbuilding').value);
   console.log(totalFloors)
   residentialApartments(totalApartments, totalFloors);

}



function residentialApartments(totalNumberOfApartments, numberOfFloors ) {
    const avgApartmentsPerFloor = totalNumberOfApartments/numberOfFloors;
    const elevatorsPerFloor = Math.ceil(avgApartmentsPerFloor/6);
    let totalElevators = elevatorsPerFloor * numberOfFloors;
    if (numberOfFloors > 20) {
        totalElevators *= 2;
    }
    ninthInput.value = totalElevators;
}
 
