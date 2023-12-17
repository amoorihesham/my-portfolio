import "./secHeading.css";
function SecHeading({ title, para }) {
  return (
    <section className="sec__heading">
      <h2>{title}</h2>
      <p className="text-white-50">{para}</p>
    </section>
  );
}

export default SecHeading;
