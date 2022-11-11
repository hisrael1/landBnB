import React from 'react';

class UserIdentity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {photo: null}
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        const photo = e.currentTarget.files[0];
        this.setState({photo: photo});
    }

    render() {
        const { user } = this.props;
        debugger
        return (
            <div className="user-identity">
                <img src={window.blank_user_profile} id="blank_user_profile" />
                {/* <img src={user.photoUrl} id="blank_user_profile" /> */}
                <p className="hello-user"> Hello, {user.first_name} {user.last_name} </p>
    
            {/* <div id="profile-photo-upload-container"> */}
                <div>Upload Photo</div>
                <input onChange={this.handleFile} type="file"></input>
            {/* </div> */}

                <div>
                    <img src={window.shield_checkmark} className="shield-checkmark" />
                    <p className="user-verified"> Identity Verified </p>
                </div>
            
                <div className="user-identity-border"></div>
            
                <div>
                    <p className="user-confirmed"> User confirmed </p> 
                    <p className="checkmark">&#10004; Identity</p>
                    <p className="checkmark">&#10004; Email Address</p>
                </div>
            </div>
        )
    }
}

export default UserIdentity;    



