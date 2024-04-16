function calculateOpAmpGain() {
  var volts = parseFloat(document.getElementById('volts').value);
  var watts = parseFloat(document.getElementById('Watts').value);

  // if (isNaN(volts) || isNaN(watts)) {
  //     document.getElementById('Ampere').value = "Invalid input";
  //     errorMessage.style.color = "red";
  //     return;
  // } 
 
  if (isNaN(volts) || isNaN(watts)) {
    var errorMessage = document.getElementById('Ampere');
    errorMessage.value = "Please provide input first.";
    errorMessage.style.color = "red"; // Change text color to red
    return;
  }



  var Ampere = watts / volts;
  document.getElementById('Ampere').value = Ampere.toFixed(2);
}

function resetCalculator() {
  document.getElementById('volts').value = '';
  document.getElementById('Watts').value = '';
  document.getElementById('Ampere').value = '';
}


