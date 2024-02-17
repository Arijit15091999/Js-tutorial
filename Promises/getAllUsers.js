async function getAllUsers(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getAllUsers("https://jsonplaceholder.typicode.com/users");