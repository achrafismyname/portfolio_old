import React, { useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import IconScroll from './common/IconScroll'
import Typewriter from 'typewriter-effect';
import nameAudio from '../assets/sounds/name.mp3';
import bgImg from '../assets/images/bg.png';
import { useSpring, animated as a } from 'react-spring';

export default function Welcome(props) {
    const bgScrollingReverse = keyframes`
    100% { background-position: 50px 50px; }
    `;
    const Container = styled.div`
        height: 100vh;
        width: 100vw;
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: center;
        background: #bdc3c7;
        color: #fff;
        background: linear-gradient(to bottom,#BDBDBD,#f1f1f1); 
        // background: url('${bgImg}') repeat 0 0;
        // animation: ${bgScrollingReverse} 1.6s infinite;
        // animation-timing-function: linear;
        &>video {
            position: absolute;
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
        }
        &>.overlay{
            position: absolute;
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
            z-index: 1;
        }
        .hello-text {   
            margin: auto;
            font-size: 42px;
            max-width: 95vw;
            line-height: 1.7;
            @media (max-width: 868px) {
                font-size: 30px;
            }
        }
    `;
    const ScrollContainer = styled.div`
        margin: 0 auto;
        margin-bottom: 22px;
        font-size: 18px;
    `;
    const Name = styled.span`
        color: #ead838;
        cursor: pointer;
    `;
    const audio = new Audio(nameAudio);
    const [{ st }, set] = useSpring(() => ({ st: 0 }))

    const onScroll = useCallback(e => {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        set({ st: scrollTop })
    }, [])

    const interpFace = st.interpolate(o => `translate(0,${o / 3}px)`)
    window.addEventListener('scroll', onScroll, { passive: true })
    return (
        <Container >
            <video autoPlay muted loop>
                <source src={window.location.href+"/assets/welcome-background.mp4"} type="video/mp4" />
            </video>
            <div className="overlay"></div>
                <a.div style={{ transform: interpFace }} className="hello-text">
                    <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>Hello, I'm <Name onClick={() => audio.play()}>Ashraf El Ghinoussi</Name></span><br />
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 75,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString("I'm a Full-stack web developer")
                                .changeDeleteSpeed(30)
                                .pauseFor(2500)
                                .deleteChars(24)
                                .typeString("Designer")
                                .pauseFor(1700)
                                .deleteChars(8)
                                .typeString("Developer")
                                .pauseFor(1700)
                                .start()
                                ;
                        }}
                    />
                </a.div>
                <ScrollContainer>
                    <IconScroll color="#fff" iconColor="#ead838" text="scroll &#10;&#13; if you dare" />
                </ScrollContainer>
        </Container>
            )
        }
