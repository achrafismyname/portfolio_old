import React, { Component } from 'react'
import './index.scss'

export default class index extends Component {
    render() {
        let bgUrl = 'https://i.imgur.com/wqQXJGJ.jpg';
        return (
            <div id="desktop" style={{backgroundImage: 'url('+bgUrl+')'}}>
                
            </div>
        )
    }
}
