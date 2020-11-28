import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function IconScroll(props) {
    const Scroll = keyframes`
        0% { opacity: 1; height: 8px;}
        20% { opacity: 1; height: 8px;}
        30% { transform: translateY(0); opacity: 1; height: 19px;}
        40% { opacity: 1;}
        80% { transform: translateY(19px); opacity: 0; height: 0;}
        81% { transform: translateY(0); opacity: 0; height: 8px;}
        100% { opacity: 1; height: 8px;}
    `;
    const Container = styled.span`
        position: relative;
        display: block;
        font-size: 0.933rem;
        font-weight: bold;
        color: ${props.color || "rgba(255,255,255,1)"};
        text-decoration: none;
        padding: 10px 10px 10px 40px;
        max-width: 80px;
        &:before {
            display: block;
            position: absolute;
            top:4px;
            left:0;
            width: 24px;
            height: 40px;
            border: 2px solid ${props.iconColor || props.color || "rgba(255,255,255,1)"};
            border-radius: 12px;
            content:"";
          }
          &:after {
            display: block;
            position: absolute;
            top:12px;
            left:13px;
            width: 2px;
            height: 8px;
            background: ${props.iconColor || props.color || "rgba(255,255,255,1)"};
            border-radius: 1px;
            content:"";
            animation-name: ${Scroll};
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-delay: 2s;
        }
    `;
    return (
        <Container>
            {props.text || 'none'}
        </Container>
    )
}
