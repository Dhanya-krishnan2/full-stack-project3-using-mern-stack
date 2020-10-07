import React from "react";
import "./style.css";
import Fade from 'react-reveal/Fade';
// we are using react reveal fade for special efffect like animation and fading
// creating a class modal for rendering the information

export default class Modal extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <Fade>
                <div className="backdropStyle">
                    <div className="modalStyle">
                        {this.props.children}
                        <div className="footerStyle">

                        </div>
                    </div>

                </div>
            </Fade>
        )
    }
}