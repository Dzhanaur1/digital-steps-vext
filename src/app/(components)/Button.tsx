// components/OpenPopupButton.tsx
"use client";

import { usePopup } from "../(context)/PopupProvider";

interface OpenPopupButtonProps {
  courseId?: string;
  variant?: "v1" | "v2";
}

export default function OpenPopupButton({
  courseId,
  variant = "v2",
}: OpenPopupButtonProps) {
  const { openPopup } = usePopup();

  const classNames = `btn-anime ml-auto ${variant} text-capital round-border-full`;

  return (
    <button onClick={() => openPopup(courseId)} className={classNames}>
      Записаться <i className="my-icon icon-arrow-right"></i>
    </button>
  );
}
