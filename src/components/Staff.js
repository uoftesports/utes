import React, { Component } from 'react'
import StaffItem from './StaffItem'
import './styles.css'
import staff from './staff.json'
import classnames from 'classnames';

export default class Staff extends Component {
    render() {
        return (
            <div className={classnames('divisor', 'staff-container')}>
                <p className="staff-title"> STAFF </p>
                <div className={classnames("staff-content", 'per-content')}>
                    {
                        staff.staff.map(({name, role}, i) => (
                            <StaffItem name={name} role={role} image={require(`./images/${name.substr(0, name.indexOf(' ')).toLowerCase()}.jpg`)}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}