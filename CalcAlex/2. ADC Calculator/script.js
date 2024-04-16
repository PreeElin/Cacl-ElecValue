function calculateADC() {
  var bits = parseInt(document.getElementById('bits').value);
  var refVoltage = parseFloat(document.getElementById('refVoltage').value);
  var analogInput = parseFloat(document.getElementById('analogInput').value);
  
  // Reset error messages
  document.getElementById('bitsError').textContent = '';
  document.getElementById('refVoltageError').textContent = '';
  document.getElementById('analogInputError').textContent = '';
  
  // Validation
  if(isNaN(bits) || bits <= 0) {
    document.getElementById('bitsError').textContent = 'Please enter a valid positive number of bits.';
    return;
  }
  if(isNaN(refVoltage) || refVoltage <= 0) {
    document.getElementById('refVoltageError').textContent = 'Please enter a valid positive reference voltage.';
    return;
  }
  if(isNaN(analogInput) || analogInput < 0) {
    document.getElementById('analogInputError').textContent = 'Please enter a valid analog voltage.';
    return;
  }
  
  var maxValue = Math.pow(2, bits) - 1;
  var digitalOutput = Math.round((analogInput / refVoltage) * maxValue);
  var binaryOutput = digitalOutput.toString(2).padStart(bits, '0');
  
  document.getElementById('numericOutput').value = digitalOutput;
  document.getElementById('binaryOutput').value = binaryOutput;
}
