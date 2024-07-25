// components/Popup.tsx
"use client";

import { useEffect } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { usePopup } from "../(context)/PopupProvider";

export default function Popup() {
  const { isOpen, closePopup, selectedCourseId, courses } = usePopup();

  useEffect(() => {
    if (isOpen) {
      console.log("Открыто");
    } else {
      console.log("Закрыто");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closePopup}
    >
      <div
        className="relative bg-[#1d1c1c] p-10 rounded-lg shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-[#e34d00]"
          onClick={closePopup}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-xl font-semibold text-white mb-4">
          Запись на курс
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-3 text-white">Имя</label>
            <input
              type="text"
              className="w-full p-3 text-white bg-[#161313] rounded-full border-none"
            />
          </div>
          <div>
            <label className="block mb-3 text-white">Телефон</label>
            <input
              type="tel"
              className="w-full p-3 text-white bg-[#161313] rounded-full border-none"
            />
          </div>
          <div>
            <label className="block mb-3 text-white">Курс</label>
            <div className="relative">
              <select
                defaultValue={selectedCourseId}
                className="appearance-none w-full px-3 text-white bg-[#161313] rounded-full border-none "
              >
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-white rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l4 4a1 1 0 11-1.414 1.414L10 5.414 6.707 8.707A1 1 0 115.293 7.293l4-4A1 1 0 0110 3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn-anime d-flex mx-auto v2 text-capital round-border-full"
          >
            Записаться <i className="my-icon icon-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
