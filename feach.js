const load =() =>{
    fetch('https://jsonplaceholder.com/users/1')
    .then(response =>response.json())

    .then(data =>console.log(data))
    .catch(error => console.log('error:${error}'))
    .finally(()=> console.log('fetch operation completed') )// asyncronus tradeshinal wrighting
}
load();

const enhance = async () => {

    try{
        const response =await fetch ('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log(data)
    }
    catch (error){
        console.log('error:${error}');

    }
    finally{
        console.log ('fetch opppppp');
    }
}
enhance();