import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';

export default function ProgressBar(props) {
    const Container = styled.div`
        text-align: left;
        width: 100%;
        margin: 40px 0;
    `;
    const Label = styled.div`
        font-weight: normal;
        padding: 6px 11px;
    `;
    const BarContainer = styled.div`
        background: rgba(206, 206, 206, 0.4);
        width: 100%;
        height: 10px;
        border-radius: 3px;
        overflow: hidden;
        position: relative; 
        z-index: 0;
        .bar {
            height: 100%;
            width: 1%;
            transition-duration: 1s;
        }
    `;
    const Alt = styled.span`
        position: absolute;
        right: 4px;
        top: 0;
        bottom: 0;
        line-height: 10px;
        font-size: 13px;
        font-weight: bold;
        color: #000;
    `;
    return (
        <Container>
            <Label>
                {props.label || ''}
            </Label>
            <BarContainer>
                <ScrollAnimation className="bar" style={{ width: props.progress + "%", backgroundColor: props.color || '#0288d1' }} animateIn="progressBarAnimate">
                </ScrollAnimation>
                <Alt>
                    {props.showProgress? props.progress + "%":""}
                </Alt>
            </BarContainer>
        </Container>
    )
}
