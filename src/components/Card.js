import React from 'react'
import styled from 'styled-components';
import { ImFire } from "react-icons/im"
import { TiArrowSync } from "react-icons/ti"

export const Card = ({ each, index }) => {
    const isBurner = each.card_type === "burner" ? true : false
    const percentageProgress = (each.spent.value/each.available_to_spend.value)*100
    console.log(percentageProgress)

    const Card = styled.div`
      width:600px;
      height: 300px;
      box-shadow: 0px 0px 20px 3px #D8D8D8;
      margin: 20px;
    `
    const CardHeading = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 6px;
    padding: 6px;
    font-style: norm
    font-family: Helvetics, Helvetica, sans-serif;;
    `

    const Dot = styled.span`
    display: inline-block;
    margin: 0px 5px 3px 5px;
    `

    const GreyDot = styled(Dot)`
    height: 4px;
    width: 4px;
    background-color: #bbb;
    border-radius: 50%;
    `

    const GreenDot = styled(Dot)`
    margin-top: 12px;
    margin-right: 10px;
    height: 13px;
    width: 13px;
    background-color: #008000;
    border-radius: 50%;
    `

    const RedDot = styled(Dot)`
    margin-top: 12px;
    margin-right: 10px;
    height: 13px;
    width: 13px;
    background-color: #ff5349;
    border-radius: 50%;
    `



    const IconWrapper = styled.div`
    padding: 35px;
    width: ${isBurner ? "10px" : "25px"};
    height: 25px;
    border-radius: 50%;
    background-color: #FFFAFA;
    border-shadow: 10px 10px 20px 10px;
    `


    const CardType = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 10px 0px 10px;
    `

    const ProgressContainer = styled.div`
    background-color: #008000;
    border-radius: 13px; 
    margin: 20px 20px 20px 20px;
    `

    const CardProgress = styled.div`
    background-color: #ff5349;
    width: ${percentageProgress}%;
    height: 20px;
    border-radius: 13px;
    `

    const CardSpent = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 10px 0px 10px;
    `

    const CardBalance = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 10px 0px 10px;
    `

    return (
        <>
            <Card className='card'>
                <CardHeading className="card-heading">
                    <div style={{ margin: "0px", padding: "0px" }} className="heading">
                        <h1 style={{ marginBottom: "1px", marginTop: "0px" }}>{each.name}</h1>
                        <span><h4 style={{ marginTop: "1px", marginBottom: "0px", color: "#C0C0C0" }}>{each.name}
                            <GreyDot></GreyDot>
                            <span>{each.budget_name}</span> </h4></span>
                    </div>
                    <IconWrapper>
                        {isBurner ? (
                            <ImFire style={{ width: "28px", height: "28px", color: "#ff5349", zIndex: "2" }} />
                        ) : (
                            <TiArrowSync style={{ width: "32px", height: "32px", color: "#ff5349", zIndex: "2" }} />
                        )}
                    </IconWrapper>
                </CardHeading>
                <CardType className="card-type">
                    <div style={{ width: "120px", height: "20px", border: "1px solid black", borderRadius: "6px", padding: "5px 5px 5px 12px", color: "#888888" }}>{each.card_type.toUpperCase()}</div>
                    <div>{isBurner ? (`Expires: ${each.expiry}`):(`August Limit: ${each.expiry}`)}</div>
                </CardType>
                <ProgressContainer>
                   <CardProgress></CardProgress>
                </ProgressContainer>
                <CardSpent className="card-spent">
                    <div>
                        <RedDot></RedDot>
                         <span style={{fontSize:"20px"}}>Spent</span>
                    </div>
                    <div style={{fontSize:"20px"}}>
                        {`${each.spent.value} ${each.spent.currency}`}
                    </div>
                </CardSpent>
                <CardBalance className="card-balance">
                <div>
                        <GreenDot></GreenDot>
                         <span style={{fontSize:"20px"}}>Available to spend</span>
                    </div>
                    <div style={{fontSize:"20px"}}>
                        {`${1000 - each.spent.value} ${each.available_to_spend.currency}`}
                    </div>
                </CardBalance>
            </Card>
        </>

    )
}
