import React from 'react'
import styled from 'styled-components'
import Sticky from 'react-sticky-el';

export default function Navbar() {
    const Nav = styled.div`
        width: 100%;
        height: 60px;
        background: #000111;
        color: #fff;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        &>div {
            height: 100%;
            max-width: 1600px;
            margin: auto;
            display: flex;
            .menu{
                margin-left: auto;
            }
        }
        `;
    return (
        <Sticky style={{ zIndex: 10 }}>
            <Nav>
                <div>
                    <ul className="menu">
                        <li>lol</li>
                        <li>lol</li>
                        <li>lol</li>
                    </ul>
                </div>
            </Nav>
        </Sticky>
    )
}
