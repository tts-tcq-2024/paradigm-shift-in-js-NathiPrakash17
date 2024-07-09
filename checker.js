function isTemperatureInRange(temperature) {
    const isInRange = temperature >= 0 && temperature <= 45;
    if (!isInRange) {
        console.log("Temperature is out of range!");
    }
    return isInRange;
}

function isSocInRange(soc) {
    const isInRange = soc >= 20 && soc <= 80;
    if (!isInRange) {
        console.log("State of Charge is out of range!");
    }
    return isInRange;
}

function isChargeRateInRange(chargeRate) {
    const isInRange = chargeRate <= 0.8;
    if (!isInRange) {
        console.log("Charge Rate is out of range!");
    }
    return isInRange;
}

function batteryIsOk(temperature, soc, chargeRate) {
    const temperatureIsOk = isTemperatureInRange(temperature);
    const socIsOk = isSocInRange(soc);
    const chargeRateIsOk = isChargeRateInRange(chargeRate);

    return temperatureIsOk && socIsOk && chargeRateIsOk;
}

function main() {
    let batteryOk = batteryIsOk(25, 70, 0.7);

    if (batteryOk) {
        console.log("All ok");
    } else {
        console.log("Battery is not ok");
    }
}

main();

