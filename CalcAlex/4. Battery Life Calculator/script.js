
// function calculateBatteryLife() {
//   var batteryCapacity = parseFloat(document.getElementById('batteryCapacity').value);
//   var powerConsumption = parseFloat(document.getElementById('powerConsumption').value);
  
//   // if(isNaN(batteryCapacity) || isNaN(powerConsumption) || batteryCapacity <= 0 || powerConsumption <= 0) {
//   //   document.getElementById('errorMessage').innerText = 'Please enter valid positive numbers for all fields.';
//   //   return;
//   // }
  

//   if (isNaN(batteryCapacity) || isNaN(powerConsumption)) {
//     document.getElementById('Ampere').value = "please enter valid values for both";
//     return;
// }



//   var batteryLife = batteryCapacity / powerConsumption;
  
//   document.getElementById('batteryLife').value = batteryLife.toFixed(2) + ' hours';
// }


// function calculateBatteryLife() {
//   var batteryCapacity = parseFloat(document.getElementById('batteryCapacity').value);
//   var powerConsumption = parseFloat(document.getElementById('powerConsumption').value);
  
//   // Check if input values are valid numbers
//   if (isNaN(batteryCapacity) || isNaN(powerConsumption)) {
//     document.getElementById('batteryLife').value = "Please enter valid numbers for both fields.";
//     return;
//   }
  
//   // Check if input values are positive
//   if (batteryCapacity <= 0 || powerConsumption <= 0) {
//     document.getElementById('batteryLife').value = "Please enter positive values for both fields.";
//     return;
//   }

//   var batteryLife = batteryCapacity / powerConsumption;
  
//   document.getElementById('batteryLife').value = batteryLife.toFixed(2) + ' hours';
// }


function calculateBatteryLife() {
  var batteryCapacity = parseFloat(document.getElementById('batteryCapacity').value);
  var powerConsumption = parseFloat(document.getElementById('powerConsumption').value);
  
  // Check if input values are valid numbers
  if (isNaN(batteryCapacity) || isNaN(powerConsumption)) {
    var errorMessage = document.getElementById('batteryLife');
    errorMessage.value = "Please enter valid numbers for both fields.";
    errorMessage.style.color = "red"; // Change text color to red
    return;
  }
  
  // Check if input values are positive
  if (batteryCapacity <= 0 || powerConsumption <= 0) {
    var errorMessage = document.getElementById('batteryLife');
    errorMessage.value = "Please enter positive values for both fields.";
    errorMessage.style.color = "red"; // Change text color to red
    return;
  }

  var batteryLife = batteryCapacity / powerConsumption;
  var resultField = document.getElementById('batteryLife');
  resultField.value = batteryLife.toFixed(2) + ' hours';
  resultField.style.color = "black"; // Reset text color to black
}

