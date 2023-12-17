import "./filterList.css";
function CategoryProjects() {
  return (
    <section className="my-4">
      <ul className="filter__list ">
        <li className="active">All</li>
        <li>React</li>
        <li>Next</li>
        <li>Vanilla js</li>
        <li>Basic</li>
      </ul>
    </section>
  );
}

export default CategoryProjects;
