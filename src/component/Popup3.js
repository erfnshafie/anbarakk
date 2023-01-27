import React from 'react';
import styles from "./Popup3.module.css";






function Popup3(props) {
	
    return (props.trigger) ? (
        <div className={styles.popup3}>
            <div className={styles.popupinner3}>
                <button className={styles.closebtn3} onClick={() =>props.setTrigger(false)}>close</button>
                    {props.children}
                   

            </div>
        </div>
    ) :"" ;
}

export default Popup3;
