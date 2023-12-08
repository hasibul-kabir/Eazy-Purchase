export default async function deleteData(endpoint, configureObj) {
  const baseURl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseURl}${endpoint}`, {
    method: "DELETE",
    next: configureObj,
  });

  const data = await res.json();

  return Response.json(data);
}
