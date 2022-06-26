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

    const FilterButton = styled.button`
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
    height: 400px;
    width: 500px; 
    border-radius: 5px;
    border: 1px solid #989898;
    background-color: #FFF;
    position: absolute;
  `

  const Button = styled.button`
    width: 150px;
    height: 38px;
    border-radius: 5px;
    border: none;
  `

  const ApplyButton = styled(Button)`
    background-color: #ff5349;
    color: #FFF;
  `

  const ClearButton = styled(Button)`
    background-color: #FFF;
    color: #000;
    box-shadow: 0px 0px 20px 3px #D8D8D8;
  `


    return (
        <>
            {dataQuery.isLoading ? (<span>Loading...</span>) :
                (
                    <>
                        <ButtonWrapper>
                            <FilterButton onClick={() => setIsShowFilter(!isShowFilter)}> <span><IoFilterSharp /></span> Filter</FilterButton>
                        </ButtonWrapper>
                        {isShowFilter ? (
                            <FilterBoxWrapper>
                                <FilterBox>
                                    <div style={{ margin: "10px" }}>Filters</div>
                                    <hr />
                                    <form action="">
                                        <div style={{ marginLeft: "80px", marginBottom: "20px", color: "#989898" }}>Type</div>
                                        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
                                            <div>
                                                <input type="checkbox" id="subscription" name="subscription" value="subscription" />
                                                <label style={{ fontWeight: "bold" }} for="subscription">Subscription</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="burner" name="burner" value="burner" />
                                                <label style={{ fontWeight: "bold" }} for="burner">Burner</label>
                                            </div>
                                        </div>
                                        <div style={{ marginLeft: "80px", marginBottom: "20px", color: "#989898" }}>Cardholder</div>
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <div>
                                                <select name="cardholder" id="cardholder" style={{width: "300px",height: "50px",backgroundColor:"#F8F8F8",color: "#989898"}}>
                                                    {

                                                    }
                                                    <option value="select cardholder">Select Cardholder</option>
                                                    <option value="Neha">Neha</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
                                           <ApplyButton>Apply</ApplyButton>
                                           <ClearButton>Clear</ClearButton>

                                        </div>
                                    </form>
                                </FilterBox>
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