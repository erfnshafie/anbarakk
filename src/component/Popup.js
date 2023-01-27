import React from 'react';
import styles from "./Popup.module.css";






function Popup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupinner}>
                <button className={styles.closebtn} onClick={() =>props.setTrigger(true)}>close</button>

                    {props.children}
                    
           			<main>
						<h2>ثبت خرید</h2>

						<div >
							<label for="units">تعداد</label>
							<input id="units" class="form-control" type="text" name="units"/>
						</div>

						<div >
							<label for="cost">قیمت هر عدد</label>
							<input id="cost" class="form-control thousand-separator" type="text" name="units"/>
						</div>

						<button id="submit-purchase" class="btn btn-primary">ثبت</button>
					</main>



            </div>
        </div>
    ) :"" ;
}

export default Popup;
