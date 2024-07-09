"use client";
import "./style.css";

import info from "../../../utils/personal.json";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function PersonalCard() {
  const mobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <section className="personal_card_container text-white">
      <h4>Personal Information:</h4>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={mobile ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="info"
        >
          <motion.p
            initial={{
              fontWeight: "normal",
              scale: 1,
              fontSize: "16px",
            }}
            whileHover={{
              fontWeight: mobile ? "normal" : "bold",
              scale: mobile ? 1 : 1.01,
              fontSize: mobile ? "16px" : "16px",
            }}
          >
            Name: <span>{info.fname}</span>
          </motion.p>
          <motion.p
            initial={{
              fontWeight: "normal",
              scale: 1,
              fontSize: "16px",
            }}
            whileHover={{
              fontWeight: mobile ? "normal" : "bold",
              scale: mobile ? 1 : 1.01,
              fontSize: mobile ? "16px" : "16px",
            }}
          >
            Nationality: <span>{info.nationality}</span>
          </motion.p>
          <motion.p
            initial={{
              fontWeight: "normal",
              scale: 1,
              fontSize: "16px",
            }}
            whileHover={{
              fontWeight: mobile ? "normal" : "bold",
              scale: mobile ? 1 : 1.01,
              fontSize: mobile ? "16px" : "16px",
            }}
          >
            Milatry Status: <span>{info.milatry}</span>
          </motion.p>
          <motion.p
            initial={{
              fontWeight: "normal",
              scale: 1,
              fontSize: "16px",
            }}
            whileHover={{
              fontWeight: mobile ? "normal" : "bold",
              scale: mobile ? 1 : 1.01,
              fontSize: mobile ? "16px" : "16px",
            }}
          >
            Martial Status: <span>{info.martial}</span>
          </motion.p>
          <motion.p
            initial={{
              fontWeight: "normal",
              scale: 1,
              fontSize: "16px",
            }}
            whileHover={{
              fontWeight: mobile ? "normal" : "bold",
              scale: mobile ? 1 : 1.01,
              fontSize: mobile ? "16px" : "16px",
            }}
            className="tags"
          >
            Languages:{" "}
            {info.languages.map((lang) => (
              <span key={lang}>{lang}</span>
            ))}
          </motion.p>
          <motion.p
            initial={{
              fontWeight: "normal",
              scale: 1,
              fontSize: "16px",
            }}
            whileHover={{
              fontWeight: mobile ? "normal" : "bold",
              scale: mobile ? 1 : 1.01,
              fontSize: mobile ? "16px" : "16px",
            }}
          >
            Current Job: <span>{info.job}</span>
          </motion.p>
          <motion.p
            initial={{
              fontWeight: "normal",
              scale: 1,
              fontSize: "16px",
            }}
            whileHover={{
              fontWeight: mobile ? "normal" : "bold",
              scale: mobile ? 1 : 1.01,
              fontSize: mobile ? "16px" : "16px",
            }}
            className="tags"
          >
            Hobbies:
            {info.hoppies.map((hobby) => (
              <span key={hobby}>{hobby}</span>
            ))}
          </motion.p>
          <motion.p
            initial={{
              fontWeight: "normal",
              scale: 1,
              fontSize: "16px",
            }}
            whileHover={{
              fontWeight: mobile ? "normal" : "bold",
              scale: mobile ? 1 : 1.01,
              fontSize: mobile ? "16px" : "16px",
            }}
            className="tags"
          >
            Tech-Skills:
            {info.skills.map((skil) => (
              <span key={skil}>{skil}</span>
            ))}
          </motion.p>
          <motion.p
            initial={{
              fontWeight: "normal",
              scale: 1,
              fontSize: "16px",
            }}
            whileHover={{
              fontWeight: mobile ? "normal" : "bold",
              scale: mobile ? 1 : 1.01,
              fontSize: mobile ? "16px" : "16px",
            }}
            className="tags"
          >
            Soft-Tech:
            {info.personalAbilities.map((ability) => (
              <span key={ability}>{ability}</span>
            ))}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default PersonalCard;
