
import styles from '../component/Modal.module.css';
import React from 'react'

function Modal() {


  return (
    <div>


            <div className={styles.p1} tabindex="-1" data-micromodal-close="">
				<div className={styles.p2} role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
					{/* <button type="button" className={styles.p3} aria-label="Close modal" data-micromodal-close=""></button> */}


					<main className={styles.p3} id="modal-1-content">
						<h2>ثبت فروش</h2>

						<div>
							<label for="sell-units">تعداد</label>
							<input id="sell-units" class="form-control" type="text" name="quantity" value="" required=""/>
						</div>





						<div className={styles.columns}>
							<div class="column col-6 col-sm-12">
								<div>
									<label for="name">نام خریدار</label>
									<input id="name" name="buyer_name" class="form-control" type="text"/>
								</div>
							</div>
							<div class="column col-6 col-sm-12">
								<div>
									<label for="lastname">نام خانوادگی خریدار</label>
									<input id="lastname" name="buyer_last_name" class="form-control" type="text"/>
								</div>
							</div>
						</div>






						<div className={styles.columns}>
							<div>
								<div>
									<label for="email">ایمیل خریدار</label>
									<input id="email" name="buyer_email" class="form-control" type="email"/>
								</div>
							</div>
							<div>
								<div>
									<label for="phone">تلفن خریدار</label>
									<input id="phone" name="buyer_phone" class="form-control" type="email"/>
								</div>
							</div>
						</div>




						<button id="submit-sell" ><i class="icon space icon-sell"></i>ثبت</button>
					</main>
				</div>
			</div>






    </div>
  )
}

export default Modal