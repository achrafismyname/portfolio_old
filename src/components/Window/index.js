import React, { Component } from 'react'
import Draggable from 'react-draggable'
import TitleBar from './TitleBar'
import './index.scss' 

export default class Window extends Component {
    constructor(){
        super();
        this.state = {
            minimized: false,
            expanded: false,
            closed: false
        }
    }
    render() {
        return (
            <Draggable
                handle=".handle"
                // onStart={this.handleStart}
                // onDrag={this.handleDrag}
                // onStop={this.handleStop}
                >
                <div className="window">
                    <TitleBar 
                        title={this.props.title} 
                        onMinimize={this.minimizeToggle}
                        onExpand={this.expandToggle}
                        onClose={this.props.onClose}
                    />
                    {this.props.children}
                </div>
            </Draggable>
        )
    }
    minimizeToggle = () => {
        this.setState({minimized: !this.state.minimized})
    }
    expandToggle = () => {
        this.setState({expanded: !this.state.expanded})
    }
}
