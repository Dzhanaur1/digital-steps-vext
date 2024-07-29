import Link from "next/link";
import React from "react";
import ContactPageForm from "../(components)/ContactPageForm";

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

                  <div className="tab-content mt-30 mt-lg-40">
                    <div
                      className="tab-pane fade show active"
                      id="video-generator-1"
                      tabIndex={1}
                    >
                      <ContactPageForm />
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
                              <h4 className="text-4 text-bold">
                                {" "}
                                <Link href="#">Вконтакте</Link>
                              </h4>
                              <p className="text-para-1">
                                <Link href="#">
                                  Подпишитесь на группу в ВК что бы быть в курсе
                                  всех новостей!
                                </Link>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="info-icon">
                              <i className="my-icon icon-envelope" />
                            </div>
                            <div className="info-text">
                              <h4 className="text-4 text-bold">
                                <Link href="mailto:digitalsteps.courses@yandex.ru">
                                  {" "}
                                  Почта
                                </Link>
                              </h4>
                              <p className="text-para-1">
                                <Link href="mailto:digitalsteps.courses@yandex.ru">
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
                              <h4 className="text-4 text-bold">
                                <Link href="tel:+79183923328">Телефон</Link>
                              </h4>
                              <p className="text-para-1">
                                <Link href="tel:+79183923328">
                                  +7 (918) 392-33-28
                                </Link>
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
