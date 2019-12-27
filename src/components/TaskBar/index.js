import React, { Component } from 'react'
import './index.scss'
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';

export default class index extends Component {
    render() {
        return (
            <div id="task-bar">
                <button className="start">
                    <FontIcon iconName="WindowsLogo" />
                </button>
                <div className="cortana-search">
                    <FontIcon iconName="CircleRing" />
                    <input placeholder="Type here to search" type="text"/>
                    <FontIcon iconName="Microphone" />
                </div>
            </div>
        )
    }
}
