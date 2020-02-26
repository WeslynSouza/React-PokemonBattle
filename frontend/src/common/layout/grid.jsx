import React, { Component } from 'react'

export default class Grid extends Component{

    toColsClasses(numbers){
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`

        return classes
    }

    toOffsetClasses(numbers){
        const offsets = numbers ? numbers.split(' ') : []
        let classes = ''

        if(offsets[0]) classes += ` col-xs-offset-${offsets[0]}`
        if(offsets[1]) classes += ` col-sm-offset-${offsets[1]}`

        return classes
    }

    render(){
        const gridClasses = this.toColsClasses(this.props.cols || '12 4') + 
            this.toOffsetClasses(this.props.offset)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}