import React, { useCallback } from 'react'
import styled from 'styled-components';
import portrait from '../assets/images/me.jpg'
import { useSpring, animated as a } from 'react-spring';

export default function Me() {
    const Me = styled.div`
        width: 100vw; 
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        background: #2E3F7F; 
        background: linear-gradient(to top, #303FC5, #25598A);
        &>div{
            text-align: center;
            margin:auto;
            padding: 0 16px;
            display: flex;
            flex-direction: row;
            width: max-content;
            @media (max-width: 1008px) {
                flex-direction: column;
                padding: 0;
                width: 100%;
                .text{
                    max-width: 100vw;
                    p {
                        margin: 40px 20px;
                    }
                }
            }
        }
        img {
            max-height: 700px;
            max-width: 100vw;
            padding: 0;
            margin: 0;
                object-fit: contain;
        }
        .text{
                    margin: auto;
                    width: 500px;
                    
    @media (max-width: 868px) {
        margin-top: -5  0px;
    }
            p {
                max-width: 100%;
                margin: auto 60px;
                font-size: 26px;
                line-height: 1.6;                   
                color: #fff;
            }
        }
    `;

    const [{ st }, set] = useSpring(() => ({ st: 0 }))

    const onScroll = useCallback(e => {
        var scrollTop = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);

        set({ st: scrollTop })
    }, [])
    const interpFace = st.interpolate(o => `scale(${Math.min(Math.max(o * 5 / 100, 0.7), 1)}) translate(0, ${-o}px)`)
    window.addEventListener('scroll', onScroll, { passive: true })

    return (
        <Me>
            <div>
                <a.img style={{ transform: interpFace }} src={portrait} alt="ashraf el ghinoussi portrait">
                </a.img>
                <div className="text">
                    <p>
                        Perfect has 7 letters so is my woooork
                    </p>
                </div>
            </div>
        </Me>
    )
}
