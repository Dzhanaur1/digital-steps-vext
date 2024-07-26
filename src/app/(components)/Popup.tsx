"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { usePopup } from "../(context)/PopupProvider";
import axios from "axios";
import InputMask from "react-input-mask";

export default function Popup() {
  const { isOpen, closePopup, selectedCourseId, courses } = usePopup();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", phone: "" });

  useEffect(() => {
    setCourse(selectedCourseId || ""); // Инициализируем значение курса при открытии попапа
  }, [isOpen, selectedCourseId]);

  const validate = () => {
    let isValid = true;
    let errors = { name: "", phone: "" };

    if (!name.trim()) {
      errors.name = "Введите ваше имя";
      isValid = false;
    }

    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) {
      errors.phone = "Введите корректный номер телефона";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await axios.post("/api/send-form", { name, phone, course });
      alert("Форма успешно отправлена");
      closePopup();
    } catch (error) {
      alert("Ошибка при отправке формы");
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-3 text-white">Имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 text-white bg-[#161313] rounded-full border-none"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block mb-3 text-white">Телефон</label>
            <InputMask
              mask="+7 (999) 999-99-99"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 text-white bg-[#161313] rounded-full border-none"
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="block mb-3 text-white">Курс</label>
            <div className="relative">
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="appearance-none w-full px-3 text-white bg-[#161313] rounded-full border-none"
                required
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
            className="w-full btn-anime d-flex mx-auto v2 text-capital round-border-full"
            disabled={loading}
          >
            {loading ? "Отправка..." : "Записаться"}
          </button>
        </form>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <svg
              className="animate-spin h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
