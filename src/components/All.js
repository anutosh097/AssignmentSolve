import React, { Fragment } from 'react'
import { useState } from "react";
import { Card } from "./Card";
import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query'
import axios from 'axios';


const getData = ({pageParam =0}) => {
   return axios.get("http://localhost:3000/data", {
        params: {
            _page: pageParam,
        }
    })
        .then(res => {
            return {
                items: res.data,
                pageNumber: pageParam,
                hasMore: pageParam < 4
            }
        })


}

export const All = () => {
    const [percentage, setPercentage] = useState(0)
    const CardProgress = styled.div`
background-color: #ff5349;
width: ${percentage}%;
height: 20px;
border-radius: 13px;
`

    const dataQuery = useInfiniteQuery("data", getData, {
        getNextPageParam: (lastPage) => lastPage.hasMore ? lastPage.pageNumber +1 : undefined,
    })




    const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  `



    return (
        <>
            {dataQuery.isLoading ? (<span>Loading...</span>) :
                (
                    <>
                        <h3>{dataQuery.isFetching ? <small>......</small> : null}</h3>
                        <Wrapper>
                            {dataQuery.data.pages.map((page, index) => {
                                return <Fragment key={index}>
                                    {page.items.map((card, i) => {
                                       return  <Card key={i} index={i} each={card} />
                            })}
                                </Fragment>
                            })}
                        </Wrapper>
                    </>
                )}
            <button onClick={() => dataQuery.fetchNextPage()} disabled={dataQuery.isFetchingNextPage}>Fetch Next Page</button>
        </>
    )
}