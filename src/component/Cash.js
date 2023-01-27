import React, { Component } from 'react';
import styles from './Cash.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Footer from './Footer';


class Cash extends Component {
    render() {
        return (
        
            <div>
                <Container>
                <div className={styles.container}>
                <div className={styles.wrappere}>
                <header className={styles.head}>
                <div className={styles.part1}>
		
			<h4>هزینه ها</h4>

			<div className={styles.btn}>
				<button  class="btn btn-primary">ثبت هزینه جدید</button>
			</div>
            </div>
                </header>





                <div className={styles.tablebox}>
                <table className={styles.table}>
            <tbody className={styles.tbody}>
            <tr>
                <td>توضیحات
			</td>
            <td>تاریخ
			</td>
            <td>قیمت
			</td>
            <td>عملیات
		</td>
        </tr>






                                    <tr>
						<td class="note">هزینه برای خرید 100  عدد از محصول شربت آلبالو سن ایچ</td>
						<td class="price">
														سپتامبر 7, 2022							3:50						</td>
						<td class="date"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">﷼</span>120.000.000</bdi></span></td>
						<td class="actions">
							<form action="" method="POST">
								<input type="hidden"  value="delete_expense"/>
								<input type="hidden"  value="16"/>
								<button class="btn btn-delete-expense">حذف</button>
							</form>
						</td>
					</tr>




                    <tr>
						<td class="note">رهن انبار</td>
						<td class="price">
														سپتامبر 7, 2022							3:49						</td>
						<td class="date"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">﷼</span>1.000.000.000</bdi></span></td>
						<td class="actions">
							<form action="" method="POST">
								<input type="hidden" name="action" value="delete_expense"/>
								<input type="hidden" name="eid" value="15"/>
								<button class="btn btn-delete-expense ">حذف</button>
							</form>
						</td>
					</tr>





                    <tr>
						<td class="note">هزینه لجستیک و حمل و نقل</td>
						<td class="price">
														سپتامبر 7, 2022							3:46						</td>
						<td class="date"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">﷼</span>1.500.000.000</bdi></span></td>
						<td class="actions">
							<form action="" method="POST">
								<input type="hidden" name="action" value="delete_expense"/>
								<input type="hidden" name="eid" value="11"/>
								<button class="btn btn-delete-expense ">حذف</button>
							</form>
						</td>
					</tr>





                    <tr>
						<td class="note">پورسانت تامین کنندگان</td>
						<td class="price">
														سپتامبر 7, 2022							3:44						</td>
						<td class="date"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">﷼</span>500.000.000</bdi></span></td>
						<td class="actions">
							<form action="" method="POST">
								<input type="hidden" name="action" value="delete_expense"/>
								<input type="hidden" name="eid" value="10"/>
								<button class="btn btn-delete-expense ">حذف</button>
							</form>
						</td>
					</tr>




                    <tr>
						<td class="note">تبلیغات</td>
						<td class="price">
														سپتامبر 7, 2022							3:43						</td>
						<td class="date"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">﷼</span>150.000.000</bdi></span></td>
						<td class="actions">
							<form action="" method="POST">
								<input type="hidden" name="action" value="delete_expense"/>
								<input type="hidden" name="eid" value="9"/>
								<button class="btn btn-delete-expense ">حذف</button>
							</form>
						</td>
					</tr>



                     <tr>
						<td class="note">فروشگاه اینترنتی</td>
						<td class="price">
														سپتامبر 7, 2022							3:43						</td>
						<td class="date"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">﷼</span>300.000.000</bdi></span></td>
						<td class="actions">
							<form action="" method="POST">
								<input type="hidden" name="action" value="delete_expense"/>
								<input type="hidden" name="eid" value="8"/>
								<button class="btn btn-delete-expense ">حذف</button>
							</form>
						</td>
					</tr>





                    <tr>
						<td class="note">حقوق و بیمه ماهانه پرسنل</td>
						<td class="price">
														سپتامبر 7, 2022							3:38						</td>
						<td class="date"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">﷼</span>80.000.000</bdi></span></td>
						<td class="actions">
							<form action="" method="POST">
								<input type="hidden" value="delete_expense"/>
								<input type="hidden"  value="3"/>
								<button class="btn btn-delete-expense ">حذف</button>
							</form>
						</td>
					</tr>



            </tbody>
                </table>
                </div>
                </div>
                </div>
				</ Container>
				<Footer />
            </div>
        
            
            
        );
    }
}

export default Cash;