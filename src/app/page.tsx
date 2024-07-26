// "use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MainPageForm from "./(components)/MainPageForm";

export const metadata: Metadata = {
  title: "Digital Steps || Курсы IT для детей",
  description:
    "Онлайн школа IT для детей. Курсы по компьютерной грамотности, созданию сайтов и веб-дизайну. Помогаем детям развивать навыки работы с компьютером и программами.",
  keywords:
    "программирование для детей, курсы программирования для детей онлайн, школа программирования для детей, онлайн курсы программирования для школьников, программирование для детей онлайн обучение, компьютерная грамотность для детей, курсы компьютерной грамотности",
  authors: { name: "Digital Steps" },

  openGraph: {
    title: "Digital Steps | Курсы IT для детей",
    description:
      "Онлайн школа IT для детей. Курсы по компьютерной грамотности, созданию сайтов и веб-дизайну. Помогаем детям развивать навыки работы с компьютером и программами.",
  },
};

export default function Home() {
  return (
    <main>
      <section className="banner v1 pt-140 pb-50 pb-lg-70 pb-xl-100 pt-xl-240 pb-xxl-120">
        <div className="container">
          <div className="main-banner-content">
            <div className="row">
              <div className="col-xl-6 order-xl-1">
                <div className="banner-right">
                  <div className="banner-profile-img">
                    <img
                      src="/assets/img/banner/v1/profile-img.png"
                      alt="profile-img"
                    />
                  </div>
                  <div className="shap-dot-1"></div>
                  <div className="shap-dot-2"></div>
                  <div className="shap-dot-3"></div>
                  <img
                    className="arrow-shap"
                    src="assets/img/banner/v1/shap-1.svg"
                    alt="shap"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="banner-left pt-xl-30 pb-xl-30">
                  <div className="anime-bubble"></div>
                  <div className="section-title">
                    <h6 className="text-6 text-upper">Digital Steps</h6>
                    <h2 className="text-2 text-bold mt-20">
                      Курсы программирования для детей
                    </h2>
                  </div>
                  <MainPageForm />
                  <div className="section-title">
                    <h5 className="text-6 mt-20 text-left">
                      <b className="text-bold">Цена:</b> от 550 руб за 1 занятие
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services v1 pb-50 pb-md-70 pb-xl-100 pb-xxl-120">
        <div className="container">
          <div className="section-title-center v1">
            <h2
              className="text-2 text-bold wow animate__fadeInUp"
              data-wow-delay="0.1s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              Отвлечём ребенка от игр и научим программировать
            </h2>
          </div>
          <div className="row justify-content-center mt-space mt-50 mt-xl-60">
            <div
              className="col-md-6 col-xl-4 wow animate__fadeInUp"
              data-wow-delay="0.1s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              <div className="services-card">
                <div className="card-icon">
                  <i className="my-icon icon-artificial-intelligence"></i>
                </div>
                <h4 className="text-4 text-bold">
                  <Link href="courses/site-develop">Создание сайтов</Link>
                </h4>
                <p className="text-para-1">
                  Научим создавать свои собственные веб-страницы. Основы HTML,
                  CSS и JS. В конце курса каждый ребенок создаст свой первый
                  сайт!
                </p>
                <Link
                  href="courses/site-develop"
                  className="link-anime v6 round-border-full text-capital"
                >
                  Подробнее <i className="my-icon icon-arrow-right-long"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow animate__fadeInUp"
              data-wow-delay="0.3s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              <div className="services-card">
                <div className="card-icon">
                  <i className="my-icon icon-bulb"></i>
                </div>
                <h4 className="text-4 text-bold">
                  <Link href="courses/web-design">Веб-дизайн</Link>
                </h4>
                <p className="text-para-1">
                  Создание макета сайта в Figma, визуальное оформление, работа с
                  изображениями, шрифтами и другими элементами веб-страницы
                </p>
                <Link
                  href="courses/web-design"
                  className="link-anime v6 round-border-full text-capital"
                >
                  Подробнее <i className="my-icon icon-arrow-right-long"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow animate__fadeInUp"
              data-wow-delay="0.5s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              <div className="services-card">
                <div className="card-icon">
                  <i className="my-icon icon-robot-1"></i>
                </div>
                <h4 className="text-4 text-bold">
                  <Link
                    href="courses/komputernaya-gramotnost"
                    className="text-nowrap"
                  >
                    Компьютерная грамотность
                  </Link>
                </h4>
                <p className="text-para-1">
                  Научим работать на компьютере! Дети узнают, из чего состоит
                  компьютер, использовать текстовые редакторы и программы для
                  создания презентаций.
                </p>
                <Link
                  href="courses/komputernaya-gramotnost"
                  className="link-anime v6 round-border-full text-capital"
                >
                  Подробнее <i className="my-icon icon-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="patient-care v1 pt-xl-100 pt-xxl-120">
        <div className="container">
          <div className="section-title-center v1">
            <h2
              className="text-2 text-bold wow animate__fadeInUp"
              data-wow-delay="0.1s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              Почему стоит выбрать <br />
              наши курсы
            </h2>
          </div>
          <div className="row justify-content-xl-between mt-50 mt-xl-60">
            <div className="col-lg-7 col-xl-6 order-lg-1">
              <div
                className="image-right wow animate__zoomIn"
                data-wow-delay="0.3s"
                data-wow-offset="20"
                data-wow-duration="0.8s"
              >
                <img
                  style={{
                    maxHeight: "600px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                  src="assets/img/revolutionizing-care-ai/v1/img.webp"
                  alt="profile-img"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="content-left">
                <ul className="categories">
                  <li
                    className="wow animate__fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-offset="20"
                    data-wow-duration="0.8s"
                  >
                    <p className="text-2">
                      Практические навыки
                      <i className="my-icon icon-arrow-right"></i>
                    </p>
                  </li>
                  <li
                    className="wow animate__fadeInUp"
                    data-wow-delay="0.3s"
                    data-wow-offset="20"
                    data-wow-duration="0.8s"
                  >
                    <p className="text-2">
                      Развитие креативности
                      <i className="my-icon icon-arrow-right"></i>
                    </p>
                  </li>
                  <li
                    className="wow animate__fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-offset="20"
                    data-wow-duration="0.8s"
                  >
                    <p className="text-2">
                      Умение решать проблемы
                      <i className="my-icon icon-arrow-right"></i>
                    </p>
                  </li>
                  <li
                    className="wow animate__fadeInUp"
                    data-wow-delay="0.7s"
                    data-wow-offset="20"
                    data-wow-duration="0.8s"
                  >
                    <p className="text-2">
                      Интересное и увлекательное обучение
                      <i className="my-icon icon-arrow-right"></i>
                    </p>
                  </li>
                  <li
                    className="wow animate__fadeInUp"
                    data-wow-delay="0.7s"
                    data-wow-offset="20"
                    data-wow-duration="0.8s"
                  >
                    <p className="text-2">
                      Индивидуальный подход
                      <i className="my-icon icon-arrow-right"></i>
                    </p>
                  </li>
                </ul>
                <p className="text-para-1 mt-30 mt-xl-60">
                  Наши курсы разработаны для того, чтобы помочь детям освоить
                  важные навыки в мире IT и веб-дизайна. Мы предлагаем
                  увлекательное и интерактивное обучение, которое поможет вашему
                  ребенку не только приобрести практические знания, но и развить
                  множество полезных качеств.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="collaboration v1 pt-50 pt-md-70 pt-xl-100 pt-xxl-120">
        <div className="container">
          <div className="section-title-center v1">
            <h2
              className="text-2 text-bold wow animate__fadeInUp"
              data-wow-delay="0.1s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              Откройте мир IT вместе с Нами!
            </h2>
            <p
              className="text-para-1 wow animate__fadeInUp"
              data-wow-delay="0.3s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              Дадим все необходимые базовые знания и навыки и поможем
              разобраться, кем лучше стать, когда вырастешь
            </p>
          </div>
          <div className="row justify-content-center mt-space mt-50 mt-xl-60">
            <div
              className="col-md-6 col-xl-3 wow animate__fadeInUp"
              data-wow-delay="0.1s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              <div className="collaboration-card">
                <div className="card-logo">
                  <img
                    src="assets/img/service-collaboration/v1/windows.svg"
                    alt="logo"
                  />
                </div>
                <h4 className="text-4 text-bold">
                  <Link href="courses/komputernaya-gramotnost">
                    Компьютерная грамотность
                  </Link>
                </h4>
                <p className="text-para-1">
                  Дети познакомятся с основными компонентами компьютера и
                  научатся работать...
                </p>
                <Link
                  href="courses/komputernaya-gramotnost"
                  className="link-anime v7 round-border-full text-capital"
                >
                  Подробнее <i className="my-icon icon-arrow-right-long"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-3 wow animate__fadeInUp"
              data-wow-delay="0.3s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              <div className="collaboration-card">
                <div className="card-logo">
                  <img
                    src="assets/img/service-collaboration/v1/html.svg"
                    alt="logo"
                  />
                </div>
                <h4 className="text-4 text-bold">
                  <Link href="courses/site-develop">
                    Разработка <br />
                    Веб-сайтов
                  </Link>
                </h4>
                <p className="text-para-1">
                  Основы HTML и CSS.Верстка простых веб-страниц по
                  макету.Создание и оформление контента
                </p>
                <Link
                  href="courses/site-develop"
                  className="link-anime v7 round-border-full text-capital"
                >
                  Подробнее <i className="my-icon icon-arrow-right-long"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-3 wow animate__fadeInUp"
              data-wow-delay="0.5s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              <div className="collaboration-card">
                <div className="card-logo">
                  <img
                    src="assets/img/service-collaboration/v1/logo-7.svg"
                    alt="logo"
                  />
                </div>
                <h4 className="text-4 text-bold">
                  <Link href="courses/web-design">Разработка дизайна </Link>
                </h4>
                <p className="text-para-1">
                  Основы графического дизайна.Работа с цветами и
                  шрифтами/Создание макетов веб-страниц в Figma
                </p>
                <Link
                  href="courses/web-design"
                  className="link-anime v7 round-border-full text-capital"
                >
                  Подробнее <i className="my-icon icon-arrow-right-long"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-3 wow animate__fadeInUp"
              data-wow-delay="0.7s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              <div className="collaboration-card">
                <div className="card-logo">
                  <img
                    src="assets/img/service-collaboration/v1/c++.svg"
                    alt="logo"
                  />
                </div>
                <h4 className="text-4 text-bold">
                  <Link href="courses/osnovy-algoritmizatsii">
                    Основы{" "}
                    <span style={{ whiteSpace: "nowrap" }}>алгоритмизации</span>
                  </Link>
                </h4>
                <p className="text-para-1">
                  Построение простых алгоритмов: создание простых программ.
                  Программирование на начальном уровне.
                </p>
                <Link
                  href="courses/osnovy-algoritmizatsii"
                  className="link-anime v7 round-border-full text-capital"
                >
                  Подробнее <i className="my-icon icon-arrow-right-long"></i>
                </Link>
              </div>
            </div>
            <div className="mt-20 d-flex">
              <Link
                href="courses"
                className="btn-anime ml-auto v2 text-capital round-border-full"
              >
                Все курсы <i className="my-icon icon-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="work-process v1 pt-50 pb-50 pt-md-70 pb-md-70 pt-xl-100 pb-xl-100 pt-xxl-120 pb-xxl-120">
        <div className="container">
          <div className="row align-items-center justify-content-xl-between">
            <div className="col-xl-6 col-xxl-5">
              <div className="mobile-img-left">
                <img
                  src="assets/img/work-process/v1/img-1.png"
                  alt="mobile-img"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="content-right">
                <div className="section-title">
                  <h2 className="text-2 text-bold">
                    Чему научится ребенок на Наших курсах
                  </h2>
                </div>
                <ul className="work-process-cards mt-40">
                  <li
                    className="wow animate__fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-offset="20"
                    data-wow-duration="0.8s"
                  >
                    <h2 className="text-2 text-bold">01</h2>
                    <h4 className="text-4 text-capital text-bold">
                      Анализировать
                    </h4>
                    <p className="text-para-1">
                      На наших курсах дети научатся внимательно изучать
                      информацию, разбирать сложные задачи на составляющие и
                      находить оптимальные решения.
                    </p>
                  </li>
                  <li
                    className="wow animate__fadeInUp"
                    data-wow-delay="0.3s"
                    data-wow-offset="20"
                    data-wow-duration="0.8s"
                  >
                    <h2 className="text-2 text-bold">02</h2>
                    <h4 className="text-4 text-capital text-bold">
                      Критически мыслить
                    </h4>
                    <p className="text-para-1">
                      Дети научатся критически оценивать информацию, проверять
                      её достоверность и принимать обоснованные решения на
                      основе анализа данных.
                    </p>
                  </li>
                  <li
                    className="wow animate__fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-offset="20"
                    data-wow-duration="0.8s"
                  >
                    <h2 className="text-2 text-bold">03</h2>
                    <h4 className="text-4 text-capital text-bold">
                      Коммуницировать
                    </h4>
                    <p className="text-para-1">
                      Дети улучшат свои навыки общения, научатся ясно и чётко
                      излагать свои мысли, что поможет им лучше выражать свои
                      идеи и работать с другими.
                    </p>
                  </li>
                  <li
                    className="wow animate__fadeInUp"
                    data-wow-delay="0.7s"
                    data-wow-offset="20"
                    data-wow-duration="0.8s"
                  >
                    <h2 className="text-2 text-bold">04</h2>
                    <h4 className="text-4 text-capital text-bold">
                      Планировать
                    </h4>
                    <p className="text-para-1">
                      Дети научатся эффективно планировать своё время,
                      расставлять приоритеты и составлять расписание для
                      выполнения задач.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial v1 pt-50 pt-md-70 pt-xl-100 pt-xxl-120">
        <div className="container bLine pb-50 pb-md-70 pb-xl-100 pb-xxl-120">
          <div className="section-title-center v1">
            <h2
              className="text-2 text-capital text-bold wow animate__fadeInUp"
              data-wow-delay="0.1s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              Отзывы учеников о наших курсах
            </h2>
          </div>
          <div className="slider mt-50 mt-xl-60">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-card">
                  <span className="q-icon-1">
                    <i className="my-icon icon-quotation-bottom-left"></i>
                  </span>
                  <span className="q-icon-2">
                    <i className="my-icon icon-quotation-top-left"></i>
                  </span>
                  <div className="testimonial-profile">
                    <div className="profile-header">
                      <div className="profile-img">
                        <img
                          src="assets/img/testominial/v1/profile-1.png"
                          alt="profile"
                        />
                      </div>
                      <div className="profile-content">
                        <h4 className="text-4 text-bold">Анастасия</h4>
                        <p className="text-para-2">Компьютерная грамотность</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p className="text-para-1 text-light">
                      Мой сын с удовольствием изучал основы работы с компьютером
                      и прикладными программами. Особенно понравилось создание
                      презентаций в Google Slides. Теперь Максим намного
                      увереннее пользуется компьютером и даже помогает мне с
                      некоторыми задачами. Спасибо за замечательные уроки!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-card">
                  <span className="q-icon-1">
                    <i className="my-icon icon-quotation-bottom-left"></i>
                  </span>
                  <span className="q-icon-2">
                    <i className="my-icon icon-quotation-top-left"></i>
                  </span>
                  <div className="testimonial-profile">
                    <div className="profile-header">
                      <div className="profile-img">
                        <img
                          src="assets/img/testominial/v1/profile-2.png"
                          alt="profile"
                        />
                      </div>
                      <div className="profile-content">
                        <h4 className="text-4 text-bold">Ольга</h4>
                        <p className="text-para-2">Разработка веб-сайтов</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p className="text-para-1 text-light">
                      Артём очень полюбил курс по созданию сайтов! Он научился
                      создавать свои первые сайты, использовать HTML и CSS.
                      Теперь мечтает стать веб-разработчиком. Большое спасибо за
                      курс!
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-card">
                  <span className="q-icon-1">
                    <i className="my-icon icon-quotation-bottom-left"></i>
                  </span>
                  <span className="q-icon-2">
                    <i className="my-icon icon-quotation-top-left"></i>
                  </span>
                  <div className="testimonial-profile">
                    <div className="profile-header">
                      <div className="profile-img">
                        <img
                          src="assets/img/testominial/v1/profile-1.png"
                          alt="profile"
                        />
                      </div>
                      <div className="profile-content">
                        <h4 className="text-4 text-bold">Олег</h4>
                        <p className="text-para-2">Основы алгоритмизации</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p className="text-para-1 text-light">
                      Очень благодарен учителю за отличные объяснения! Мой
                      ребенок с удовольствием посещает занятия и каждый раз
                      возвращается с новыми знаниями. Спасибо за терпение и
                      профессионализм!
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-card">
                  <span className="q-icon-1">
                    <i className="my-icon icon-quotation-bottom-left"></i>
                  </span>
                  <span className="q-icon-2">
                    <i className="my-icon icon-quotation-top-left"></i>
                  </span>
                  <div className="testimonial-profile">
                    <div className="profile-header">
                      <div className="profile-img">
                        <img
                          src="assets/img/testominial/v1/profile-2.png"
                          alt="profile"
                        />
                      </div>
                      <div className="profile-content">
                        <h4 className="text-4 text-bold">Андрей</h4>
                        <p className="text-para-2">Разработка Веб-дизайна</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p className="text-para-1 text-light">
                      Очень приятно видеть, как учителю удается поддерживать
                      интерес у детей к изучаемому материалу. Мой ребенок
                      возвращается с уроков в восторге, полон энтузиазма и готов
                      рассказывать о новых открытиях. Спасибо за такие
                      увлекательные занятия!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section v1 pt-50 pb-50 pt-md-70 pb-md-70 pt-xl-100 pb-xl-100 pt-xxl-120 pb-xxl-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="faq-img wow animate__zoomIn"
                data-wow-delay="0.3s"
                data-wow-offset="20"
                data-wow-duration="0.8s"
              >
                <img src="assets/img/faq/v1/img-1.png" alt="faq-img" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section-title">
                <h2 className="text-2  text-bold">
                  Остались вопросы?
                  <br />
                </h2>
              </div>
              <ul className="accordion-main mt-40" id="faqAccordion">
                <li
                  className="active wow animate__fadeInUp"
                  data-wow-delay="0.1s"
                  data-wow-offset="20"
                  data-wow-duration="0.8s"
                >
                  <button
                    className="accordion-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqAccordion-item-1"
                  >
                    Что такое пробное занятие и как на него записаться?
                  </button>
                  <div
                    id="faqAccordion-item-1"
                    className="collapse show"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="box-content">
                      <p className="text-para-1">
                        Пробное занятие — это возможность для вашего ребенка
                        познакомиться с форматом обучения и преподавателем,
                        прежде чем начать полноценное обучение. На первом
                        занятии мы познакомимся с ребенком, обсудим его интересы
                        и цели, а также проведем вводное занятие по выбранному
                        курсу. Родителям не нужно готовить ребенка заранее, все
                        необходимые материалы и инструкции будут предоставлены.
                        Записаться на пробное занятие можно через наш сайт,
                        выбрав удобное время, или связавшись с нами по телефону
                        или через WhatsApp. Родители могут присутствовать на
                        первом занятии, чтобы убедиться в качестве обучения и
                        задать интересующие вопросы.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="wow animate__fadeInUp"
                  data-wow-delay="0.3s"
                  data-wow-offset="20"
                  data-wow-duration="0.8s"
                >
                  <button
                    className="accordion-btn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqAccordion-item-2"
                  >
                    Какую поддержку вы предоставляете ученикам вне занятий?
                  </button>
                  <div
                    id="faqAccordion-item-2"
                    className="collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="box-content">
                      <p className="text-para-1">
                        Мы предоставляем нашим ученикам доступ к
                        онлайн-ресурсам, таким как учебные материалы, видеоуроки
                        и дополнительные задания. Также у нас есть чат
                        поддержки, где ребенок может задать вопросы
                        преподавателю и получить помощь по любым возникшим
                        трудностям.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="wow animate__fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-offset="20"
                  data-wow-duration="0.8s"
                >
                  <button
                    className="accordion-btn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqAccordion-item-3"
                  >
                    Какие материалы и оборудование нужны для занятий?
                  </button>
                  <div
                    id="faqAccordion-item-3"
                    className="collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="box-content">
                      <p className="text-para-1">
                        Для занятий ребенку потребуется компьютер с доступом в
                        интернет, а также базовые программы, такие как браузер,
                        текстовый редактор и, при необходимости,
                        специализированное программное обеспечение, которое мы
                        предоставим. Все дополнительные материалы и ресурсы
                        будут также предоставлены.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="wow animate__fadeInUp"
                  data-wow-delay="0.7s"
                  data-wow-offset="20"
                  data-wow-duration="0.8s"
                >
                  <button
                    className="accordion-btn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqAccordion-item-4"
                  >
                    Как записаться на курс и что для этого нужно?
                  </button>
                  <div
                    id="faqAccordion-item-4"
                    className="collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="box-content">
                      <p className="text-para-1">
                        Записаться на курс можно через наш сайт, заполнив форму
                        заявки, или связавшись с нами по телефону или через
                        WhatsApp. Мы поможем выбрать подходящий курс и ответим
                        на все ваши вопросы.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="wow animate__fadeInUp"
                  data-wow-delay="0.7s"
                  data-wow-offset="20"
                  data-wow-duration="0.8s"
                >
                  <button
                    className="accordion-btn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqAccordion-item-5"
                  >
                    Что делать, если ребенок столкнулся с трудностями в учебе?
                  </button>
                  <div
                    id="faqAccordion-item-5"
                    className="collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="box-content">
                      <p className="text-para-1">
                        Если ребенок столкнулся с трудностями, он всегда может
                        обратиться за помощью к преподавателю. Мы также
                        предоставляем дополнительные материалы и консультации
                        для решения любых возникающих вопросов.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
