// components/WhatsAppButton.tsx
"use client";

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+79936223328" // Укажи свой номер телефона
      accountName="DigitalSteps" // Название компании
      chatMessage="Привет! Как я могу вам помочь?" // Приветственное сообщение
      statusMessage="Онлайн"
      avatar="/assets/img/logo/D-logo.svg" // Путь к аватару
      placeholder="Напишите сообщение..."
      allowEsc
      //   allowClickAway
      notification
      notificationSound
    />
  );
};

export default WhatsAppButton;
