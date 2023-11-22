import React from 'react';

export default function Alert(props) {
    const capitalized = (word) => {
        if (word) {
            const lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        } else {
            return '';
        }
    };

    return (
        // Check if props.alert is defined before accessing its properties
        props.alert && (
            <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        )
    );
}
