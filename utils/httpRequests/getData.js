export default async function getData(endPoint, configureObj) {
  const baseURl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseURl}${endPoint}`, {
    method: "GET",
  });

  const data = await res.json();

  return data;
}
