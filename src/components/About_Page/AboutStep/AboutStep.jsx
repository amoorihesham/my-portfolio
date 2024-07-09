import './style.css';
function AboutStep({ about: { title, description, startDate, endDate, location, place } }) {
	return (
		<div className='edu-card'>
			<div className='card-title-edu d-flex align-items-center justify-content-between'>
				<div className='study-info mb-2'>
					<h5 className='text-white'>{title}</h5>
					<p className='course-place'>{place}</p>
					<p className='course-location'>{location}</p>
				</div>
				<p className='m-0 p-0'>{startDate} / {endDate}</p>
			</div>
			<div className='card-body-edu'>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default AboutStep;
