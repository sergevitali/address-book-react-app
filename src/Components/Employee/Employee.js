import React from 'react';
import styles from './Employee.module.css';

const employee=(props)=>{
    const upperCase=(str)=>{
        return str.charAt(0).toUpperCase()+str.slice(1);
    }
    return(
        <div className={styles.Employee}>
            <div>
                <h3>{upperCase(props.firstName)} {upperCase(props.lastName)}</h3>
                <p><strong>Department:</strong> {upperCase(props.department)} </p>
                <p><strong>Phone Number:</strong> {props.phoneNumber}</p>
            </div>
            <div>
                <button className={styles.Red} onClick={props.delete}>Delete</button>
            </div>
        </div>
    )
}

export default employee;