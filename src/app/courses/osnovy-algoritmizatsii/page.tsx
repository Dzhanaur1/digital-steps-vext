import Accordion from "@/app/(components)/Accordion";
import OpenPopupButton from "@/app/(components)/Button";
import Link from "next/link";
import React from "react";

const pageData = [
  {
    title: "Модуль 1. Основы алгоритмизации | Введение в алгоритмизацию",
    items: [
      "Знакомство с алгоритмами.",
      "Основные конструкции алгоритмов.",
      "Знакомство со средой разработки.",
      "Создание блок-схем.",
    ],
  },
  {
    title: "Модуль 2. Основы алгоритмизации | Основы алгоритмизации",
    items: [
      "Условные операторы.",
      "Циклы.",
      "Переменные.",
      "Проектирование простых алгоритмов.",
      "Работа с массивами и коллекциями.",
    ],
  },
  {
    title: "Модуль 3. Основы алгоритмизации | Практическое задание",
    items: [
      "Понятие задачи в контексте алгоритмизации.",
      "Создание блок-схем по заданию.",
      "Написание программы.",
      "Тестирование и отладка.",
      "Анализ и оптимизация алгоритма.",
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
              Основы алгоритмизации
            </h2>
            <ul>
              <li>
                <Link href="/">Главная</Link>
              </li>
              <li>
                <Link href="/courses">Курсы</Link>
              </li>
              <li>Основы алгоритмизации</li>
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
                    src="/assets/img/courses/algoritm/intro-v3.webp"
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
                    Курс Основы алгоритмизации для <br />
                    детей 8-14 лет.
                  </h2>
                </div>
                <p className="text-para-1 mt-30">
                  Курс "Основы алгоритмизации" поможет детям освоить основы
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
                    Из чего сосстоит курс?
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
                    <div className="box-right">
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
                          <p className="text-para-1">
                            Разбираться в основных концепциях алгоритмизации и
                            их применении.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Разрабатывать алгоритмы для решения различных задач.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Создавать блок-схемы для визуализации алгоритмов.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Работать с условными операторами.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">Использовать циклы.</p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Создавать и использовать функции.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">Работать с массивами.</p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Разрабатывать и отлаживать программы.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Оценивать эффективность алгоритмов и выбирать
                            наиболее подходящие для конкретных задач.
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
                    <OpenPopupButton courseId="algorithm" />
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
