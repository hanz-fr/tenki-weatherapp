export function countryCodeToName(cc: string) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  
  return regionNames.of(cc);
}
