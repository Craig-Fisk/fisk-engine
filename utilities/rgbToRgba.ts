export default function rgbToRgba(rgb: string, alpha: string) {
    const index = rgb.indexOf("rgba") >= 0 ? 5 : 4;
    const split = rgb.split(",");
    if (index === 4) {
        return `rgba(${split[0].substring(
            index
        )}, ${split[1].trim()}, ${split[2]
            .trim()
            .substring(0, split[2].trim().indexOf(")"))}, ${alpha})`;
    } else {
        return `rgba(${split[0].substring(
            index
        )}, ${split[1].trim()}, ${split[2].trim()}, ${alpha})`;
    }
}