export function dtGetYear(dt: number) {
    const date = new Date(dt);
    return date.getUTCFullYear();
}