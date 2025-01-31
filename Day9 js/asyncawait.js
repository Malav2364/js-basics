//async and await simplify working with promises
async function fetchdata() {
    try {
        let response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let response2 = await fetch('https://jsonplaceholder.typicode.com/todos/2')
        let response3 = await fetch('https://jsonplaceholder.typicode.com/todos/3')
        let data1 = await response1.json()
        let data2 = await response2.json()
        let data3 = await response3.json()
        console.log(data1)
        console.log(data2)
        console.log(data3)
    } catch (error) {
        console.log('Error :', error)
    }
}
fetchdata();