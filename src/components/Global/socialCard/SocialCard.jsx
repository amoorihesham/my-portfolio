"use client";
import "./style.css";
import links from "../../../utils/socialMedia.json";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faUpwork,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { motion, AnimatePresence } from "framer-motion";

function SocialCard() {
  const list = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };
  const lies = {
    hidden: {
      opacity: 0,
      y: -5,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="social_card my-4">
      <AnimatePresence>
        <motion.ul
          initial="hidden"
          animate="show"
          variants={list}
          className="list-unstyled p-0 m-0 d-flex align-items-center gap-4"
        >
          <motion.li variants={lies} className="social_link">
            <Link
              href={links[0].facebook}
              target="_blank"
              aria-label="Amr Hesham facebook profile"
            >
              <FontAwesomeIcon icon={faFacebook} size="2xl" color="#1877f2" />
            </Link>
          </motion.li>
          <motion.li variants={lies} className="social_link">
            <Link
              href={links[0].twitter}
              target="_blank"
              aria-label="Amr Hesham twitter profile"
            >
              <FontAwesomeIcon icon={faTwitter} size="2xl" color="#1da1f2" />
            </Link>
          </motion.li>
          <motion.li variants={lies} className="social_link">
            <Link
              href={links[0].linkedin}
              target="_blank"
              aria-label="Amr Hesham linkedin profile"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" color="#83941f" />
            </Link>
          </motion.li>
          <motion.li variants={lies} className="social_link">
            <Link
              href={links[0].github}
              target="_blank"
              aria-label="Amr Hesham github profile"
            >
              <FontAwesomeIcon icon={faGithub} size="2xl" color="#bd2c00" />
            </Link>
          </motion.li>
          <motion.li variants={lies} className="social_link">
            <Link
              href={links[0].upwork}
              target="_blank"
              aria-label="Amr Hesham upwork profile"
            >
              <FontAwesomeIcon icon={faUpwork} size="2xl" color="#4aae20" />
            </Link>
          </motion.li>
          <motion.li variants={lies} className="social_link">
            <Link
              href={links[0].whatsapp}
              target="_blank"
              aria-label="Amr Hesham whatsapp profile"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2xl" color="#25d366" />
            </Link>
          </motion.li>
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}

export default SocialCard;
