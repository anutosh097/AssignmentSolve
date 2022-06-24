import { Fragment } from 'react'
// import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query'
import { Card } from './Card';


const getYour = () => {
  const myId = 31
  return axios.get(`http://localhost:3000/data?owner_id=${myId}`)
    .then(res => {
      return {
        items: res.data,
      }
    })
}

export const Your = () => {

  const yourQuery = useQuery("your", getYour)
  console.log(yourQuery.data)
  return (
    <>
      {yourQuery.isLoading ? (<span>Loading...</span>) :
        (
          <>
            <h3>{yourQuery.isFetching ? <small>......</small> : null}</h3>
            {yourQuery.data.items.map((card, i) => {
                return <Card key={i} index={i} each={card} />
            })}
          </>
        )}
    </>
  )
}
