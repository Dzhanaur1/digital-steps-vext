import Accordion from "@/app/(components)/Accordion";
import OpenPopupButton from "@/app/(components)/Button";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const pageData = [
  {
    title: "Модуль 1. Основы работы с компьютером",
    items: [
      "Знакомство с компьютером",
      "Основные компоненты компьютера",
      "Знакомство с клавиатурой и мышью",
      "Знакомство с операционной системой",
    ],
  },
  {
    title: "Модуль 2. Основы работы с прикладными программами",
    items: [
      "Введение в текстовые редакторы. Google Docs",
      "Форматирование текста в текстовых редакторах",
      "Введение в электронные таблицы. Google Sheets",
      "Основные функции и формулы в электронных таблицах",
      "Введение в создание презентаций. Google Slides",
    ],
  },
  {
    title: "Модуль 3. Практическое задание",
    items: [
      "Поиск информации в интернете",
      "Создание презентации",
      "Создание доклада",
      "Представление проекта",
    ],
  },
];

export const metadata: Metadata = {
  title: "Digital Steps || Основы работы с компьютером",
  description:
    "Изучите основы работы с компьютером на наших курсах. Помогаем детям развивать навыки работы с компьютером и программами.",
  keywords:
    "основы работы с компьютером, компьютерная грамотность для детей, курсы компьютерной грамотности",
  authors: { name: "Digital Steps" },
  openGraph: {
    title: "Digital Steps | Основы работы с компьютером",
    description:
      "Изучите основы работы с компьютером на наших курсах. Помогаем детям развивать навыки работы с компьютером и программами.",
    images: [
      {
        url: "https://digitalsteps.tech/assets/img/service-collaboration/v1/windows.svg",
        width: 800,
        height: 600,
        alt: "Digital Steps | Основы работы с компьютером",
      },
    ],
  },
};

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
              Компьютерная грамотность
            </h2>
            <ul>
              <li>
                <Link href="/">Главная</Link>
              </li>
              <li>
                <Link href="/courses">Курсы</Link>
              </li>
              <li className="">Компьютерная грамотность</li>
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
                  <img src="/assets/img/courses/kg/intro.jpg" alt="courses" />
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
                    Курс компьютерной грамотности для <br />
                    детей 7-10 лет.
                  </h2>
                </div>
                <p className="text-para-1 mt-30">
                  Курс "Компьютерная грамотность" для детей 7-10 лет
                  представляет собой увлекательное путешествие в мир
                  информационных технологий. Дети познакомятся с основными
                  компонентами компьютера и научатся работать с популярными
                  прикладными программами. Практическое задание в конце курса
                  позволит им применить полученные знания на практике, создавая
                  свои собственные проекты. В результате обучения дети
                  приобретут важные навыки, которые помогут им в учебе и
                  повседневной жизни, а также подготовят их к дальнейшему
                  изучению IT-технологий.
                </p>
                <div className="section-title mb-20 mt-20">
                  <h2 className="text-2 text-semibold">
                    Из чего состоит курс?
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
                  <h2 className="text-2 text-semibold mt-60">
                    Чему научится ребенок?
                  </h2>
                  <div className="check-out-box mt-40">
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
                            Понимать устройство и основные компоненты
                            компьютера.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Писать доклады в Google Docs
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Работать с электронными таблицами Google Sheets
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Создавать презентации с помощью Google Slides
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Искать информацию в интернете и критически оценивать
                            ее достоверность.
                          </p>
                        </li>
                        <li>
                          <i className="my-icon icon-check" />
                          <p className="text-para-1">
                            Создавать и представлять собственные проекты,
                            используя полученные знания и навыки.
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
                    <OpenPopupButton courseId="pcg" />
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
                              Интенсивный курс: 15-20 часов увлекательного
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
