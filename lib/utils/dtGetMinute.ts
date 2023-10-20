export function dtGetMinute(dt: string) {
    const date = new Date(dt);
    const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    return minute;
}