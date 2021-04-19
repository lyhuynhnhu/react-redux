import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import maleIcon from '../../images/male-icon.png'
import femaleIcon from '../../images/female-icon.png'
import cameraIcon from '../../images/camera-icon.jpg'

import './profile.css'

const Profile = () => {
    return (
        <article>
            <section>
                <form action="#" className="form-profile">
                    <h2>Enter your Info</h2>
                    <input className="name-control" type="text" placeholder="Enter your full name" />
                    <label className="gender-control">Select gender</label>
                    <div className="gender">
                        <button className="gender-icon"><img src={maleIcon} alt="male avatar" /></button>
                        <button className="gender-icon"><img src={femaleIcon} alt="female avatar" /></button>
                    </div>
                    <div className="upload-picture">
                        <button className="gender-icon" type="button"><img src={cameraIcon} alt="Upload Picture" /></button>
                        <div className="upload-profile">
                            <label>Upload profile picture</label>
                        </div>
                    </div>
                    <button type="button" className="update-profile">
                        <FontAwesomeIcon icon={faArrowRight} size="2x"/>
                    </button>
                </form>
            </section>
        </article>
    )
}

export default Profile