import "dotenv/config";

export async function getCurrentWeather() {
  const res = await fetch('http://api.weatherapi.com/v1/current.json?key=c9e6cb3718574d2293d42758230207&q=Jakarta')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
