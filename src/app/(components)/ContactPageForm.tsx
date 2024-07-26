"use client";

import React, { useState } from "react";
import axios from "axios";
import InputMask from "react-input-mask";

const ContactPageForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", phone: "" });

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
      await axios.post("/api/send-form", { name, phone, email, message });
      alert("Форма успешно отправлена");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Ошибка при отправке формы");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="main-form message-form">
      <div className="group-form-box">
        <div className="form-box">
          <label
            className="text-para-1 text-para-xl-1 text-reguler"
            htmlFor="firstname-1"
          >
            Имя*
          </label>
          <input
            name="firstname"
            id="firstname-1"
            type="text"
            placeholder="Ваше Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="form-box">
          <label
            className="text-para-1 text-para-xl-1 text-reguler"
            htmlFor="number-2"
          >
            Телефон*
          </label>
          <InputMask
            mask="+7 (999) 999-99-99"
            name="tel"
            id="number-2"
            type="tel"
            placeholder="Ваш номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
      </div>
      <div className="group-form-box">
        <div className="form-box">
          <label
            className="text-para-1 text-para-xl-1 text-reguler"
            htmlFor="username-1"
          >
            Почта
          </label>
          <input
            name="username"
            id="username-1"
            type="text"
            placeholder="Необязательно"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="form-box">
        <label
          className="text-para-1 text-para-xl-1 text-reguler"
          htmlFor="message-3"
        >
          Ваше сообщение
        </label>
        <textarea
          name="message"
          id="message-3"
          placeholder="Необязательно"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <p className="text-para-1 text-bold mt-30 mb-30 response" />
      <button
        className="btn-anime v2 text-capital round-border-full mt-30 mt-lg-35"
        type="submit"
        disabled={loading}
      >
        {loading ? "Отправка..." : "Записаться"}
      </button>
    </form>
  );
};

export default ContactPageForm;
