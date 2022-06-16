import React from 'react'
import { useEffect, useState } from "react";
import { Card } from "./Card";
import styled from 'styled-components';


export const All = () => {
    const [data, setData] = useState([])
    console.log(data)

    useEffect(() => {
        const getData = async () => {
            await fetch("http://localhost:3000/data")
                .then(res => res.json())
                // .then(getdata => console.log(getdata))
                .then(data => setData(data))
            // .catch(error => console.log(error))
        }
        getData()
    }, [])


    const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  `

    return (
        <>
            <Wrapper>
                {data.map((each, i) =>
                    <Card key={i} index={i} each={each} />
                )}
            </Wrapper>
        </>
    )
}
