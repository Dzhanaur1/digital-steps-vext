import Accordion from "@/app/(components)/Accordion";
import OpenPopupButton from "@/app/(components)/Button";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Digital Steps || Веб-дизайн",
  description:
    "Изучите веб-дизайн на наших курсах. Освойте Figma и научитесь создавать профессиональные дизайны для веб-сайтов.",
  keywords: "веб-дизайн, курсы веб-дизайна, курсы Figma",
  authors: { name: "Digital Steps" },
  openGraph: {
    title: "Digital Steps | Веб-дизайн",
    description:
      "Изучите веб-дизайн на наших курсах. Освойте Figma и научитесь создавать профессиональные дизайны для веб-сайтов.",
    images: [
      {
        url: "https://digitalsteps.tech/assets/img/service-collaboration/v1/logo-7.svg",
        width: 800,
        height: 600,
        alt: "Digital Steps | Веб-дизайн",
      },
    ],
  },
};

const pageData = [
  {
    title: "Модуль 1. Веб-дизайн | Знакомство с Figma",
    items: [
      "Теория цвета. Цветовая палитра.",
      "Типографика в веб-дизайне.",
      "Компановка. Принципы компановки.",
      "Введение в Figma.",
      "Основные принципы организации проектов и макетов в Figma.",
      "Работа с фигурами и элементами в Figma.",
      "Работа с текстом и изображением в Figma.",
    ],
  },
  {
    title: "Модуль 2. Веб-дизайн | Знакомство с прототипами",
    items: [
      "Введение в прототипирование и его цели в веб-дизайне.",
      "Создание первого прототипа.",
      "Интерактивные элементы.",
      "Анализ готовых сайтов. Редизайн.",
      "Плагины в Figma.",
    ],
  },
  {
    title: "Модуль 3. Веб-дизайн | Практическое задание",
    items: [
      "Создание эскиза сайта.",
      "Создание Вайрфрейма.",
      "Создание UI дизайна.",
      "Представление проекта.",
    ],
  },
];

const page = () => {
  return (
    <main>
      {/* Breadcum Start */}
      <section className="breadcum v1 pt-125 pb-50 pt-sm-145 pt-md-180 pb-md-100 pt-xl-275 pb-xl-170">
        <img
          className="bg-shap bg-cover-center"
          src="/assets/img/breadcum/v1/bg-shap.png"
        />
        <div className="container">
          <div className="breadcum-list">
            <h2 className="text-2 text-capital text-bold text-upper">
              Веб-дизайн
            </h2>
            <ul>
              <li>
                <Link href="/">Главная</Link>
              </li>
              <li>
                <Link href="/courses">Курсы</Link>
              </li>
              <li>Веб-дизайн</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Breadcum End */}
      {/* Services Details Start */}
      <section className="services-details v1 pt-50 pb-50 pt-md-70 pb-md-70 pt-xl-100 pb-xl-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="courses-content">
                <div className="big-img">
                  <img
                    src="/assets/img/courses/design/inro-v2.webp"
                    alt="courses"
                  />
                  <div
                    style={{ backgroundColor: "transparent", borderRadius: 0 }}
                    className="icon-box"
                  >
                    {/* <img
                        src="assets/img/service-collaboration/v1/windows.svg"
                        alt=""
                        style="border-radius: 0"
                      /> */}
                  </div>
                </div>
                <div className="section-title mt-20">
                  <h2 className="text-2 text-semibold">
                    Курс веб-дизайна для <br />
                    детей 8-14 лет.
                  </h2>
                </div>
                <p className="text-para-1 mt-30">
                  Курс "Веб-дизайн" - это практическое погружение в мир создания
                  веб-интерфейсов с использованием Figma. В увлекательной и
                  доступной форме дети познакомятся с основами дизайна,
                  цветовыми схемами, шрифтами и макетами. Благодаря практическим
                  занятиям и четкой структуре обучения, каждый ребенок сможет
                  создать свой собственный веб-дизайн.
                </p>
                <div className="section-title mb-20 mt-20">
                  <h2 className="text-2 text-semibold">
                    Из чего состоит курс?
                  </h2>
                  <section className="faq-section v1">
                    <div className="container">
                      <div className="row">
                        {/* <ul className="accordion-main mt-40" id="faqAccordion">
                          <li>
                            <button
                              className="accordion-btn collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordion-item-1"
                            >
                              Модуль 1. Веб-дизайн | Знакомство с Figma
                            </button>
                            <div
                              id="faqAccordion-item-1"
                              className="collapse"
                              data-bs-parent="#faqAccordion"
                            >
                              <div className="box-content">
                                <div className="ai-development v1">
                                  <div className="categories">
                                    <ul className="categories-list">
                                      <li
                                        data-wow-delay="0.1s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">01</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Теория цвета. Цветовая палитра.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.3s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">02</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Типографика в веб-дизайне.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.5s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">03</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Компановка. Принципы компановки.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.5s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">04</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Введение в Figma.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.5s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">05</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Основные принципы организации
                                            проектов и макетов в Figma.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.5s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">06</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Работа с фигурами и элементами в
                                            Figma.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.5s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">07</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Работа с текстом и изображением в
                                            Figma.
                                          </h5>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <button
                              className="accordion-btn collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordion-item-2"
                            >
                              Модуль 2. Веб-дизайн | Знакомство с прототипами
                            </button>
                            <div
                              id="faqAccordion-item-2"
                              className="collapse"
                              data-bs-parent="#faqAccordion"
                            >
                              <div className="box-content">
                                <div className="ai-development v1">
                                  <div className="categories">
                                    <ul className="categories-list">
                                      <li
                                        data-wow-delay="0.1s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">01</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Введение в прототипирование и его
                                            цели в веб-дизайне.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.3s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">02</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Создание первого прототипа.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.5s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">03</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Интерактивные элементы.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.5s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">04</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Анализ готовых сайтов. Редизайн.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.5s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">05</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Плагины в Figma.
                                          </h5>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <button
                              className="accordion-btn collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordion-item-3"
                            >
                              Модуль 3. Веб-дизайн | Практическое задание
                            </button>
                            <div
                              id="faqAccordion-item-3"
                              className="collapse"
                              data-bs-parent="#faqAccordion"
                            >
                              <div className="box-content">
                                <div className="ai-development v1">
                                  <div className="categories">
                                    <ul className="categories-list">
                                      <li
                                        data-wow-delay="0.1s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">01</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Создание эскиза сайта.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.3s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">02</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Создание Вайрфрейма.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.5s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">03</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Создание UI дизайна.
                                          </h5>
                                        </div>
                                      </li>
                                      <li
                                        data-wow-delay="0.5s"
                                        data-wow-offset={20}
                                        data-wow-duration="0.8s"
                                      >
                                        <span className="list-number">04</span>
                                        <div className="content">
                                          <h5 className="text-6 text-bold">
                                            Представление проекта.
                                          </h5>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul> */}
                        <Accordion data={pageData} />
                      </div>
                    </div>
                  </section>
                </div>

                <div className="section-title">
                  <h2 className="text-2 text-semibold mt-20">
                    Чему научится ребенок?
                  </h2>
                  <div className="check-out-box mt-30">
                    <div
                      className="box-right wow animate__fadeInUp"
                      data-wow-delay="0.1s"
                      data-wow-offset={20}
                      data-wow-duration="0.8s"
                    >
                      <img
                        style={{ maxHeight: "450px" }}
                        src="/assets/img/courses/kg/target.webp"
                        alt="ai-img"
                      />
                    </div>
                    <div className="box-left">
                      <ul className="check-mark-list">
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">Основам веб-дизайна.</p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">Работе в Figma.</p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">Созданию макетов.</p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">Адаптивному дизайну.</p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">Прототипированию.</p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">Презентации проектов.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-flex  align-items-center justify-content-between mt-50">
                  <div className="price-card-header">
                    <h2
                      style={{ fontSize: "22px" }}
                      className=" text-2 text-bold"
                    >
                      600₽{" "}
                      <span className="text-para-1 text-reguler">
                        /занятие.
                      </span>
                    </h2>
                  </div>
                  <div>
                    <OpenPopupButton courseId="web-design" />
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
                    <div className="brand-promo-widget">
                      <ul className="brand-promo-list">
                        <li>
                          <div className="brand-logo">
                            <img
                              src="/assets/img/courses/icons/individual.svg"
                              alt="brand-logo-1"
                            />
                          </div>
                          <div className="brand-text">
                            <h4 className="text-4 text-bold">
                              Индивидуальные занятия
                            </h4>
                            <p className="text-para-1">
                              Персональный подход к каждому ученику
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="brand-logo">
                            <img
                              src="/assets/img/courses/icons/calendar.svg"
                              alt="brand-logo-2"
                            />
                          </div>
                          <div className="brand-text">
                            <h4 className="text-4 text-bold">Гибкий график</h4>
                            <p className="text-para-1">
                              Учитесь, когда удобно: подберем удобное время для
                              занятий
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="brand-logo">
                            <img
                              src="/assets/img/courses/icons/clock.svg"
                              alt="brand-logo-3"
                            />
                          </div>
                          <div className="brand-text">
                            <h4 className="text-4 text-bold">Объем курса</h4>
                            <p className="text-para-1">
                              Интенсивный курс: 25-30 часов увлекательного
                              обучения
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
      {/* Services Details End */}
    </main>
  );
};

export default page;
