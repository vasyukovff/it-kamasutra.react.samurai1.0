import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });

        if(this.state.editMode === true) {
            this.props.setStatus(this.state.status);
        }
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.toggleEditMode}>{this.props.status || "No status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.toggleEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;