import getCookie from "../cookieHandle/getCookie";

export default async function getData(
  endPoint,
  configureObj,
  tokenNeeded = false
) {
  const baseURl = process.env.NEXT_PUBLIC_BASE_URL;
  const token = await getCookie("@token");

  if (tokenNeeded && !token) return;

  const res = await fetch(`${baseURl}${endPoint}`, {
    next: configureObj,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 204) return;

  const data = await res.json();

  return data;
}
