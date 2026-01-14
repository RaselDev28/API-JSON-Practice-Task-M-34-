async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!response.ok){
            throw new Error("response do not work");
        }
        const data = await response.json();
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}
fetchData()