import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="info-footer v1 pt-45 pt-xl-80">
        <div className="container">
          <div className="info-footer-content">
            <div
              className="footer__widget wow animate__fadeInUp"
              data-wow-delay="0.3s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              <div className="footer__widget-content">
                <div className="footer-logo">
                  <Link href="/">
                    <img src="/assets/img/logo/Logo.svg" alt="Logo" />
                  </Link>
                </div>
                <p className="text-para-1">
                  Онлайн-школа программирования для детей и подростков
                </p>
                <ul className="social-link v1">
                  <li>
                    <Link href="https://wa.me/+79183923328">
                      <i className="my-icon fa-brands fa-whatsapp"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="my-icon fa-brands fa-telegram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="my-icon fa-brands fa-vk"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="footer__widget wow animate__fadeInUp"
              data-wow-delay="0.7s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              <h4 className="text-4 text-bold footer__widget-title">
                Полезные ссылки
              </h4>
              <div className="footer__widget-content">
                <ul className="link-list">
                  <li>
                    <Link href="/courses/komputernaya-gramotnost">
                      Компьютерная грамотность
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/site-develop">
                      Разработка веб-сайтов
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/web-design">Разработка дизайна</Link>
                  </li>
                  <li>
                    <Link href="courses/osnovy-algoritmizatsii">
                      Основы алгоритмизации
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="footer__widget wow animate__fadeInUp"
              data-wow-delay="0.9s"
              data-wow-offset="20"
              data-wow-duration="0.8s"
            >
              <h4 className="text-4 text-bold footer__widget-title">
                Контакты
              </h4>
              <div className="footer__widget-content">
                <ul className="address-link">
                  <li>
                    <i className="my-icon icon-phone"></i>
                    <p className="text-para-1">
                      <Link href="tel:+79183923328">+7 (918) 392-33-28</Link>
                    </p>
                  </li>
                  <li>
                    <i className="my-icon icon-envelope"></i>
                    <p className="text-para-1">
                      <Link href="mailto:digitalsteps.courses@yandex.ru">
                        digitalsteps.courses@yandex.ru
                      </Link>
                    </p>
                  </li>
                  <li>
                    <img
                      className="footer_icon"
                      src="/assets/img/footer/v1/vk.svg"
                      alt=""
                    />

                    <Link href="#" className="text-para-1">
                      Наша группа в VK
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="bg-shap"
            data-background="/assets/img/footer/v1/shap-1.png"
          ></div>
          <div className="footer-content mt-80 pt-27 pb-27">
            <p className="text-para-1">
              © <Link href="#">Digital Steps</Link> 2024 | Все права защищены
            </p>
            <ul className="terms-link">
              <li>
                <Link href="#">Политика</Link>
              </li>
              <li>
                <Link href="#">Термины</Link>
              </li>
              <li>
                <Link href="#">Карта сайта</Link>
              </li>
              <li>
                <Link href="#">Помощь</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button className="scroll-bottom-top v1">
        <i className="my-icon icon-angle-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
