import "./secHeading.css";
function SecHeading({ title, para }) {
  return (
    <section className="sec__heading">
      <p className="heading">{title}</p>
      <p className="text-white-50">{para}</p>
    </section>
  );
}

export default SecHeading;
