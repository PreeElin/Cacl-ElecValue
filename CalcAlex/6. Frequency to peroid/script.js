function calculate() {
    var frequency = parseFloat(document.getElementById('frequency').value);
    var frequencyUnit = document.getElementById('frequencyUnit').value;
    var period = parseFloat(document.getElementById('period').value);
    var periodUnit = document.getElementById('periodUnit').value;

    if (!isNaN(frequency) && isNaN(period)) {
        // Convert Frequency to Base Unit (Hz) if necessary
        frequency = convertFrequencyToHz(frequency, frequencyUnit);
        // Calculate Period in seconds
        var basePeriod = 1 / frequency;
        // Convert Period to selected unit
        var formattedPeriod = convertPeriodFromSecondsToNumber(basePeriod, periodUnit);
        document.getElementById('period').value = formattedPeriod;
    } else if (isNaN(frequency) && !isNaN(period)) {
        // Convert Period to Base Unit (Seconds) if necessary
        period = convertPeriodToSeconds(period, periodUnit);
        // Calculate Frequency in Hz
        var baseFrequency = 1 / period;
        // Convert Frequency to selected unit
        var formattedFrequency = convertFrequencyFromHzToNumber(baseFrequency, frequencyUnit);
        document.getElementById('frequency').value = formattedFrequency;
    } else {
        // Display error message in red
        document.getElementById('error').innerHTML = '<span style="color: red;">Please fill in either frequency or period, not both.</span>';
    }
}

function formatNumber(number) {
    // Convert to string using toFixed, then parse to float to trim unnecessary zeros, finally format to string again if needed
    return parseFloat(number.toFixed(8)).toString();
}

function convertFrequencyToHz(frequency, unit) {
    switch (unit) {
        case 'kHz':
            return frequency * 1e3; // Convert kHz to Hz
        case 'MHz':
            return frequency * 1e6; // Convert MHz to Hz
        case 'GHz':
            return frequency * 1e9; // Convert GHz to Hz
        default:
            return frequency; // Already in Hz
    }
}

function convertFrequencyFromHzToNumber(frequency, unit) {
    switch (unit) {
        case 'kHz':
            return formatNumber(frequency / 1e3);
        case 'MHz':
            return formatNumber(frequency / 1e6);
        case 'GHz':
            return formatNumber(frequency / 1e9);
        default:
            return formatNumber(frequency);
    }
}

function convertPeriodToSeconds(period, unit) {
    switch (unit) {
        case 'ms':
            return period / 1000; // Convert ms to s
        case 'us':
            return period / 1000000; // Convert µs to s
        case 'ns':
            return period / 1000000000; // Convert ns to s
        default:
            return period; // Already in s
    }
}

function convertPeriodFromSecondsToNumber(period, unit) {
    switch (unit) {
        case 'ms':
            return formatNumber(period * 1000);
        case 'us':
            return formatNumber(period * 1000000);
        case 'ns':
            return formatNumber(period * 1000000000);
        default:
            return formatNumber(period);
    }
}




