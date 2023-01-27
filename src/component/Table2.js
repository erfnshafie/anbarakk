import React from "react";
import styles from "./Table2.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "./Footer"


import Popup from "../component/Popup";
import { useState } from "react";
import Modal from "../component/Modal";


import picture from "../images/bag-fill.svg";
import picture1 from "../images/download.svg";
import picture2 from "../images/save2-fill.svg";
import picture3 from "../images/columns-gap.svg"
import picture4 from "../images/search.svg";




// fanctional component 
function Table2() {

    // popup 1
    const [buttonPopup, setButtomPopup] = useState(false);
      
    
  
// Modal 
const [openModal , setOpenModal] =useState(false); 

//   popup this page 
  const [popupp, setPop] = useState(false);
  const HandleClickOpen = () => {
    setPop(!popupp);
  };




  return (

    

    <div>
      <Container>
        <div className={styles.inventory}>
          <aside></aside>
          <div className={styles.container}>


            <header className={styles.head}>
              <h4 class="fw-bold" >محصولات</h4>
            </header>
            <div className={styles.wrapper}>






              <form className={styles.form1}>


                <div className={styles.headcomponent}>
                  <div className={styles.part1}>
                    <select name="t" id="" class="ml-1">
                      <option value="p-name">نام محصول</option>
                      <option value="p-stock">مقدار موجودی</option>
                      <option value="p-sku">SKU</option>
                    </select>
                    <input
                      name="q"
                      type="text"
                      class="form-control ml-1"
                      placeholder="جست و جوی محصولات..."
                    />
                    <input type="hidden" name="action" value="product_search" />

                    <button type="submit" class="btn btn-warning">
                      <label>
                        {" "}
                        <img src={picture4}></img>{" "}
                      </label>
                    </button>
                  </div>



                  <div className={styles.p2p3}>


                    <div className={styles.part2}>


                      <div class="stock-nav d-flex align-items-center">
                        <div class="stock-nav__item">
                          <button class="btn">همه (10)</button>
                        </div>
                        <div class="stock-nav__item">
                          <button class="btn">موجود (10)</button>
                        </div>
                        <div class="stock-nav__item">
                          <button class="btn">موجودی کم (0)</button>
                        </div>
                        <div class="stock-nav__item">
                          <button class="btn">ناموجود (0)</button>
                        </div>
                      </div>
                    </div>




                    <div className={styles.part3}>
                      <button
                        onClick={HandleClickOpen}
                        class="btn"
                        data-tippy-content="مدیریت ستون ها">


                        {popupp ? (




                          <div className={styles.popup22}>
                            <main className={styles.main} id="modal-1-content">
                              <h2>مدیریت ستون ها</h2>

                              <br />
                              <form
                                className={styles.formm}
                                action="/"
                                method="post"
                              >
                                <div class="form-group">
                                  <label class="form-checkbox">
                                    <input
                                      type="checkbox"
                                      name="col_sku"
                                      checked="true"
                                    />
                                    SKU
                                  </label>
                                </div>

                                <div class="form-group">
                                  <label class="form-checkbox">
                                    <input
                                      type="checkbox"
                                      name="col_online_sell"
                                      checked="true"
                                    />
                                    فروش آنلاین{" "}
                                  </label>
                                </div>

                                <div class="form-group">
                                  <label class="form-checkbox">
                                    <input
                                      type="checkbox"
                                      name="col_backorders"
                                      checked="true"
                                    />
                                    پیشفروش{" "}
                                  </label>
                                </div>

                                <div class="form-group">
                                  <label class="form-checkbox">
                                    <input
                                      type="checkbox"
                                      name="col_submit_buy"
                                      checked="true"
                                    />
                                    ثبت خرید{" "}
                                  </label>
                                </div>

                                <div class="form-group">
                                  <label class="form-checkbox">
                                    <input
                                      class="btn btn-primary mt-2"
                                      type="checkbox"
                                      name="col_submit_sell"
                                      checked="true"
                                    />
                                  ثبت فروش
                                  </label>
                                </div>

                                <input
                                  type="hidden"
                                  name="action"
                                  value="columns_save"
                                />
                                <button
                                  type="submit"
                                  id="confirm-columns"
                                  class="btn btn-primary mt-2"
                                >
                                  تایید
                                </button>
                              </form>
                            </main>
                          </div>
                        ) : (
                          ""
                        )}
                        <label>
                          {" "}

                          <img src={picture3}></img>{" "}
                        </label>
                      </button>
                    </div>
                  </div>
                </div>
              </form>











              <form className={styles.form2}>









                <table className={styles.table}>





                            {/*       thead         */}
                  <thead className={styles.thead}>
                    <tr>
                      <th> تصویر </th>
                      <th> شناسه </th>
                      <th> نام </th>
                      <th> SKU </th>
                      <th> فروش انلاین </th>
                      <th> بیش فروش </th>
                      <th> قیمت </th>
                      <th> فروش ویژه</th>
                      <th> موجودی</th>
                      <th> عملیات </th>
                    </tr>
                  </thead>







                        {/*             tbody          */}
                  <tbody className={styles.tbody}>
                    <tr>
                      <td>
                        <img
                          width="48"
                          height="48"
                          src="https://store.itvandad.com/wp-content/uploads/2022/07/WhatsApp-Image-2020-05-15-at-3.25.57-AM-1-324x324.jpeg"
                          // class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcset="https://store.itvandad.com/wp-content/uploads/2022/07/WhatsApp-Image-2020-05-15-at-3.25.57-AM-1-324x324.jpeg 324w, https://store.itvandad.com/wp-content/uploads/2022/07/WhatsApp-Image-2020-05-15-at-3.25.57-AM-1-300x300.jpeg 300w, https://store.itvandad.com/wp-content/uploads/2022/07/WhatsApp-Image-2020-05-15-at-3.25.57-AM-1-150x150.jpeg 150w, https://store.itvandad.com/wp-content/uploads/2022/07/WhatsApp-Image-2020-05-15-at-3.25.57-AM-1-416x416.jpeg 416w, https://store.itvandad.com/wp-content/uploads/2022/07/WhatsApp-Image-2020-05-15-at-3.25.57-AM-1-100x100.jpeg 100w, https://store.itvandad.com/wp-content/uploads/2022/07/WhatsApp-Image-2020-05-15-at-3.25.57-AM-1.jpeg 600w"
                          sizes="(max-width: 324px) 100vw, 324px"
                        />
                      </td>
                      <td> 16 </td>
                      <td>
                        <a href="https://store.itvandad.com/?product=%d8%b4%d8%b1%d8%a8%d8%aa-%d8%a2%d9%84%d8%a8%d8%a7%d9%84%d9%88-%d8%b3%d9%86-%d8%a7%db%8c%da%86">
                          شربت آلبالو سن ایچ <small></small>
                        </a>
                      </td>
                      <td>
                        <input type="text" value="101" />
                      </td>
                      <td>
                        <select>
                          <option value="0">غیرفعال</option>
                          <option value="1" selected="selected">
                            فعال
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="no" selected="selected">
                            اجازه نده
                          </option>
                          <option value="notify">خبر بده</option>
                          <option value="yes">اجازه بده</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" value="1400000" />
                      </td>
                      <td>
                        <input type="text" value="" />
                      </td>
                      <td>
                        <input type="number" value="107" />
                      </td>
                      <td>
                        <input type="hidden" value="16" />
                        <div>
                          <button type="submit" data-tippy-content="ذخیره">
                            <label>
                              {" "}
                              <img src={picture2}></img>{" "}
                            </label>
                          </button>








                          <button
                            onClick={() => setButtomPopup(true)}
                            type="submit"
                            data-tippy-content="ثبت خرید"
                          >
                            <Popup
                              trigger={buttonPopup}
                              setTrigger={setButtomPopup}
                            ></Popup>

                            <label>
                              <img src={picture}></img>
                            </label>
                          </button>


                          <button onClick={() =>{
                            setOpenModal(true);
                          }}

                          type="submit"  data-tippy-content="ثبت فروش" >
                         <div>{openModal && <Modal />}</div>


                            <label>
                              {" "}
                              <img src={picture1}></img>{" "}
                            </label>
                          </button>
                        </div>
                      </td>
                    </tr>


























                    <tr>
                      <td>
                        <img
                          width="48"
                          height="48"
                          src="https://store.itvandad.com/wp-content/uploads/2022/07/2431739-324x324.jpg"
                          // class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcset="https://store.itvandad.com/wp-content/uploads/2022/07/2431739-324x324.jpg 324w, https://store.itvandad.com/wp-content/uploads/2022/07/2431739-300x300.jpg 300w, https://store.itvandad.com/wp-content/uploads/2022/07/2431739-150x150.jpg 150w, https://store.itvandad.com/wp-content/uploads/2022/07/2431739-768x768.jpg 768w, https://store.itvandad.com/wp-content/uploads/2022/07/2431739-416x416.jpg 416w, https://store.itvandad.com/wp-content/uploads/2022/07/2431739-100x100.jpg 100w, https://store.itvandad.com/wp-content/uploads/2022/07/2431739.jpg 800w"
                          sizes="(max-width: 324px) 100vw, 324px"
                        />
                      </td>
                      <td>18</td>
                      <td>
                        <a href="https://store.itvandad.com/?product=%d9%86%d9%88%d8%b4%d8%a7%d8%a8%d9%87-%da%a9%d9%88%d9%84%d8%a7-%da%a9%d9%88%da%a9%d8%a7%da%a9%d9%88%d9%84%d8%a7">
                          نوشابه کولا کوکاکولا <small></small>
                        </a>
                      </td>
                      <td>
                        <input type="text" value="102" />
                      </td>
                      <td>
                        <select>
                          <option value="0">غیرفعال</option>
                          <option value="1" selected="selected">
                            فعال
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="no" selected="selected">
                            اجازه نده
                          </option>
                          <option value="notify">خبر بده</option>
                          <option value="yes">اجازه بده</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" value="148,000" />
                      </td>
                      <td>
                        <input type="text" value="126,000" />
                      </td>
                      <td>
                        <input type="number" value="6" />
                      </td>
                      <td>
                        <input type="hidden" value="16" />
                        <div>
                          <button type="submit" data-tippy-content="ذخیره">
                            <label>
                              {" "}
                              <img src={picture2}></img>{" "}
                            </label>
                          </button>






                          <button
                            onClick={() => setButtomPopup(true)}
                            type="submit"
                            data-tippy-content="ثبت خرید"
                          >
                            <Popup
                              trigger={buttonPopup}
                              setTrigger={setButtomPopup}
                            >
                              <h3></h3>
                            </Popup>

                            <label>
                              {" "}
                              <img src={picture}></img>{" "}
                            </label>
                          </button>





                          
                          <button 
                           onClick={() =>{
                            setOpenModal(true);
                          }}
                      
                          type="submit"  data-tippy-content="ثبت فروش" >
                         <div>{openModal && <Modal />}</div>






                            <label>
                              {" "}
                              <img src={picture1}></img>{" "}
                            </label>
                          </button>
                        </div>
                      </td>
                    </tr>

























                    <tr>
                      <td>
                        <img
                          width="48"
                          height="48"
                          src="https://store.itvandad.com/wp-content/uploads/2022/07/NGDUy1_TvmMNdOjP-324x324.jpg"
                          // class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcset="https://store.itvandad.com/wp-content/uploads/2022/07/NGDUy1_TvmMNdOjP-324x324.jpg 324w, https://store.itvandad.com/wp-content/uploads/2022/07/NGDUy1_TvmMNdOjP-150x150.jpg 150w, https://store.itvandad.com/wp-content/uploads/2022/07/NGDUy1_TvmMNdOjP-100x100.jpg 100w"
                          sizes="(max-width: 324px) 100vw, 324px"
                        />
                      </td>
                      <td>20</td>
                      <td>
                        <a href="https://store.itvandad.com/?product=%d9%85%d8%a7%d8%a1%d8%a7%d9%84%d8%b4%d8%b9%db%8c%d8%b1-%d8%a7%d8%b3%d8%aa%d9%88%d8%a7%db%8c%db%8c-%d8%af%d9%84%d8%b3%d8%aa%d8%b1">
                          ماءالشعیر استوایی دلستر<small></small>
                        </a>
                      </td>
                      <td>
                        <input type="text" value="103" />
                      </td>
                      <td>
                        <select>
                          <option value="0">غیرفعال</option>
                          <option value="1" selected="selected">
                            فعال
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="no" selected="selected">
                            اجازه نده
                          </option>
                          <option value="notify">خبر بده</option>
                          <option value="yes">اجازه بده</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" value="156,000" />
                      </td>

                      <td>
                        <input type="text" value="153.000" />
                      </td>
                      <td>
                        <input type="number" value="8" />
                      </td>
                      <td>
                        <input type="hidden" value="16" />
                        <div>
                          <button type="submit" data-tippy-content="ذخیره">
                            <label>
                              {" "}
                              <img src={picture2}></img>{" "}
                            </label>
                          </button>






                          <button
                            onClick={() => setButtomPopup(true)}
                            type="submit"
                            data-tippy-content="ثبت خرید"
                          >
                            <Popup
                              trigger={buttonPopup}
                              setTrigger={setButtomPopup}
                            >
                              <h3></h3>
                            </Popup>

                            <label>
                              {" "}
                              <img src={picture}></img>{" "}
                            </label>
                          </button>





                          <button 
                           onClick={() =>{
                            setOpenModal(true);
                          }}
                          type="submit" data-tippy-content="ثبت فروش" >
                          <div>{openModal && <Modal />}</div>




                            <label>
                              {" "}
                              <img src={picture1}></img>{" "}
                            </label>
                          </button>
                        </div>
                      </td>
                    </tr>






























                    <tr>
                      <td>
                        <img
                          width="48"
                          height="48"
                          src="https://store.itvandad.com/wp-content/uploads/2022/07/3559566-324x324.jpg"
                          // class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcset="https://store.itvandad.com/wp-content/uploads/2022/07/3559566-324x324.jpg 324w, https://store.itvandad.com/wp-content/uploads/2022/07/3559566-300x300.jpg 300w, https://store.itvandad.com/wp-content/uploads/2022/07/3559566-150x150.jpg 150w, https://store.itvandad.com/wp-content/uploads/2022/07/3559566-768x768.jpg 768w, https://store.itvandad.com/wp-content/uploads/2022/07/3559566-416x416.jpg 416w, https://store.itvandad.com/wp-content/uploads/2022/07/3559566-100x100.jpg 100w, https://store.itvandad.com/wp-content/uploads/2022/07/3559566.jpg 800w"
                          sizes="(max-width: 324px) 100vw, 324px"
                        />
                      </td>
                      <td>23</td>
                      <td>
                        <a href="https://store.itvandad.com/?product=%d9%86%d9%88%d8%b4%d8%a7%d8%a8%d9%87-%da%af%d8%a7%d8%b2-%d8%af%d8%a7%d8%b1-%d8%a8%d8%a7-%d8%b7%d8%b9%d9%85-%da%a9%d9%88%d9%84%d8%a7-%d9%be%d9%be%d8%b3%db%8c">
                          نوشابه گاز دار با طعم کولا پپسی <small></small>
                        </a>
                      </td>
                      <td>
                        <input type="text" value="104" />
                      </td>
                      <td>
                        <select>
                          <option value="0">غیرفعال</option>
                          <option value="1" selected="selected">
                            فعال
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="no" selected="selected">
                            اجازه نده
                          </option>
                          <option value="notify">خبر بده</option>
                          <option value="yes">اجازه بده</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" value="97,000" />
                      </td>

                      <td>
                        <input type="text" value="85.000" />
                      </td>
                      <td>
                        <input type="number" value="25" />
                      </td>
                      <td>
                        <input type="hidden" value="16" />
                        <div>
                          <button type="submit" value="ذخیزه">
                            <label>
                              {" "}
                              <img src={picture2}></img>{" "}
                            </label>
                          </button>







                          <button
                            onClick={() => setButtomPopup(true)}
                            type="submit"
                            data-tippy-content="ثبت خرید"
                          >
                            <Popup
                              trigger={buttonPopup}
                              setTrigger={setButtomPopup}
                            >
                              <h3></h3>
                            </Popup>
                            <label>
                              {" "}
                              <img src={picture}></img>{" "}
                            </label>
                          </button>






                          <button 
                           onClick={() =>{
                            setOpenModal(true);
                          }}
                          type="submit"  data-tippy-content="ثبت فروش">
                          <div>{openModal && <Modal />}</div>



                           
                            <label>
                              {" "}
                              <img src={picture1}></img>{" "}
                            </label>
                          </button>
                        </div>
                      </td>
                    </tr>




























                    <tr>
                      <td>
                        <img
                          width="48"
                          height="48"
                          src="https://store.itvandad.com/wp-content/uploads/2022/07/119797474166129-324x324.jpg"
                          // class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcset="https://store.itvandad.com/wp-content/uploads/2022/07/119797474166129-324x324.jpg 324w, https://store.itvandad.com/wp-content/uploads/2022/07/119797474166129-300x300.jpg 300w, https://store.itvandad.com/wp-content/uploads/2022/07/119797474166129-1024x1024.jpg 1024w, https://store.itvandad.com/wp-content/uploads/2022/07/119797474166129-150x150.jpg 150w, https://store.itvandad.com/wp-content/uploads/2022/07/119797474166129-768x768.jpg 768w, https://store.itvandad.com/wp-content/uploads/2022/07/119797474166129-416x416.jpg 416w, https://store.itvandad.com/wp-content/uploads/2022/07/119797474166129-100x100.jpg 100w, https://store.itvandad.com/wp-content/uploads/2022/07/119797474166129.jpg 1200w"
                          sizes="(max-width: 324px) 100vw, 324px"
                        />
                      </td>
                      <td>25</td>
                      <td>
                        <a href="https://store.itvandad.com/?product=%d9%86%d9%88%d8%b4%db%8c%d8%af%d9%86%db%8c-%d9%87%d9%84%d9%88-%d8%b3%d8%a7%d9%86-%d8%a7%d8%b3%d8%aa%d8%a7%d8%b1">
                          نوشیدنی هلو سان استار <small></small>
                        </a>
                      </td>

                      <td>
                        <input type="text" value="105" />
                      </td>
                      <td>
                        <select>
                          <option value="0">غیرفعال</option>
                          <option value="1" selected="selected">
                            فعال
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="no" selected="selected">
                            اجازه نده
                          </option>
                          <option value="notify">خبر بده</option>
                          <option value="yes">اجازه بده</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" value="80,000" />
                      </td>

                      <td>
                        <input type="text" value="68.000" />
                      </td>
                      <td>
                        <input type="number" value="15" />
                      </td>
                      <td>
                        <input type="hidden" value="16" />
                        <div>
                          <button type="submit" data-tippy-content="ذخیره">
                            <label>
                              {" "}
                              <img src={picture2}></img>{" "}
                            </label>
                          </button>






                          <button
                            onClick={() => setButtomPopup(true)}
                            type="submit"
                            data-tippy-content="ثبت خرید"
                          >
                            <Popup
                              trigger={buttonPopup}
                              setTrigger={setButtomPopup}
                            >
                              <h3></h3>
                            </Popup>

                            <label>
                              {" "}
                              <img src={picture}></img>{" "}
                            </label>
                          </button>







                          <button 
                           onClick={() =>{
                            setOpenModal(true);
                          }}
                          type="submit"data-tippy-content="ثبت فروش">
                          <div>{openModal && <Modal />}</div>
                           




                            <label>
                              <img src={picture1}></img>{" "}
                            </label>
                          </button>
                        </div>
                      </td>
                    </tr>



































                    <tr>
                      <td>
                        <img
                          width="48"
                          height="48"
                          src="https://store.itvandad.com/wp-content/uploads/2022/07/YxBjZsYGA3DMdJ1plBJ733JajHhsPGtg56hpJQxh.jpeg_512X512X70-324x324.jpeg"
                          // class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcset="https://store.itvandad.com/wp-content/uploads/2022/07/YxBjZsYGA3DMdJ1plBJ733JajHhsPGtg56hpJQxh.jpeg_512X512X70-324x324.jpeg 324w, https://store.itvandad.com/wp-content/uploads/2022/07/YxBjZsYGA3DMdJ1plBJ733JajHhsPGtg56hpJQxh.jpeg_512X512X70-300x300.jpeg 300w, https://store.itvandad.com/wp-content/uploads/2022/07/YxBjZsYGA3DMdJ1plBJ733JajHhsPGtg56hpJQxh.jpeg_512X512X70-150x150.jpeg 150w, https://store.itvandad.com/wp-content/uploads/2022/07/YxBjZsYGA3DMdJ1plBJ733JajHhsPGtg56hpJQxh.jpeg_512X512X70-416x416.jpeg 416w, https://store.itvandad.com/wp-content/uploads/2022/07/YxBjZsYGA3DMdJ1plBJ733JajHhsPGtg56hpJQxh.jpeg_512X512X70-100x100.jpeg 100w, https://store.itvandad.com/wp-content/uploads/2022/07/YxBjZsYGA3DMdJ1plBJ733JajHhsPGtg56hpJQxh.jpeg_512X512X70.jpeg 512w"
                          sizes="(max-width: 324px) 100vw, 324px"
                        />
                      </td>
                      <td>30</td>
                      <td>
                        <a href="https://store.itvandad.com/?product=%d8%b4%d8%b1%d8%a8%d8%aa-%d8%b2%d8%b9%d9%81%d8%b1%d8%a7%d9%86-%d9%85%d8%b5%d8%b7%d9%81%d9%88%db%8c">
                          شربت زعفران مصطفوی <small></small>
                        </a>
                      </td>
                      <td>
                        <input type="text" value="106" />
                      </td>
                      <td>
                        <select>
                          <option value="0">غیرفعال</option>
                          <option value="1" selected="selected">
                            فعال
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="no" selected="selected">
                            اجازه نده
                          </option>
                          <option value="notify">خبر بده</option>
                          <option value="yes">اجازه بده</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" value="1,293,000" />
                      </td>

                      <td>
                        <input type="text" value="1/058.000" />
                      </td>
                      <td>
                        <input type="number" value="9" />
                      </td>
                      <td>
                        <input type="hidden" value="16" />
                        <div>
                          <button
                            type="submit"
                            data-tippy-content="ذخیره"
                            value=""
                          >
                            <label>
                              {" "}
                              <img src={picture2}></img>{" "}
                            </label>
                          </button>











                          <button
                            onClick={() => setButtomPopup(true)}
                            type="submit"
                            data-tippy-content="ثبت خرید"
                          >
                            <Popup
                              trigger={buttonPopup}
                              setTrigger={setButtomPopup}
                            >
                              <h3></h3>
                            </Popup>

                            <label>
                              {" "}
                              <img src={picture}></img>{" "}
                            </label>
                          </button>









                          <button 
                           onClick={() =>{
                            setOpenModal(true);
                          }}
                          type="submit" data-tippy-content="ثبت فروش">
                          <div>{openModal && <Modal />}</div>






                           
                            <label>
                              {" "}
                              <img src={picture1}></img>{" "}
                            </label>
                          </button>
                        </div>
                      </td>
                    </tr>






































                    <tr>
                      <td>
                        <img
                          width="48"
                          height="48"
                          src="https://store.itvandad.com/wp-content/uploads/2022/07/3559544-324x324.jpg"
                          // class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcset="https://store.itvandad.com/wp-content/uploads/2022/07/3559544-324x324.jpg 324w, https://store.itvandad.com/wp-content/uploads/2022/07/3559544-300x300.jpg 300w, https://store.itvandad.com/wp-content/uploads/2022/07/3559544-150x150.jpg 150w, https://store.itvandad.com/wp-content/uploads/2022/07/3559544-768x768.jpg 768w, https://store.itvandad.com/wp-content/uploads/2022/07/3559544-416x416.jpg 416w, https://store.itvandad.com/wp-content/uploads/2022/07/3559544-100x100.jpg 100w, https://store.itvandad.com/wp-content/uploads/2022/07/3559544.jpg 800w"
                          sizes="(max-width: 324px) 100vw, 324px"
                        />
                      </td>
                      <td>32</td>
                      <td>
                        <a href="https://store.itvandad.com/?product=%d9%86%d9%88%d8%b4%d8%a7%d8%a8%d9%87-%d8%b3%d9%88%d9%86-%d8%a2%d9%be-%d8%b3%d9%88%d9%86-%d8%a2%d9%be">
                          نوشابه سون آپ سون آپ <small></small>
                        </a>
                      </td>
                      <td>
                        <input type="text" value="107" />
                      </td>
                      <td>
                        <select>
                          <option value="0">غیرفعال</option>
                          <option value="1" selected="selected">
                            فعال
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="no" selected="selected">
                            اجازه نده
                          </option>
                          <option value="notify">خبر بده</option>
                          <option value="yes">اجازه بده</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" value="14,800" />
                      </td>

                      <td>
                        <input type="text" value="" />
                      </td>
                      <td>
                        <input type="number" value="32" />
                      </td>

                      <td>
                        <input type="hidden" value="16" />
                        <div>
                          <button type="submit" data-tippy-content="ذخیره">
                            <label>
                              {" "}
                              <img src={picture2}></img>{" "}
                            </label>
                          </button>








                          <button
                            onClick={() => setButtomPopup(true)}
                            type="submit"
                            data-tippy-content="ثبت خرید"
                          >
                            <Popup
                              trigger={buttonPopup}
                              setTrigger={setButtomPopup}
                            >
                              <h3></h3>
                            </Popup>

                            <label>
                              {" "}
                              <img src={picture}></img>{" "}
                            </label>
                          </button>








                          <button  
                            onClick={() =>{
                              setOpenModal(true);
                            }}
                          type="submit"    data-tippy-content="ثبت فروش">
                         <div>{openModal && <Modal />}</div>





                            <label>
                              {" "}
                              <img src={picture1}></img>{" "}
                            </label>
                          </button>
                        </div>
                      </td>
                    </tr>














                    <tr>
                      <td>
                        <img
                          width="48"
                          height="48"
                          src="https://store.itvandad.com/wp-content/uploads/2022/07/5f524acd5d57008f6a3a56807deb5bf481135254_1605341497-1-324x324.jpg"
                          // class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcset="https://store.itvandad.com/wp-content/uploads/2022/07/5f524acd5d57008f6a3a56807deb5bf481135254_1605341497-1-324x324.jpg 324w, https://store.itvandad.com/wp-content/uploads/2022/07/5f524acd5d57008f6a3a56807deb5bf481135254_1605341497-1-300x300.jpg 300w, https://store.itvandad.com/wp-content/uploads/2022/07/5f524acd5d57008f6a3a56807deb5bf481135254_1605341497-1-1024x1024.jpg 1024w, https://store.itvandad.com/wp-content/uploads/2022/07/5f524acd5d57008f6a3a56807deb5bf481135254_1605341497-1-150x150.jpg 150w, https://store.itvandad.com/wp-content/uploads/2022/07/5f524acd5d57008f6a3a56807deb5bf481135254_1605341497-1-768x768.jpg 768w, https://store.itvandad.com/wp-content/uploads/2022/07/5f524acd5d57008f6a3a56807deb5bf481135254_1605341497-1-1536x1536.jpg 1536w, https://store.itvandad.com/wp-content/uploads/2022/07/5f524acd5d57008f6a3a56807deb5bf481135254_1605341497-1-1320x1320.jpg 1320w, https://store.itvandad.com/wp-content/uploads/2022/07/5f524acd5d57008f6a3a56807deb5bf481135254_1605341497-1-416x416.jpg 416w, https://store.itvandad.com/wp-content/uploads/2022/07/5f524acd5d57008f6a3a56807deb5bf481135254_1605341497-1-100x100.jpg 100w, https://store.itvandad.com/wp-content/uploads/2022/07/5f524acd5d57008f6a3a56807deb5bf481135254_1605341497-1.jpg 1600w"
                          sizes="(max-width: 324px) 100vw, 324px"
                        />
                      </td>
                      <td>34</td>
                      <td>
                        <a href="https://store.itvandad.com/?product=%d9%86%d9%88%d8%b4%d8%a7%d8%a8%d9%87-%d8%a7%d9%86%d8%b1%da%98%db%8c-%d8%b2%d8%a7-%d8%a7%d9%85-%d8%a7%d9%81-%d9%be%db%8c-%d9%87%d8%a7%db%8c%d9%be">
                          نوشابه انرژی زا ام اف پی هایپ <small></small>
                        </a>
                      </td>
                      <td>
                        <input type="text" value="108" />
                      </td>
                      <td>
                        <select>
                          <option value="0">غیرفعال</option>
                          <option value="1" selected="selected">
                            فعال
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="no" selected="selected">
                            اجازه نده
                          </option>
                          <option value="notify">خبر بده</option>
                          <option value="yes">اجازه بده</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" value="1,500,000" />
                      </td>

                      <td>
                        <input type="text" value="1.270.000" />
                      </td>
                      <td>
                        <input type="number" value="20" />
                      </td>
                      <td>
                        <input type="hidden" value="16" />
                        <div>
                          <button type="submit" data-tippy-content="ذخیره">
                            <label>
                              {" "}
                              <img src={picture2}></img>{" "}
                            </label>
                          </button>
                          <button
                            onClick={() => setButtomPopup(true)}
                            type="submit"
                            data-tippy-content="ثبت خرید"
                          >
                            <Popup
                              trigger={buttonPopup}
                              setTrigger={setButtomPopup}
                            >
                              <h3></h3>
                            </Popup>
                            <label>
                              {" "}
                              <img src={picture}></img>{" "}
                            </label>
                          </button>




                          <button  
                         onClick={() =>{
                          setOpenModal(true);
                        }}
                          
                          type="submit"  data-tippy-content="ثبت فروش">
                          <div>{openModal && <Modal />}</div>

                            <label>
                              {" "}
                              <img src={picture1}></img>{" "}
                            </label>
                          </button>
                        </div>
                      </td>
                    </tr>
































                    <tr>
                      <td>
                        <img
                          width="48"
                          height="48"
                          src="https://store.itvandad.com/wp-content/uploads/2022/07/cca9b58b3e701114342633481dfe5efc89053fcd_1639600710-324x324.jpg"
                          // class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcset="https://store.itvandad.com/wp-content/uploads/2022/07/cca9b58b3e701114342633481dfe5efc89053fcd_1639600710-324x324.jpg 324w, https://store.itvandad.com/wp-content/uploads/2022/07/cca9b58b3e701114342633481dfe5efc89053fcd_1639600710-300x300.jpg 300w, https://store.itvandad.com/wp-content/uploads/2022/07/cca9b58b3e701114342633481dfe5efc89053fcd_1639600710-150x150.jpg 150w, https://store.itvandad.com/wp-content/uploads/2022/07/cca9b58b3e701114342633481dfe5efc89053fcd_1639600710-768x768.jpg 768w, https://store.itvandad.com/wp-content/uploads/2022/07/cca9b58b3e701114342633481dfe5efc89053fcd_1639600710-416x416.jpg 416w, https://store.itvandad.com/wp-content/uploads/2022/07/cca9b58b3e701114342633481dfe5efc89053fcd_1639600710-100x100.jpg 100w, https://store.itvandad.com/wp-content/uploads/2022/07/cca9b58b3e701114342633481dfe5efc89053fcd_1639600710.jpg 800w"
                          sizes="(max-width: 324px) 100vw, 324px"
                        />
                      </td>
                      <td>36</td>
                      <td>
                        <a href="https://store.itvandad.com/?product=%d8%a2%d8%a8%d9%85%db%8c%d9%88%d9%87-%db%8c%d8%a7%d9%86%da%af-%d8%a8%d9%84%d9%88%d8%a8%d8%b1%db%8c-%d8%a7%d9%86%d8%a7%d8%b1-%d8%b3%d8%a7%d9%86-%d8%a7%d8%b3%d8%aa%d8%a7%d8%b1">
                          آبمیوه یانگ بلوبری انار سان استار <small></small>
                        </a>
                      </td>
                      <td>
                        <input type="text" value="109" />
                      </td>
                      <td>
                        <select>
                          <option value="0">غیرفعال</option>
                          <option value="1" selected="selected">
                            فعال
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="no" selected="selected">
                            اجازه نده
                          </option>
                          <option value="notify">خبر بده</option>
                          <option value="yes">اجازه بده</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" value="300,000" />
                      </td>

                      <td>
                        <input type="text" value="" />
                      </td>
                      <td>
                        <input type="number" value="6" />
                      </td>
                      <td>
                        <input type="hidden" value="16" />
                        <div>
                          <button type="submit" data-tippy-content="ذخیره">
                            <label>
                              {" "}
                              <img src={picture2}></img>{" "}
                            </label>
                          </button>






                          <button
                            onClick={() => setButtomPopup(true)}
                            type="submit"
                            data-tippy-content="ثبت خرید"
                          >
                            <Popup
                              trigger={buttonPopup}
                              setTrigger={setButtomPopup}
                            >
                              <h3></h3>
                            </Popup>
                            <label>
                              {" "}
                              <img src={picture}></img>
                            </label>
                          </button>







                          <button 
                           onClick={() =>{
                            setOpenModal(true);
                          }}
                          type="submit" data-tippy-content="ثبت فروش">
                          <div>{openModal && <Modal />}</div>


                            <label>
                              {" "}
                              <img src={picture1}></img>{" "}
                            </label>
                          </button>
                        </div>
                      </td>
                    </tr>

































                    <tr>
                      <td>
                        <img
                          width="48"
                          height="48"
                          src="https://store.itvandad.com/wp-content/uploads/2022/07/c092fc2798c48439b7554b3fbd641206ba8a7981_1622278523-324x324.jpg"
                          // class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt=""
                          loading="lazy"
                          srcset="https://store.itvandad.com/wp-content/uploads/2022/07/c092fc2798c48439b7554b3fbd641206ba8a7981_1622278523-324x324.jpg 324w, https://store.itvandad.com/wp-content/uploads/2022/07/c092fc2798c48439b7554b3fbd641206ba8a7981_1622278523-300x300.jpg 300w, https://store.itvandad.com/wp-content/uploads/2022/07/c092fc2798c48439b7554b3fbd641206ba8a7981_1622278523-150x150.jpg 150w, https://store.itvandad.com/wp-content/uploads/2022/07/c092fc2798c48439b7554b3fbd641206ba8a7981_1622278523-768x768.jpg 768w, https://store.itvandad.com/wp-content/uploads/2022/07/c092fc2798c48439b7554b3fbd641206ba8a7981_1622278523-416x416.jpg 416w, https://store.itvandad.com/wp-content/uploads/2022/07/c092fc2798c48439b7554b3fbd641206ba8a7981_1622278523-100x100.jpg 100w, https://store.itvandad.com/wp-content/uploads/2022/07/c092fc2798c48439b7554b3fbd641206ba8a7981_1622278523.jpg 1000w"
                          sizes="(max-width: 324px) 100vw, 324px"
                        />
                      </td>
                      <td>38</td>
                      <td>
                        <a href="https://store.itvandad.com/?product=%d9%86%d9%88%d8%b4%db%8c%d8%af%d9%86%db%8c-%d8%a7%d9%86%d8%b1%da%98%db%8c-%d8%b2%d8%a7-%d8%b1%d8%af%d8%a8%d9%88%d9%84">
                          نوشیدنی انرژی زا ردبول <small></small>
                        </a>
                      </td>
                      <td>
                        <input value="110" />
                      </td>
                      <td>
                        <select>
                          <option value="0">غیرفعال</option>
                          <option value="1" selected="selected">
                            فعال
                          </option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="no" selected="selected">
                            اجازه نده
                          </option>
                          <option value="notify">خبر بده</option>
                          <option value="yes">اجازه بده</option>
                        </select>
                      </td>
                      <td>
                        <input value="597,000" />
                      </td>

                      <td>
                        <input value="" />
                      </td>
                      <td>
                        <input value="11" />
                      </td>
                      <td>
                        <input type="hidden" name="product_id" value="16" />
                        <div>
                          <button type="submit" data-tippy-content="ذخیره">
                            <label>
                              <img src={picture2}></img>{" "}
                            </label>
                          </button>





                          <button
                            onClick={() => setButtomPopup(true)}
                            type="submit"
                            data-tippy-content="ثبت خرید"
                          >
                            <Popup
                              trigger={buttonPopup}
                              setTrigger={setButtomPopup}
                            >
                              <h3></h3>
                            </Popup>
                            <label>
                              {" "}
                              <img src={picture}></img>{" "}
                            </label>
                          </button>




                          <button 
                           onClick={() =>{
                            setOpenModal(true);
                          }}
                          type="submit" data-tippy-content="ثبت فروش">
                         <div>{openModal && <Modal />}</div>




                            <label>
                              {" "}
                              <img src={picture1}></img>{" "}
                            </label>
                          </button>
                        </div>
                      </td>
                    </tr>

























                  </tbody>
                </table>

                <div className={styles.footer}>
                  <div className={styles.popup}>
                    <label> تعداد در صفحه</label>
                    <select>
                      <option selected="selected" value="5">
                        5
                      </option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="500">500</option>
                    </select>
                  </div>

                  <div className={styles.page}>
                    <div className={styles.one}>
                      <span>1</span>
                    </div>

                    <a
                      className={styles.two}
                      href="https://store.itvandad.com/wp-admin/admin.php?page=mdsm&amp;paged=2&amp;t=p-name&amp;q&amp;action=product_search&amp;ipp=5"
                    >
                      2
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Table2;
