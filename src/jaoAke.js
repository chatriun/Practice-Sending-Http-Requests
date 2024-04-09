loadData().then((data) => {console.log(data)})


const loadData = async () => {
  const url= "https://jsonplaceholder.typicode.com/todos/1"
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

const loadData2 = () => {
  const url= "https://jsonplaceholder.typicode.com/todos/1"
  return fetch(url)
    .then((res) => res.json().then((data) => data))
    // .then((data) => data)
    
}



