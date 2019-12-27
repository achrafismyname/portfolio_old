import React, { Component } from 'react'
import Word from '../components/apps/Word';
import TaskBar from '../components/TaskBar/';
import Desktop from '../components/Desktop/';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            openedApps: ['Word'],
            minimizedApps: [],
            focusedApp: 'Word'
        }
    }
    render() {
        return (
            <div>
                <Desktop />
                {this.state.openedApps.includes('Word') ? <Word onClose={this.closeApp.bind(null, 'Word')} /> : null}
                <TaskBar />
            </div>
        )
    }
    closeApp = (name) => {
        var array = [...this.state.openedApps];
        var index = array.indexOf(name)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({openedApps: array});
        }
    }
}
