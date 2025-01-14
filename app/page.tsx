import Image from "next/image";
// import Portfolio from "./components/portfolio/Portfolio";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("./components/portfolio/Portfolio"), {
  ssr: false,
});

export default function Home() {
  return <Portfolio />;
}
