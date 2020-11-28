import React from 'react'

import styled from 'styled-components';
import soonImg from '../assets/images/soon.jpg'

const cards = [
    soonImg,
    soonImg,
    null,
    null,
    null,
    soonImg,
]



export default function Works() {
    const Container = styled.div`
    width: 90vw;
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 1000px;
    margin: 60px auto;
    margin-bottom: 160px;
    text-align: center;
    @media (max-width: 868px) {
        grid-template-columns: 100%;
    }
    `;


    return (
        <div>
        <h2 style={{textAlign: "center", margin: "40px auto", fontWeight:"blod", color:"#ead838"}}>Previous Projects</h2>
        <Container>
            {cards.map((o, i) => {
                return (<Card img={o} key={i} />)
            })}
        </Container>
        </div>
    )
}


function Card(props) {
    const Card = styled.div`
        background-color: white;
        width: 600px;
        height: 400px;
        margin: auto;
        border-radius: 10px;
        box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
        transform: perspective(1500px) rotateX(30deg) rotateY(${4 / 10}deg) rotateZ(${(Math.round(Math.random()) * 2 - 1)*Math.floor(Math.random() * 40)}deg) scale(${1});
        transition-duration: 600ms;
        position: relative;
        &:hover{
            transform: rotateZ(0deg);
            z-index: 1;
        }
        .img{
            background-size: 95% 95%;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url(${props.img});
            height: 100%;
            width: 100%;
            margin: auto;
            position: absolute;
            top: 0;
        }
        @media (max-width: 868px) {
            width: 60vw;
            height: 40vw;
        }
    `;
    return (
        <Card>
            <div className="img"></div>
        </Card>
    )
}

