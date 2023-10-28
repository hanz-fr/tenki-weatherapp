export function dtGetHour2Digit(dt: string) {
    const date = new Date(dt);
    const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();

    return hour;
}
