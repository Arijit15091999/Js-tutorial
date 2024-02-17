async function getAllDataInJson(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

getAllDataInJson("https://jsonplaceholder.typicode.com/users");