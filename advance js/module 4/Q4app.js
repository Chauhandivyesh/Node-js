fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((result)=>{
    console.log(result.data);
    // Object.entries(result.data.Data).forEach(element => {
    result.dataforEach(element => {
        console.log(element.username);
    });
}).catch(err => {
    console.log(err);
})
