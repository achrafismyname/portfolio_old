import React, { useCallback } from 'react'
import styled from 'styled-components'
import fastIcon from '../assets/icons/fast.png'
import responsiveIcon from '../assets/icons/responsive.png'
import uiIcon from '../assets/icons/ui.png'
import beautifulIcon from '../assets/icons/beautiful.png'
import ProgressBar from './common/ProgressBar'
import { useSpring, animated as a } from 'react-spring';

export default function About() {
    const Container = styled.div`
        padding: 0;
        width: 100vw;
        color: #000;
        text-align: center;
        padding-top: 20px;
        margin-bottom: -132px;
    `;
    const Box = styled.div`
        margin: auto;
        text-align: center;
        max-width: 90%;
        width: max-content;
        padding: 20px;
        border-radius: 41px;
        background: #fff;
        box-shadow: 0 19px 86px -36px rgba(121, 121, 121, 0.75);
        hr {
            width: 70%;
        }
    `;
    const Bubbles = styled.div`
        display: flex;
        flex-direction: row;
        padding: 30px 16px;

        .bubble {
            padding: 30px 20px;
            margin: auto;
            max-width: 260px;
            img {
                height: 70px;
                width: 70px;
            }
        }
        @media (max-width: 868px) {
            flex-wrap: wrap;
        }
    `;
    const Skills = styled.div`
        max-width: 600px;
        margin: 90px auto;
    `;
    const [{ st }, set] = useSpring(() => ({ st: 0 }))

    const onScroll = useCallback(e => {
        var scrollTop = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);

        set({ st: scrollTop })
    }, [])

    const interpFace = st.interpolate(o => `translate(0,${-o * 2}px)`)
    window.addEventListener('scroll', onScroll, { passive: true })
    return (
        <Container>
            <a.div style={{ transform: interpFace }} >
                <Box>
                    <br /><hr /><br />
                    <h2>What my Websites are good at</h2>
                    <Bubbles>
                        <div className="bubble">
                            <img src={fastIcon} alt="fast" />
                            <h2>Fast</h2>
                            <p>Faster load time than a Bugatti <span role="img" aria-label="car">🚗</span></p>
                        </div>
                        <div className="bubble">
                            <img src={uiIcon} alt="fast" />
                            <h2>Alive</h2>
                            <p>In this world there is 4 things alive; 👨, 🐶, 🌳 and my websites</p>
                        </div>
                        <div className="bubble">
                            <img src={responsiveIcon} alt="fast" />
                            <h2>Responsive</h2>
                            <p>From New York billboards to Nokia 3310, it will look absolutely the same</p>
                        </div>
                        <div className="bubble">
                            <img src={beautifulIcon} alt="fast" />
                            <h2>Beautifull</h2>
                            <p>Approved by Mona Lisa her self.</p>
                        </div>
                    </Bubbles>
                    <hr />
                    <Skills>
                        <h2>What I'am good at</h2>
                        <ProgressBar color='#149dcc' label="UI/UX Design" progress="77" />
                        <ProgressBar color='#149dcc' label="HTML" progress="99" />
                        <ProgressBar color='#149dcc' label="Css / Sass" progress="83" />
                        <ProgressBar color='#149dcc' label="Javascript / Jquery" progress="74" />
                        <ProgressBar color='#149dcc' label="ReactJs" progress="64" />
                        <ProgressBar color='#149dcc' label="Node.js" progress="52" />
                        <ProgressBar color='#149dcc' label="PHP" progress="69" />
                    </Skills>
                </Box>
            </a.div>
        </Container>
    )
}
