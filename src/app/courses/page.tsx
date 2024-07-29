import Link from "next/link";
import React from "react";

const CoursesPage = () => {
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
              Наши курсы
            </h2>
            <ul>
              <li>
                <Link href="/">Главная</Link>
              </li>
              <li>Курсы</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services v2 pb-50 pb-md-70 pb-xl-100 pb-xxl-120 pt-50 pt-md-70 pt-xl-100 pt-xxl-120">
        <div className="container">
          <div className="row justify-content-center mt-space">
            <div
              className="col-md-6 col-xl-4 wow animate__fadeInUp"
              data-wow-delay="0.1s"
              data-wow-offset={20}
              data-wow-duration="0.8s"
            >
              <div className="services-card">
                <div className="card-logo">
                  <img
                    src="/assets/img/service-collaboration/v1/windows.svg"
                    alt="logo"
                  />
                </div>
                <h4 className="text-4 text-bold">
                  <Link href="/courses/komputernaya-gramotnost">
                    Компьютерная <br /> грамотность
                  </Link>
                </h4>
                <p className="text-para-1">
                  Дети познакомятся с основными компонентами компьютера и
                  научатся работать...
                </p>
                <Link
                  href="/courses/komputernaya-gramotnost"
                  className="link-anime v7 round-border-full text-capital"
                >
                  Подробнее <i className="my-icon icon-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow animate__fadeInUp"
              data-wow-delay="0.3s"
              data-wow-offset={20}
              data-wow-duration="0.8s"
            >
              <div className="services-card">
                <div className="card-logo">
                  <img
                    src="/assets/img/service-collaboration/v1/html.svg"
                    alt="logo"
                  />
                </div>
                <h4 className="text-4 text-bold">
                  <Link href="/courses/site-develop">
                    Разработка <br />
                    Веб-сайтов
                  </Link>
                </h4>
                <p className="text-para-1">
                  Основы HTML и CSS.Верстка простых веб-страниц по
                  макету.Создание и оформление контента
                </p>
                <Link
                  href="/courses/site-develop"
                  className="link-anime v7 round-border-full text-capital"
                >
                  Подробнее <i className="my-icon icon-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow animate__fadeInUp"
              data-wow-delay="0.5s"
              data-wow-offset={20}
              data-wow-duration="0.8s"
            >
              <div className="services-card">
                <div className="card-logo">
                  <img
                    src="/assets/img/service-collaboration/v1/logo-7.svg"
                    alt="logo"
                  />
                </div>
                <h4 className="text-4 text-bold">
                  <Link href="/courses/web-design">
                    Разработка <br /> дизайна{" "}
                  </Link>
                </h4>
                <p className="text-para-1">
                  Основы графического дизайна.Работа с цветами и
                  шрифтами.Создание макетов веб-страниц в Figma
                </p>
                <Link
                  href="/courses/web-design"
                  className="link-anime v7 round-border-full text-capital"
                >
                  Подробнее <i className="my-icon icon-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow animate__fadeInUp"
              data-wow-delay="0.1s"
              data-wow-offset={20}
              data-wow-duration="0.8s"
            >
              <div className="services-card">
                <div className="card-logo">
                  <img
                    src="/assets/img/service-collaboration/v1/c++.svg"
                    alt="logo"
                  />
                </div>
                <h4 className="text-4 text-bold">
                  <Link href="/courses/osnovy-algoritmizatsii">
                    Основы <br /> алгоритмизации{" "}
                  </Link>
                </h4>
                <p className="text-para-1">
                  Построение простых алгоритмов: создание простых программ.
                  Программирование на начальном уровне.
                </p>
                <Link
                  href="/courses/osnovy-algoritmizatsii"
                  className="link-anime v7 round-border-full text-capital"
                >
                  Подробнее <i className="my-icon icon-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow animate__fadeInUp"
              data-wow-delay="0.3s"
              data-wow-offset={20}
              data-wow-duration="0.8s"
            >
              <div className="services-card">
                <div className="card-logo">
                  <img
                    src="assets/img/service-collaboration/v1/math.svg"
                    alt="logo"
                  />
                </div>
                <h4 className="text-4 text-bold">
                  <Link href="/courses/service-details">
                    Математика. Алгебра. Геометрия
                  </Link>
                </h4>
                <p className="text-para-1">
                  Ребенок освоит ключевые математические концепции, научится
                  решать задачи алгебры и геометрии и др.
                </p>
                <Link
                  href="/courses/service-details"
                  className="link-anime v7 round-border-full text-capital"
                >
                  Подробнее <i className="my-icon icon-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow animate__fadeInUp"
              data-wow-delay="0.5s"
              data-wow-offset={20}
              data-wow-duration="0.8s"
            ></div>
          </div>
        </div>
      </section>
      {/* Services End */}
    </main>
  );
};

export default CoursesPage;
