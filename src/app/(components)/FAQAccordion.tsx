"use client";
import React, { useState, useRef } from "react";

const faqData = [
  {
    question: "Что такое пробное занятие и как на него записаться?",
    answer:
      "Пробное занятие — это возможность для вашего ребенка познакомиться с форматом обучения и преподавателем, прежде чем начать полноценное обучение. На первом занятии мы познакомимся с ребенком, обсудим его интересы и цели, а также проведем вводное занятие по выбранному курсу. Родителям не нужно готовить ребенка заранее, все необходимые материалы и инструкции будут предоставлены. Записаться на пробное занятие можно через наш сайт, выбрав удобное время, или связавшись с нами по телефону или через WhatsApp. Родители могут присутствовать на первом занятии, чтобы убедиться в качестве обучения и задать интересующие вопросы.",
  },
  {
    question: "Какую поддержку вы предоставляете ученикам вне занятий?",
    answer:
      "Мы предоставляем нашим ученикам доступ к онлайн-ресурсам, таким как учебные материалы, видеоуроки и дополнительные задания. Также у нас есть чат поддержки, где ребенок может задать вопросы преподавателю и получить помощь по любым возникшим трудностям.",
  },
  {
    question: "Какие материалы и оборудование нужны для занятий?",
    answer:
      "Для занятий ребенку потребуется компьютер с доступом в интернет, а также базовые программы, такие как браузер, текстовый редактор и, при необходимости, специализированное программное обеспечение, которое мы предоставим. Все дополнительные материалы и ресурсы будут также предоставлены.",
  },
  {
    question: "Как записаться на курс и что для этого нужно?",
    answer:
      "Записаться на курс можно через наш сайт, заполнив форму заявки, или связавшись с нами по телефону или через WhatsApp. Мы поможем выбрать подходящий курс и ответим на все ваши вопросы.",
  },
  {
    question: "Что делать, если ребенок столкнулся с трудностями в учебе?",
    answer:
      "Если ребенок столкнулся с трудностями, он всегда может обратиться за помощью к преподавателю. Мы также предоставляем дополнительные материалы и консультации для решения любых возникающих вопросов.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (index: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const currentRef = refs.current[index];

    if (currentRef) {
      if (activeIndex === index) {
        currentRef.style.height = `${currentRef.scrollHeight}px`;
        requestAnimationFrame(() => {
          currentRef.style.height = "0px";
        });

        setTimeout(() => {
          setActiveIndex(null);
          setIsTransitioning(false);
        }, 300);
      } else {
        if (activeIndex !== null) {
          const prevRef = refs.current[activeIndex];
          if (prevRef) {
            prevRef.style.height = `${prevRef.scrollHeight}px`;
            requestAnimationFrame(() => {
              prevRef.style.height = "0px";
            });
          }
        }

        currentRef.style.height = "0px";
        setActiveIndex(index);
        requestAnimationFrame(() => {
          currentRef.style.height = `${currentRef.scrollHeight}px`;
        });

        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }
    }
  };

  return (
    <ul className="accordion-main mt-40" id="faqAccordion">
      {faqData.map((item, index) => (
        <li key={index} className={activeIndex === index ? "active" : ""}>
          <button
            className={`accordion-btn ${
              activeIndex === index ? "" : "collapsed"
            }`}
            type="button"
            onClick={() => toggleItem(index)}
          >
            {item.question}
          </button>
          <div
            id={`faqAccordion-item-${index + 1}`}
            className={`box-content ${
              activeIndex === index ? "open" : "close"
            }`}
            ref={(el) => {
              refs.current[index] = el;
            }}
            style={{ overflow: "hidden", transition: "height 0.3s ease" }}
            data-bs-parent="#faqAccordion"
          >
            <div className="ai-development v1">
              <div className="categories">
                <div className="text-para-1">{item.answer}</div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FAQAccordion;
