import "./style.css";
function AboutStep({ about: { title, description, date } }) {
  return (
    <div className="edu-card">
      <div className="card-title-edu d-flex align-items-center justify-content-between">
        <h5 className="text-white ">{title}</h5>
        <p className="m-0 p-0">{date}</p>
      </div>
      <div className="card-body-edu">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutStep;
