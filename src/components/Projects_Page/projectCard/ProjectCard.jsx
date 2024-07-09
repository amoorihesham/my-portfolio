'use client';
import './projectCard.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { dom } from '@fortawesome/fontawesome-svg-core';
function ProjectCard({ project: { title, thumbnail, livedemo, github, mainTech, finishDate, role } }) {
	const animationConfig = {};
	return (
		<div className='col-md-6 col-xl-4'>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className='card__project'
				>
					<Image
						src={thumbnail}
						alt={`${title} thumbnail Photo`}
						width={400}
						height={200}
						style={{ width: '100%', height: 'auto' }}
						sizes={'(max-width:767px) 100vw,50vw'}
						priority
					/>
					<div className='card__info d-flex align-items-center justify-content-between'>
						<div className='project-details'>
							<h5 className='text-white'>{title}</h5>
							<p className='role'>{role}</p>
							<p className='fDate'>{finishDate}</p>
							<p className='tech'>{mainTech}</p>
						</div>
						<div className='card__actions d-flex flex-column gap-3'>
							<Link href={livedemo} target='_blank' className='btn btn-live'>
								Live Demo
							</Link>
							<Link href={github} target='_blank' className='btn btn-github'>
								Github Repo
							</Link>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default ProjectCard;
