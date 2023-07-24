/* fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( response => response.json())
    .then( json =>  console.log(json.userId))
    .catch(e => console.log(e)) */

// execute without stop the main threat
const getUser = async() =>{
    try{
        const my_response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const my_data = await my_response.json()
        console.log(my_data)
    }catch(e){
        console.log(e)
    }

    getUser()

}