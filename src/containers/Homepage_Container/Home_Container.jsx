"use client";
import { motion } from "framer-motion";
import "./style.css";
import HomeIntro from "@/components/Home__Page/homeIntro/HomeIntro";
import SocialCard from "@/components/Global/socialCard/SocialCard";
import CVBtn from "@/components/Global/cvBtn/CVBtn";
import { useMediaQuery } from "react-responsive";

function HomeContainer() {
  const mobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="homepage text-center"
    >
      <div className="container">
        <HomeIntro />
        <CVBtn />
        <div className="social_container_home">
          <SocialCard />
        </div>
      </div>
    </motion.section>
  );
}

export default HomeContainer;
