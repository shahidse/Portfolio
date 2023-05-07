import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import ResponsiveAppBar from "@/components/UI/ResponsiveAppBar";
import ResposiveHero from "@/components/UI/ResposiveHero";
import ResponsiveStack from "@/components/Home/ResposivePortfolio";
import Variants from "@/components/UI/ResposiveHeading";
import ResposiveResume from "@/components/Home/ResposiveResume";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <ResposiveHero/>
      <Variants title="Portfolio"/>
      <ResponsiveStack/>
      <Variants title="Resume"/>
    <ResposiveResume/>
    </>
  );
}
