const NumberOfAppartments = document.getElementById("numberofappartments")
NumberOfAppartments.style.display = 'none'
const MaxOccupationPerFloor = document.getElementById("maxOccupationPerFloor")
MaxOccupationPerFloor.style.display = 'none'
const NumberOfFloors = document.getElementById("numberOfFloors")
NumberOfFloors.style.display = 'none'
const NumberOfElevators = document.getElementById("numberOfElevators")
NumberOfElevators.style.display = 'none'
const sixthInput = document.getElementById("Dropdown2divbox")
sixthInput.style.display = 'none'
const seventhInput = document.getElementById("AmountofElevators")
seventhInput.style.display = 'none'
const amountoFelevators = document.getElementById("NUMELE")
const ninthInput = document.getElementById("AMTELE")
const tenthInput = document.getElementById("Elevatorcost")
tenthInput.style.display = 'block'
const eleventhInput = document.getElementById("Elevatorcost")
const installationFees = document.getElementById("installFee")
const pricePerUnit = document.getElementById("priceperunit")
const Elevatorcosts = document.getElementById('Elevatorcost')
Elevatorcosts.style.display = 'none'
const Installfeez = document.getElementById('Installationfees')
Installfeez.style.display = 'none'
let   percentage = 0
const maxOccupancy = document.getElementById("maximumOccupancy")
const NumberOfFloors2 = document.getElementById("NumberOfFloors")
NumberOfFloors2.style.display = 'none'
const FinalCost =  document.getElementById('Finalcost')
FinalCost.style.display = 'none'
const standardbutton = document.getElementById('standardbuttons')
const premiumbutton = document.getElementById('premiumbuttons')
const exceliumbutton = document.getElementById('exceliumbuttons')
const totalcosst = document.getElementById('Totalcost')
const numFloors = document.getElementById('FloorsInbuilding')
const totalFloors = document.getElementById('Floorsinbuilding')
const standardinupt = document.getElementById('standard')
const premiuminupt = document.getElementById('premium')
const exceliuminupt = document.getElementById('excelium')

function formatcurrency(number) {
    const formattedCurrency  = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: 'USD'
    }).format(number);
    return formattedCurrency
};


// const finalCost =  document.getElementById('Finalcost')
// Finalcost.style.display = 'none'
// const Installationfeez =  document.getElementById('Installationfees')
// Installationfeez.style.display = 'none'
// const PriceperElevator =  document.getElementById('Elevatorcost')
// PriceperElevator.style.display = 'none'



function clearInput() {
    document.getElementById("Residentialappartments").value='';
    document.getElementById("maximumOccupancy").value='';
    document.getElementById("Floorsinbuilding").value='';
    document.getElementById("FloorsInbuilding").value='';
    document.getElementById("NUMELE").value='';
    document.getElementById("AMTELE").value='';
    document.getElementById("priceperunit").value='';
    document.getElementById("installFee").value='';
    document.getElementById("Totalcost").value='';
    document.getElementById('standard');
    document.getElementById('premium');
    document.getElementById('excelium');
}
const button = document.getElementById("dropdown1")
button.addEventListener('change', () => {
    console.log(button.value)
    if (button.value === "Residential"){
        clearInput()
    NumberOfFloors.style.display = 'block'  
    NumberOfAppartments.style.display = 'block'
    MaxOccupationPerFloor.style.display = 'none'
    NumberOfElevators.style.display = 'none'
    sixthInput.style.display = 'block'
    seventhInput.style.display = 'block'
    NumberOfFloors2.style.display = 'none' 
    FinalCost.style.display = 'block'
    Installfeez.style.display = 'block'
     pricePerUnit.style.display = 'block'
     Elevatorcosts.style.display = 'block'
    } else if (button.value === "Commercial"){
        clearInput()
      NumberOfAppartments.style.display = 'none'
      MaxOccupationPerFloor.style.display = 'block'
      NumberOfElevators.style.display = 'none'  
      sixthInput.style.display = 'block'
      seventhInput.style.display = 'block'
      NumberOfFloors2.style.display = 'block' 
      NumberOfFloors.style.display = 'none'
      FinalCost.style.display = 'block'
      Installfeez.style.display = 'block'
      pricePerUnit.style.display = 'block'
      Elevatorcosts.style.display = 'block'
       } else if (button.value === "Industrial"){
        clearInput()
        NumberOfAppartments.style.display = 'none'
        NumberOfFloors.style.display = 'none'
        MaxOccupationPerFloor.style.display = 'none'  
        NumberOfElevators.style.display = 'block'  
        sixthInput.style.display = 'block'
        seventhInput.style.display = 'block' 
        FinalCost.style.display = 'block'
        Installfeez.style.display = 'block'
        pricePerUnit.style.display = 'block'
        Elevatorcosts.style.display = 'block'
        NumberOfFloors2.style.display = 'none'
    }       else if (button.value = '--- Select --- '){
            clearInput()
            NumberOfAppartments.style.display = 'none'
            NumberOfFloors.style.display = 'none'
            MaxOccupationPerFloor.style.display = 'none'  
            NumberOfElevators.style.display = 'none'
            NumberOfElevators.style.display = 'none'
            sixthInput.style.display = 'none'
            seventhInput.style.display = 'none'
            NumberOfFloors2.style.display = 'none'
            FinalCost.style.display = 'none'
            Installfeez.style.display = 'none'
            pricePerUnit.style.display = 'none'
            Elevatorcosts.style.display = 'none'
            
              
    }       
})

amountoFelevators.addEventListener('input', () => {
    console.log(amountoFelevators.value)
 ninthInput.value = amountoFelevators.value
})

ninthInput.addEventListener('change', () => {

        
        calculatefeescost()
        calculatetotalcost ()

   
 
})
// sixthInput.addEventListener('change', () => {
standardbutton.addEventListener('input', () => {
    if (standard.value === "standard1"){
        console.log("wassup")
       pricePerUnit.value = 8000
        percentage = .1
        
        calculatefeescost()
        calculatetotalcost ()
        pricePerUnit.value = formatcurrency(pricePerUnit.value)
        installationFees.value = formatcurrency(installationFees.value)
}})
   
premiumbutton.addEventListener('input', () => {
      if (premium.value === "premium1"){
        pricePerUnit.value = 12000
        percentage = .15
        calculatefeescost()
        calculatetotalcost ()
        pricePerUnit.value = formatcurrency(pricePerUnit.value)
        installationFees.value = formatcurrency(installationFees.value)
        
      }})
exceliumbutton.addEventListener('input', () => {
       if (excelium.value === "excelium1"){
        pricePerUnit.value = 15000
        percentage = .2
        calculatefeescost()
        calculatetotalcost ()
        pricePerUnit.value = formatcurrency(pricePerUnit.value)
        installationFees.value = formatcurrency(installationFees.value)
        
       }})

   
   
   
   
   
   
   

// })
//     console.log(stanard.value)
//    if (standardbutton === "standard1" ){
//    priceperunit.value = 8000
//    percentage = .1
//    calculatefeescost() 
//    } else if (premium.value === "premium1") {
//     priceperunit.value = 12000
//     percentage = .15
//     calculatefeescost() 
//    } else if (excelium.value === "excelium1") {
//     priceperunit.value = 15000
//     percentage = .2
//     calculatefeescost() 
//    }
// })




NumberOfAppartments.addEventListener('input', ()=> {
    calculateElevators()
})
NumberOfFloors.addEventListener('input', ()=> {
    calculateElevators()
})
function calculateElevators(){
   const totalApartments = parseFloat(document.getElementById('Residentialappartments').value);
   console.log(totalApartments)
   const totalFloors = parseFloat(document.getElementById('Floorsinbuilding').value);
   console.log(totalFloors)
   residentialApartments(totalApartments, totalFloors);
    
        //code for commercial math
    
        //elevator output = elevator input
    

}


function residentialApartments(totalNumberOfApartments, numberOfFloors ) {
    const avgApartmentsPerFloor = totalNumberOfApartments/numberOfFloors;
    console.log(avgApartmentsPerFloor)
    const elevatorsPerFloor = Math.ceil(avgApartmentsPerFloor/6);
    console.log(elevatorsPerFloor)
    let totalElevators = elevatorsPerFloor;
    if (numberOfFloors > 20) {
        totalElevators *= 2;
    }
    ninthInput.value = totalElevators;
}
 
// button2.addEventListener('change', ()=>{
//    calculatetotalcost() 
//   if (button2.value ==="standard1"){
//   }
// })      

maxOccupancy.addEventListener('input', () => {
    yert()
})
NumberOfFloors2.addEventListener('input', ()=> {
    yert()
})
function yert(){
    const totalfloors = parseFloat (document.getElementById('FloorsInbuilding').value);
    const totaloccupants = parseFloat (document.getElementById('maximumOccupancy').value);
    calculateElevatorsCommercial(totalfloors, totaloccupants );
}




function calculateElevatorsCommercial (Totalfloors, Totaloccupants){
const totalOccupants = Totalfloors*Totaloccupants;
console.log(totalOccupants)
const elevatorsPerBank = Math.ceil(totalOccupants/200)+1;
console.log(elevatorsPerBank)
console.log(numFloors)
const numBanks = Math.ceil(Totalfloors/10);
console.log(numBanks)
const totalElevators = numBanks*elevatorsPerBank;
ninthInput.value = totalElevators;
}








function calculatefeescost(){
    const amountOfElevators = Number(ninthInput.value);
    console.log(amountOfElevators)
    const pricePerElevator = Number(pricePerUnit.value);
    installationFeez (amountOfElevators, pricePerElevator);
}
function installationFeez(totalAmountOfElevators, beans){
   const avgamountofelevators = totalAmountOfElevators*beans;
   let installationFee = avgamountofelevators*percentage;
  installationFees.value = installationFee;
 };






 function calculatetotalcost(){
 const amountOfelevators = parseFloat(ninthInput.value);
 const PricePerUnit = parseFloat(pricePerUnit.value);
 const installationfees = parseFloat(installationFees.value);
 const finalCost = parseFloat(totalcosst.value);
 console.log(finalCost)
 Calculatefinalcost(amountOfelevators, PricePerUnit, installationfees, finalCost);
 }

 function Calculatefinalcost(amountofelevators, ppu, installfees, finalcost ){
    const endcost = amountofelevators*ppu+installfees;
    finalcost = endcost
    totalcosst.value = formatcurrency(finalcost)
    console.log(finalcost)
};



