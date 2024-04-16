function calculateOpAmpGain() {
  // Clear previous error messages
  document.getElementById('feedbackResistorError').textContent = '';
  document.getElementById('inputResistorError').textContent = '';

  var feedbackResistor = parseFloat(document.getElementById('feedbackResistor').value);
  var feedbackResistorUnit = document.getElementById('feedbackResistorUnit').value;
  var inputResistor = parseFloat(document.getElementById('inputResistor').value);
  var inputResistorUnit = document.getElementById('inputResistorUnit').value;
  var configuration = document.getElementById('config').value;

  // Convert resistor values to Ohms
  feedbackResistor = convertToOhm(feedbackResistor, feedbackResistorUnit);
  inputResistor = convertToOhm(inputResistor, inputResistorUnit);
  
  if (isNaN(feedbackResistor) || feedbackResistor <= 0) {
    document.getElementById('feedbackResistorError').textContent = 'Enter a valid positive number';
    return;
  }
  
  if (isNaN(inputResistor) || inputResistor <= 0) {
    document.getElementById('inputResistorError').textContent = 'Enter a valid positive number';
    return;
  }
  
  var gain;
  if (configuration === 'non-inverting') {
    gain = 1 + (feedbackResistor / inputResistor);
  } else if (configuration === 'inverting') {
    gain = -(feedbackResistor / inputResistor);
  }
  
  // Check if gain is a whole number and display accordingly
  gain = (gain % 1 === 0) ? gain : gain.toFixed(2);

  document.getElementById('opAmpGain').value = gain;
}

function convertToOhm(value, unit) {
  switch (unit) {
    case 'kiloohm':
      return value * 1000; // Convert kiloohms to ohms
    case 'megaohm':
      return value * 1000000; // Convert megaohms to ohms
    default:
      return value; // Assume the value is already in ohms
  }
}
