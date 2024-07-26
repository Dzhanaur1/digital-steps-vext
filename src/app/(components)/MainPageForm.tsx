"use client";

import React, { useState } from "react";
import axios from "axios";
import InputMask from "react-input-mask";

const MainPageForm = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) {
      setError("Введите корректный номер телефона");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await axios.post("/api/send-form", { phone });
      alert("Форма успешно отправлена");
      setPhone("");
    } catch (error) {
      alert("Ошибка при отправке формы");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="start-ai-form mt-40">
      <InputMask
        mask="+7 (999) 999-99-99"
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={{ fontSize: "16px" }}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        className="btn-anime v1 round-border-full"
        type="submit"
        disabled={loading}
      >
        {loading ? "Отправка..." : "Записаться на курс"}
        <i className="my-icon icon-arrow-right"></i>
      </button>
    </form>
  );
};

export default MainPageForm;
