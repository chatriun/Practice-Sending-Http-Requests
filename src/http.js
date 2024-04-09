export async function fetchAvailablePlace() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(`error to fetch data`);
  }

  return resData.places
}

export async function updateUserPlaces(places){
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({places}),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const resData = await response.json()

  if (!response.ok){
    throw new Error(`fail to update user data`)
  }

  return resData.message
}