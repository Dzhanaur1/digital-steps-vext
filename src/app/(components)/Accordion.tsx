"use client";
import React, { useState, useRef } from "react";

type AccordionProps = {
  data: Array<{
    title: string;
    items: string[];
  }>;
};

const Accordion: React.FC<AccordionProps> = ({ data }) => {
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
      {data.map((module, index) => (
        <li key={index} className={activeIndex === index ? "active" : ""}>
          <button
            className={`accordion-btn ${
              activeIndex === index ? "" : "collapsed"
            }`}
            type="button"
            onClick={() => toggleItem(index)}
          >
            {module.title}
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
                <ul className="categories-list">
                  {module.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      data-wow-delay="0.1s"
                      data-wow-offset={20}
                      data-wow-duration="0.8s"
                    >
                      <span className="list-number">{itemIndex + 1}</span>
                      <div className="content">
                        <h5 className="text-6 text-bold">{item}</h5>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
