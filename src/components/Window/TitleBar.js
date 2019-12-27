import React from 'react'
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';

export default function TitleBar(props) {

    const titleBarStyle= {
            background: (props.bg ? props.bg : '#ffffff'),
            color: (props.color ? props.color : '#000000')
        };

    return (
        <div className='title-bar' style={titleBarStyle}>
            <div className='title'>
                {props.title}
            </div>
            <div className='buttons'>
                <button onClick={props.onMinimize}>
                    <FontIcon iconName="ChromeMinimize" />
                </button>
                <button onClick={props.onExpand}>
                    <FontIcon iconName="ChromeRestore" />
                </button>
                <button className="close" onClick={props.onClose}>
                    <FontIcon iconName="ChromeClose" />
                </button>
            </div>
            <div className="handle drag-overlay">
            </div>
        </div>
    )
}

