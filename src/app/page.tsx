import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1 className="font-bold text-4xl text-center p-5">
        TailwindCSS 와 StyledComponents 비교
      </h1>
      <h2>
        <Link className="text-blue-500 text-2xl" href="/tailwindcss">
          TailwindCSS 스타일링 페이지로 이동
        </Link>
      </h2>
      <h2>
        <Link className="text-blue-500 text-2xl" href="/styledcomponents">
          StyledComponents 스타일링 페이지로 이동
        </Link>
      </h2>
    </div>
  );
}
