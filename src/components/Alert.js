import React from 'react'

export default function Alert(props) {
    // Cannot read prop null so for that we write props && other if first statement is false than will not go further
    const upperCase=(e)=>{
        return e[0].toUpperCase()+ e.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{upperCase(props.alert.type)}</strong>! {props.alert.msg}
        </div>
    )
}
