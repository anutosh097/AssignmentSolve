import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';


export const Your = () => {
    let [searchParams] = useSearchParams();
    let getOwnerID = searchParams.get("owner_id")
    console.log(getOwnerID)
    const [yourData,setYourData] = useState([])
    useEffect(()=>{
        // setOwnerID(getOwnerID)
        // console.log(ownerID)
        fetch(`http://localhost:3000/data?owner_id=${getOwnerID}`)
        .then(res => res.json())
        .then(data => setYourData(data))
    },[])
    // console.log(yourData[0].name)

  return (
    <>
    <div>{getOwnerID}</div>
    {/* <div>{yourData[0].name}</div> */}
    </>
  )
}
