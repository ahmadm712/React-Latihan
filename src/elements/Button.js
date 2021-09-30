import React from 'react'
import PropsTypes from 'prop-types'

export default function Button(props) {
    const className = ['button']
    if(props.isPrimary){
        className.push("button-primary")
    }
    if(props.isWideMobile){
        className.push("button-wide-mobile")
    }
    if(props.isSmall){
        className.push("button-sm")
    }
    return (
        <button className={className.join(" ")}>{
            props.children
        }
            
        </button>
    )
}

Button.PropsTypes={
    isPrimary:PropsTypes.bool,
    isWideMobile:PropsTypes.bool,
    isSmall:PropsTypes.bool,

}
