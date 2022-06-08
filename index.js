// Add your code here
const body = document.querySelector('body')
let message = 'Unauthorized Access'

function submitData(name, email){
    
    const configurationObject = {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        'name': name,
        'email': email
    })
    }
    return fetch('http://localhost:3000/users', configurationObject)
    .then(res => res.json())
    .then(body => addNewUser(body.id))
    .catch(error => errorMessage(error.message))

    function addNewUser(newID){
        document.querySelector('body').innerHTML = newID
    }

    function errorMessage(message){
        document.body.innerHTML = message 
    }
}

submitData('name', 'email')