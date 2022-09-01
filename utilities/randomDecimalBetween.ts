function countDecimals(value: number) {
    let text = value.toString();
    // verify if number 0.000005 is represented as "5e-6"
    if (text.indexOf("e-") > -1) {
        let [base, trail] = text.split("e-");
        let deg = parseInt(trail, 10);
        return deg;
    }
    // count decimals for number in representation like "0.123456"
    if (Math.floor(value) !== value) {
        return value.toString().split(".")[1].length || 0;
    }
    return 0;
}

export default function randomDecimalBetween(min: number, max: number) {
    const minDec = countDecimals(min);
    const maxDec = countDecimals(max);
    const decimalPlaces = Math.max(minDec, maxDec);
    const rand = Math.random() * (max - min) + min;
    const power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
}