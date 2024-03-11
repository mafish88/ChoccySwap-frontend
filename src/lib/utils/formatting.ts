//import type { Amount } from "@chromia/ft4";

function getWithSuffix(integerPart: string, maxLength: number): string {
    const exp = Math.min(
        Math.floor(
            (integerPart.length - 1) / 3
        ), 
        5
    ) 
    let suffix = "";
    switch (exp) {
        case 0: suffix = ""; break;
        case 1: suffix = "k"; break;
        case 2: suffix = "M"; break;
        case 3: suffix = "B"; break;
        case 4: suffix = "T"; break;
        default: suffix = "Q"; break;
    }
    const pointIdx = integerPart.length - (exp*3);
    const integer = integerPart.substring(0, pointIdx);
    const decimal = integerPart.substring(pointIdx);

    if (integer.length > maxLength) {
        return Number(integerPart).toExponential(maxLength - 2)
    } else if (integer.length >= maxLength - 1) {
        return integer + suffix;
    } else {
        return (integer + "." + decimal).substring(0, maxLength - 1) + suffix;
    }
}

export function sanitizeNumber(txt: string, maxLength = 7): string {
    if (txt.length < maxLength) return txt;
    const dotIndex = txt.indexOf(".");
    if (dotIndex === -1 || dotIndex > maxLength) {
        // dot not found or integer part too long
        const integerPart = txt.match(/^[0-9]*/)![0];
        return getWithSuffix(integerPart, maxLength)
    } else {
        // dot is found before the max string length
        return txt.substring(0, maxLength).replace(/\.?0*$/, "") ?? "0";
    }
}