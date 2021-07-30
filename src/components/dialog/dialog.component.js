import React from "react";
import Popup from "../popup/popup.component";
import { CSSTransition } from "react-transition-group";
import Button from "../buttons/button.component";

import "./dialog.scss";

const Dialog = (props) => {
    const { title, message, requestMessage, isShowing, okCallback, cancelCallback } = props;

    return (
        <CSSTransition in={isShowing} timeout={400} classNames="popup" unmountOnExit>
            <Popup closePopup={(e) => (cancelCallback ? cancelCallback() : okCallback())}>
                <div className="dialog">
                    <h1 className="">{title}</h1>
                    {message && <p className="message">{message}</p>}
                    {requestMessage && <textarea class="requestMessage"></textarea>}
                    {okCallback && <Button class="default confirm mr-1" title="Ok" clicked={okCallback} />}
                    {cancelCallback && <Button class="default cancel" title="Cancel" clicked={cancelCallback} />}
                </div>
            </Popup>
        </CSSTransition>
    );
};

export default Dialog;
