import React,{useState,useEffect} from 'react'


const Home = () => {
    const [data,setData]=useState([])


    const getData= async()=>{
    const res=  await fetch("https://jsonplaceholder.typicode.com/posts")
    const data =await res.json()
    setData(data)

    }
 
    useEffect(() => {
      getData()
    }, [])



  return (
   <div>
         <div data-testid="test">
         {data.map((d)=>(
       <li>{d.title}</li>
   ))}
      
         
         </div>
   </div>
  )
}

export default Home