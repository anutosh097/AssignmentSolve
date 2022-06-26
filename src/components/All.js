import React, { Fragment } from 'react'
import { useState } from "react";
import { Card } from "./Card";
import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query'
import { IoFilterSharp } from "react-icons/io5"
import axios from 'axios';


const getData = ({ pageParam = 1 }) => {
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
    const [isShowFilter, setIsShowFilter] = useState(false)
    const [percentage, setPercentage] = useState(0)
    const CardProgress = styled.div`
background-color: #ff5349;
width: ${percentage}%;
height: 20px;
border-radius: 13px;
`

    const dataQuery = useInfiniteQuery("data", getData, {
        getNextPageParam: (lastPage) => lastPage.hasMore ? lastPage.pageNumber + 1 : undefined,
    })




    const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `

    const ButtonWrapper = styled.div`
     display: flex;
     justify-content: flex-end;
  `

    const Button = styled.button`
    width: 150px;
    height: 50px;
    background-color: #F8F8F8;
    color: #989898;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    font-weight: bold;
    font-size: 18px;
  `

  const FilterBoxWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-right:80px;
    margin-top:10px;
  `

  const FilterBox = styled.div`
    height: 500px;
    width: 500px; 
    border-radius: 5px;
    border: 1px solid #989898;
    background-color: #FFF;
    position: absolute;
  `


    return (
        <>
            {dataQuery.isLoading ? (<span>Loading...</span>) :
                (
                    <>
                        <ButtonWrapper>
                            <Button onClick={() => setIsShowFilter(!isShowFilter)}> <span><IoFilterSharp /></span> Filter</Button>
                        </ButtonWrapper>
                        {isShowFilter ? (
                            <FilterBoxWrapper>
                                <FilterBox></FilterBox>
                            </FilterBoxWrapper>
                        ) : null}
                        <h3>{dataQuery.isFetching ? <small>......</small> : null}</h3>
                        <Wrapper>
                            {dataQuery.data.pages.map((page, index) => {
                                return <Fragment key={index}>
                                    {page.items.map((card, i) => {
                                        return <Card key={i} index={i} each={card} />
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