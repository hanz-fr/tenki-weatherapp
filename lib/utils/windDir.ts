export function windDir (deg: number) {
    let direction;
    if (deg >= 350 || deg <= 19) {
        direction = 'N';
    } else if (deg >= 20 && deg <= 39) {
        direction = 'N/NE';
    } else if (deg >= 40 && deg <= 59) {
        direction = 'NE';
    } else if (deg >= 60 && deg <= 79) {
        direction = 'E/NE';
    } else if (deg >= 80 && deg <= 109) {
        direction = 'E';
    } else if (deg >= 110 && deg <= 129) {
        direction = 'E/SE';
    } else if (deg >= 130 && deg <= 149) {
        direction = 'SE';
    } else if (deg >= 150 && deg <= 169) {
        direction = 'S/SE';
    } else if (deg >= 170 && deg <= 199) {
        direction = 'S';
    } else if (deg >= 200 && deg <= 219) {
        direction = 'S/SW';
    } else if (deg >= 220 && deg <= 239) {
        direction = 'SW';
    } else if (deg >= 240 && deg <= 259) {
        direction = 'W/SW';
    } else if (deg >= 260 && deg <= 289) {
        direction = 'W';
    } else if (deg >= 290 && deg <= 309) {
        direction = 'W/NW';
    } else if (deg >= 310 && deg <= 329) {
        direction = 'NW';
    } else if (deg >= 330 && deg <= 349) {
        direction = 'N/NW';
    }

    return direction;
}