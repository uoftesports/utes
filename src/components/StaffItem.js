import React from 'react'
import classnames from 'classnames'
import './styles.css'

export default ({ name, role, image }) => (
    <div className={classnames('staff-item', 'per-item')}>
        <img className="staff-img" src={image}/>
        <div className="staff-text">
            <p className="staff-name"><b>{name}</b><br/><i>{role}</i></p>
        </div>
    </div>
)