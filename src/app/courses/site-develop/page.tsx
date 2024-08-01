import Accordion from "@/app/(components)/Accordion";
import OpenPopupButton from "@/app/(components)/Button";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Digital Steps || Разработка веб-сайтов",
  description:
    "Изучите разработку веб-сайтов с нуля на наших курсах. Учитесь HTML, CSS и JavaScript с нуля до продвинутого уровня.",
  keywords: "разработка веб-сайтов, курсы веб-разработки, курсы HTML CSS JS",
  authors: { name: "Digital Steps" },
  openGraph: {
    title: "Digital Steps | Разработка веб-сайтов",
    description:
      "Изучите разработку веб-сайтов с нуля на наших курсах. Учитесь HTML, CSS и JavaScript с нуля до продвинутого уровня.",
    images: [
      {
        url: "https://digitalsteps.tech/assets/img/service-collaboration/v1/html.svg",
        width: 800,
        height: 600,
        alt: "Digital Steps | Разработка веб-сайтов",
      },
    ],
  },
};

const pageData = [
  {
    title: "Модуль 1. Разработка веб-сайтов | Знакомство с HTML и CSS",
    items: [
      "Основы HTML.",
      "Теги и атрибуты.",
      "Формы и таблицы.",
      "Введение в CSS.",
      "Макет и позиционирование.",
      "Flexbox.",
      "Адаптивный дизайн",
    ],
  },
  {
    title: "Модуль 2. Разработка веб-сайтов | Знакомство с JS",
    items: [
      "Основы JavaScript.",
      "Управляющие конструкции.",
      "Основы DOM.",
      "Обработчики событий.",
      "Функции.",
    ],
  },
  {
    title: "Модуль 3. Разработка веб-сайтов | Практическое задание",
    items: [
      "Анализ макета.",
      "Создание структуры HTML.",
      "Стилизация с помощью CSS.",
      "Разработка адаптивного дизайна.",
      "Интерактивность с помощью JavaScript.",
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
              Разработка веб-сайтов
            </h2>
            <ul>
              <li>
                <Link href="/">Главная</Link>
              </li>
              <li>
                <Link href="/courses">Курсы</Link>
              </li>
              <li>Разработка веб-сайтов</li>
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
                    src="/assets/img/courses/develop/intro-v2.webp"
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
                    Курс Разработка веб-сайтов для <br />
                    детей 8-14 лет.
                  </h2>
                </div>
                <p className="text-para-1 mt-30">
                  Курс "Разработка веб-сайтов" поможет детям освоить основы
                  HTML, CSS и JavaScript. Они научатся создавать и стилизовать
                  веб-страницы, добавлять интерактивные элементы, работать с
                  макетами, а также применять адаптивный дизайн для различных
                  устройств. Практические занятия и выполнение реального проекта
                  развивают креативное мышление и технические навыки. В
                  результате дети смогут создавать функциональные и
                  привлекательные веб-сайты и применять свои знания в реальных
                  проектах.
                </p>
                <div className="section-title mb-20 mt-20">
                  <h2 className="text-2 text-semibold">
                    Из чего соссоит курс?
                  </h2>
                  <section className="faq-section v1">
                    <div className="container">
                      <div className="row">
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
                          <p className="text-para-1">Основные теги HTML.</p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Создание структуры страницы.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">Работа с изображениями.</p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">HTML Формы.</p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Основные понятия CSS. Цвета и шрифты.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            CSS-классы и идентификаторы.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Верстка с Flexbox и Grid.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Адаптивный дизайн и медиа-запросы.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Основы синтаксиса JavaScript.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Переменные и типы данных.Условия и циклы.Переменные
                            и типы данных.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Функции.Обработка событий.
                          </p>
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
                    <OpenPopupButton courseId="site-develop" />
                  </div>
                  {/* <p class="text-3 mt-20 text-left">
                      <b class="text-bold">Цена:</b> от 550 руб за 1 занятие
                    </p> */}
                  {/* <a href="#" class="prev-post"
                      ><i class="my-icon icon-arrow-left"></i>
                      <span class="text-5">Previous</span> </a
                    ><a href="#" class="next-post"
                      ><span class="text-5">Next</span>
                      <i class="my-icon icon-arrow-right"></i
                    ></a> */}
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
                              Интенсивный курс: 20-25 часов увлекательного
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
