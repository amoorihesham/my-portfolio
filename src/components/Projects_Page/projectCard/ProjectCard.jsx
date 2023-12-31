"use client";
import "./projectCard.css";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { dom } from "@fortawesome/fontawesome-svg-core";
function ProjectCard({
  project: { title, description, thumbnail, livedemo, github, tools },
}) {
  const animationConfig = {};
  return (
    <div className="col-md-6 col-xl-4">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="card__project"
        >
          <Image
            src={thumbnail}
            alt={`${title} thumbnail Photo`}
            width={400}
            height={200}
            style={{ width: "100%", height: "auto" }}
            sizes={"(max-width:767px) 100vw,50vw"}
            priority
          />
          <div className="card__info">
            <h4 className="text-white">{title}</h4>
            <p className="text-white">{description}</p>
            {/* <ul
            className="tools m-0 p-0 d-flex align-items-center list-unstyled flex-wrap text-white gap-2"
            aria-label="tools list"
          >
            {tools.map((tool) => (
              <li className="tool" key={tool}>
                {tool}
              </li>
            ))}
          </ul> */}
          </div>
          <div className="card__actions d-flex align-items-center justify-content-between align-bottom">
            <Link href={livedemo} target="_blank" className="btn btn-live">
              Live Demo
            </Link>
            <Link href={github} target="_blank" className="btn btn-github">
              Github Repo
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ProjectCard;
