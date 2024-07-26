// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1d1c1c] text-white">
      <h1 className="text-8xl text-orange font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Упс... Ошибка.</p>
      <Link href="/" className="btn-anime v2 text-capital round-border-full">
        Вернуться на главную<i className="my-icon icon-arrow-right"></i>
      </Link>
    </div>
  );
}
