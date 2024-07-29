"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import OpenPopupButton from "./Button";

const Header = () => {
  const currentPath = usePathname();
  return (
    <header>
      <div className="menu-bar v1">
        <div className="container">
          <div className="menu-bar-content">
            <Link href="/">
              <img
                className="logo"
                src="/assets/img/logo/Logo.svg"
                alt="Logo"
              />
            </Link>

            <nav className="main-menu">
              <ul>
                <li className={currentPath === "/" ? "active" : ""}>
                  <Link href="/">Главная</Link>
                </li>

                <li className={currentPath === "/courses" ? "active" : ""}>
                  <Link href="/courses">Курсы</Link>
                </li>

                <li className={currentPath === "/contact" ? "active" : ""}>
                  <Link href="/contact">Контакты</Link>
                </li>
              </ul>
            </nav>
            <div className="mobile-menu-bar">
              <div className="mobile-menu-header">
                <div className="mobile-logo">
                  <Link href="/">
                    <img src="/assets/img/logo/Logo.svg" alt="Logo" />
                  </Link>
                </div>
                <button className="close-mobile-btn">
                  <i className="my-icon icon-close"></i>
                </button>
              </div>
              <div className="mobile-content">
                <ul className="all-btns">
                  <li>
                    <Link
                      href=""
                      className="link-anime v1 text-capital round-border-full"
                    >
                      Записаться <i className="my-icon icon-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
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
            <ul className="menu-right">
              <li>
                <OpenPopupButton variant="v1" />
              </li>
              <li>
                <button className="mobile-menu-btn">
                  <span></span> <span></span> <span></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
