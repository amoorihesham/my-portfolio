'use client';
import { AnimatePresence, motion } from 'framer-motion';
import './filterList.css';
function CategoryProjects() {
	const container = {
		show: { opacity: 1, transition: { staggerChildren: 0.2, delay: 0.5 } },
		hidden: { opacity: 0 },
	};
	const items = {
		show: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: -10 },
	};
	return (
		<section className='my-4'>
			<AnimatePresence>
				<motion.ul initial='hidden' animate='show' variants={container} className='filter__list '>
					<motion.li className='active'>All</motion.li>
					<motion.li variants={items}>React</motion.li>
					<motion.li variants={items}>Next</motion.li>
					<motion.li variants={items}>Vanilla js</motion.li>
					<motion.li variants={items}>Basic</motion.li>
				</motion.ul>
			</AnimatePresence>
		</section>
	);
}

export default CategoryProjects;
