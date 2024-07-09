import prisma from "@/lib/prisma";
import Image from "next/image";
import parser from "html-react-parser";
import ThemeToggle from "@/components/layout/ToggleTheme/theme-toggle";

export default async function Home() {
  const data: any = await prisma.ncert_book.findFirst();
  data["content"] = Buffer.from(data.content, "utf-8").toString();
  return (
    <main className=" min-h-screen p-6">
      <ThemeToggle />
      {parser(data.content)}
    </main>
  );
}
