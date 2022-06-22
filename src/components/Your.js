import { useState, useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom';
import { Card } from './Card';

export const Your = () => {
    // let [searchParams] = useSearchParams();
    // let getOwnerID = searchParams.get("owner_id")
    // console.log(getOwnerID)
    const [yourData,setYourData] = useState([])
    useEffect(() => {
      const getData = async () => {
        await fetch("http://localhost:3000/data?owner_id=31")
        .then(res => res.json())
        .then(data => console.log(data))
        // .catch(error => console.log(error))
      }
      getData()
    },[])
    console.log(yourData[0])
  return (
    <>
      <Card each={yourData[0]}  />
    </>
  )
}
