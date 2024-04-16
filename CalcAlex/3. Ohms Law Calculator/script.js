function calculateOhmsLaw() {
    // Clear previous error messages
    document.getElementById('voltageError').textContent = '';
    document.getElementById('currentError').textContent = '';
    document.getElementById('resistanceError').textContent = '';

    let voltage = parseFloat(document.getElementById('voltage').value) || 0;
    const voltageUnit = document.getElementById('voltageUnit').value;
    let current = parseFloat(document.getElementById('current').value) || 0;
    const currentUnit = document.getElementById('currentUnit').value;
    let resistance = parseFloat(document.getElementById('resistance').value) || 0;
    const resistanceUnit = document.getElementById('resistanceUnit').value;

    // Convert all inputs to base units (Volts, Amperes, Ohms)
    if (voltageUnit === 'mV') {
        voltage /= 1000; // Convert mV to V
    }
    if (currentUnit === 'mA') {
        current /= 1000; // Convert mA to A
    }
    if (resistanceUnit === 'kΩ') {
        resistance *= 1000; // Convert kΩ to Ω
    } else if (resistanceUnit === 'MΩ') {
        resistance *= 1000000; // Convert MΩ to Ω
    }

    // Check if all fields are filled
    if (document.getElementById('voltage').value && document.getElementById('current').value && document.getElementById('resistance').value) {
        document.getElementById('voltageError').textContent = 'Please fill only two values.';
        document.getElementById('currentError').textContent = 'Please fill only two values.';
        document.getElementById('resistanceError').textContent = 'Please fill only two values.';
    } else if (!document.getElementById('voltage').value && current && resistance) {
        voltage = current * resistance; // Ohm's Law: V = IR
        document.getElementById('voltage').value = voltage.toFixed(2);
    } else if (!document.getElementById('current').value && voltage && resistance) {
        current = voltage / resistance; // Ohm's Law: I = V/R
        document.getElementById('current').value = current.toFixed(2);
    } else if (!document.getElementById('resistance').value && voltage && current) {
        resistance = voltage / current; // Ohm's Law: R = V/I
        document.getElementById('resistance').value = resistance.toFixed(2);
    } else {
        // General error message if not enough values are provided for calculation
        document.getElementById('voltageError').textContent = 'Please enter any two values to calculate the third.';
    }
}
