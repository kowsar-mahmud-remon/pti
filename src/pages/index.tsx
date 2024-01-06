import { Inter } from "next/font/google";
import RootLayout from "@/components/Layout/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div></div>;
}

Home.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
