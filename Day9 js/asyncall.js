async function fetchdata() {
    let urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://jsonplaceholder.typicode.com/todos/3"
    ]
    try {
        let promises = urls.map(url=>fetch(url).then(res => res.json()))
        let res = await Promise.all(promises)
        console.log(res)
    } catch (error) {
        console.log('Error :', error)
    }
}

fetchdata();