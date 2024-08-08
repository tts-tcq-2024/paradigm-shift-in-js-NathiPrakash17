export function isInRange(value, min, max) {
  return value >= min && value <= max;
}

export function checkBatteryTemperature(temperature) {
  return isInRange(temperature, 0, 45);
}

export function checkBatterySoc(soc) {
  return isInRange(soc, 20, 80);
}

export function checkBatteryChargeRate(chargeRate) {
  return isInRange(chargeRate, 0, 0.8);
}

export function batteryIsOk(temperature, soc, chargeRate) {
  return checkBatteryTemperature(temperature) &&
         checkBatterySoc(soc) &&
         checkBatteryChargeRate(chargeRate);
}
