function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    let result;

    // Conversión de metros
    if (unitFrom === 'metros') {
        if (unitTo === 'kilometros') {
            result = value / 1000;
        } else if (unitTo === 'millas') {
            result = value / 1609.34;
        } else if (unitTo === 'pies') {
            result = value * 3.28084;
        } else if (unitTo === 'pulgadas') {
            result = value * 39.3701;
        } else {
            result = value;   
        }
    }
    // Conversión de kilómetros
    else if (unitFrom === 'kilometros') {
        if (unitTo === 'metros') {
            result = value * 1000;
        } else if (unitTo === 'millas') {
            result = value / 1.60934;
        } else if (unitTo === 'pies') {
            result = value * 3280.84;
        } else if (unitTo === 'pulgadas') {
            result = value * 39370.1;
        } else {
            result = value; //
        }
    }
    // Conversión de millas
    else if (unitFrom === 'millas') {
        if (unitTo === 'metros') {
            result = value * 1609.34;
        } else if (unitTo === 'kilometros') {
            result = value * 1.60934;
        } else if (unitTo === 'pies') {
            result = value * 5280;
        } else if (unitTo === 'pulgadas') {
            result = value * 63360;
        } else {
            result = value; 
        }
    }
    // Conversión de pies
    else if (unitFrom === 'pies') {
        if (unitTo === 'metros') {
            result = value / 3.28084;
        } else if (unitTo === 'kilometros') {
            result = value / 3280.84;
        } else if (unitTo === 'millas') {
            result = value / 5280;
        } else if (unitTo === 'pulgadas') {
            result = value * 12;
        } else {
            result = value; 
        }
    }
    // Conversión de pulgadas
    else if (unitFrom === 'pulgadas') {
        if (unitTo === 'metros') {
            result = value / 39.3701;
        } else if (unitTo === 'kilometros') {
            result = value / 39370.1;
        } else if (unitTo === 'millas') {
            result = value / 63360;
        } else if (unitTo === 'pies') {
            result = value / 12;
        } else {
            result = value; 
        }
    } else {
        result = value; 
    }

    document.getElementById('result').innerText = `Resultado: ${result} ${unitTo}`;
}
