import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <main>
        {/* Breadcum Start */}
        <section className="breadcum v2 pt-125 pb-50 pt-sm-145 pt-md-180 pb-md-100 pt-xl-275 pb-xl-170">
          <img
            className="bg-shap bg-cover-center"
            src="/assets/img/breadcum/v1/bg-shap.png"
          />
          <div className="container">
            <div className="breadcum-list">
              <h2 className="text-2 text-capital text-bold text-upper">
                Контакты
              </h2>
              <ul>
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Breadcum End */}
        {/* Contact Start */}
        <section className="contact v1 pt-50 pb-50 pt-md-70 pb-md-70 pt-xl-100 pb-xl-100 pt-xxl-120 pb-xxl-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="contact-box">
                  <div className="section-title">
                    <h2 className="text-2  text-bold">Форма записи на курсы</h2>
                  </div>

                  {/* <ul className="all-btns mt-30 mt-lg-50" role="tablist">
                    <li>
                      
                    </li>
                   
                  </ul> */}
                  <div className="tab-content mt-30 mt-lg-40">
                    <div
                      className="tab-pane fade show active"
                      id="video-generator-1"
                      tabIndex={1}
                    >
                      <form action="#" className="main-form message-form">
                        <div className="group-form-box">
                          <div className="form-box">
                            <label
                              className="text-para-1 text-para-xl-1 text-reguler"
                              htmlFor="firstname-1"
                            >
                              Имя*
                            </label>
                            <input
                              name="firstname"
                              id="firstname-1"
                              type="text"
                              placeholder="Ваше Имя"
                              required
                            />
                          </div>
                          <div className="form-box">
                            <label
                              className="text-para-1 text-para-xl-1 text-reguler"
                              htmlFor="number-2"
                            >
                              Телефон*
                            </label>
                            <input
                              name="tel"
                              id="number-2"
                              type="tel"
                              placeholder="Ваш номер телефона"
                              required
                            />
                          </div>
                        </div>
                        <div className="group-form-box">
                          {/* <div className="form-box">
                            <label
                              className="text-para-1 text-para-xl-1 text-reguler"
                              htmlFor="lastname-2"
                            >
                              Your Last Name*
                            </label>
                            <input
                              name="lastname"
                              id="lastname-2"
                              type="text"
                              placeholder="Last Name"
                              required
                            />
                          </div> */}
                          <div className="form-box">
                            <label
                              className="text-para-1 text-para-xl-1 text-reguler"
                              htmlFor="username-1"
                            >
                              Почта
                            </label>
                            <input
                              name="username"
                              id="username-1"
                              type="text"
                              placeholder="Необязательно"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-box">
                          <label
                            className="text-para-1 text-para-xl-1 text-reguler"
                            htmlFor="message-3"
                          >
                            Ваше сообщение
                          </label>
                          <textarea
                            name="message"
                            id="message-3"
                            placeholder="Необязательно"
                            defaultValue={""}
                          />
                        </div>
                        <p className="text-para-1 text-bold mt-30 mb-30 response" />
                        <button
                          className="btn-anime v2 text-capital round-border-full mt-30 mt-lg-35"
                          type="submit"
                        >
                          Записаться
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="sidebar__wrapper">
                  <div
                    className="sidebar__widget wow animate__fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-offset={20}
                    data-wow-duration="0.8s"
                  >
                    <div className="sidebar__widget-content">
                      <div className="contact-info-widget">
                        <ul className="contact-info-list">
                          <li>
                            <div className="info-icon ">
                              <i className="my-icon fa-brands fa-vk"></i>
                            </div>
                            <div className="info-text">
                              <h4 className="text-4 text-bold">Вконтакте</h4>
                              <p className="text-para-1">
                                Подпишитесь на группу в ВК что бы быть в курсе
                                всех новостей!
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="info-icon">
                              <i className="my-icon icon-envelope" />
                            </div>
                            <div className="info-text">
                              <h4 className="text-4 text-bold">Почта</h4>
                              <p className="text-para-1">
                                <Link href="#">
                                  digitalsteps.courses@yandex.ru
                                </Link>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="info-icon">
                              <i className="my-icon icon-phone" />
                            </div>
                            <div className="info-text">
                              <h4 className="text-4 text-bold">Телефон</h4>
                              <p className="text-para-1">
                                <Link href="#">+7 (918) 392-33-28</Link>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section End */}
      </main>
    </div>
  );
};

export default page;
