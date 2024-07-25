// context/PopupContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Course {
  id: string;
  name: string;
}

interface PopupContextProps {
  isOpen: boolean;
  openPopup: (courseId?: string) => void;
  closePopup: () => void;
  selectedCourseId: string;
  courses: Course[];
}

const courses = [
  { id: "site-develop", name: "Разработка сайтов" },
  { id: "web-design", name: "Веб-дизайн" },
  { id: "pcg", name: "Компьютерная грамотность" },
  { id: "algorithm", name: "Основы алгоритмизации" },
  { id: "math", name: "Математика" },
];

const PopupContext = createContext<PopupContextProps | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState("");

  const openPopup = (courseId?: string) => {
    if (courseId) setSelectedCourseId(courseId);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedCourseId("");
  };

  return (
    <PopupContext.Provider
      value={{ isOpen, openPopup, closePopup, selectedCourseId, courses }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
