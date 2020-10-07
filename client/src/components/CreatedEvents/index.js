import React from "react";
import "./style.css";
import {
    Link
} from "react-router-dom";
// here we are creating Event by using style.css, react and react-dom
//this react router dom let us to navigate between the components and keeping the Ui sunchronised
// creating a function having all the details we want in the home page
function CreatedEvents({
    deleteEvent,
    eventName,
    eventDateTime,
    id,
    restaurantMenuURL,
    message,
    orderDateTime,
    restaurantName,
    sendToEmail
}) {
    return (
        <div className="mt-4 px-5">
            <div className="row d-flex eventTitleInfo-and-buttons">
                <div className={`flex-grow-1 event-${id}`}>
                    <p>Title: <strong><Link to={`/event/${id}`}>{eventName}</Link></strong></p>
                    <p>Location: <strong>{restaurantName}</strong></p>
                    <p>Date of event: <strong>{eventDateTime}</strong></p>
                    <p>Order by (date and time): <strong>{orderDateTime}</strong></p>
                    <p>Invitation(s) sent to: <strong>{sendToEmail}</strong></p>
                    <p>Message/Instructions <em>(optional)</em>: <strong>{message}</strong></p>
                </div>
                <div className="view-save">
                    <a className="btn btn-outline-general mx-2"
                        role="button" href={restaurantMenuURL}
                        target="_blank" rel="noopener noreferrer">View Menu</a>
                    <button
                        type="button"
                        className="btn btn-general mx-2"
                        onClick={() => deleteEvent(id)}>Delete</button>
                </div>
            </div>
            <div className="row d-flex summary">
                <div className="col-9 event-summary">
                  
                    
                </div>
            </div>
        </div>

    );
}

export default CreatedEvents;
// the above HTML creates the form which having all the details in them and some of them are optional
// here we are exporting by default