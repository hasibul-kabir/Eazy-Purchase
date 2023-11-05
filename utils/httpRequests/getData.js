export default async function getData(endPoint, token, configureObj) {
  const baseURl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseURl}${endPoint}`, {
    next: configureObj,
    headers: {
      authorization: token,
    },
  });

  const data = await res.json();

  return data;
}
