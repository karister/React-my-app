import './message.css';
import React from 'react'

class Student extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="student-name"><h2>{this.props.user.name}</h2></div>
                <div className="student-age">{this.props.user.age}</div>
                <div className="student-sex">{this.props.user.sex}</div>
            </div>
        )
    }
}

class Teacher extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="teacher-name"><h2>{this.props.user.name}</h2></div>
                <div className="teacher-age">{this.props.user.age}</div>
                <div className="teacher-sex">{this.props.user.sex}</div>
            </div>
        )
    }
}

class School extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="school-name"><h2>{this.props.user.name}</h2></div>
                <div className="school-addresss">{this.props.user.address}</div>
            </div>
        )
    }
}

function Message(props) {
    return (
        <div className="message">
            <Student user={props.student}/>
            <Teacher user={props.teacher}/>
            <School user={props.school}/>
        </div>
    )
}

// class Message extends React.Component {
//     render() {
//         return (
//             <div className="message">
//                 <Student user={this.prop.student}/>
//                 <Teacher user={this.prop.teacher}/>
//                 <School user={this.prop.school}/>
//             </div>
//         )
//     }
// }

export default Message;
