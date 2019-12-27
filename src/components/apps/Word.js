import React from 'react'
import Window from '../Window/'
import TestComponent from '../TestComponent'

export default function Word(props) {
    return (
        <Window title="Microsft word 2020" onClose={props.onClose}>
            <TestComponent />
            looool
        </Window>
    )
}
