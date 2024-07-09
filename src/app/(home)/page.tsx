import prisma from "@/lib/prisma";
import "./home.css";
import parser from "html-react-parser";

export default async function Home() {
  const data: any = await prisma.ncert_book.findFirst();
  data["content"] = Buffer.from(data.content, "utf-8").toString();
  return (
    <main className="min-h-screen p-6">
      {parser(data.content)}
    </main>
  );
}
