async function fetchData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
   data = await data.json ()
    return data;
  }

const Data = async () =>{
    let products = await fetchData()
    console.log(products)
  


  return (
   <div>
    {products?.map((p)=>(

       <p key={p.id}>{p.title}</p>
  
    ))}
     
   </div>
  );
};

export default Data
