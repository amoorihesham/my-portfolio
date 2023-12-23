import AboutStep from "../AboutStep/AboutStep";
import abouts from "../../../utils/about.json";

function EduList() {
  return (
    <div className="edu-list mt-4">
      <h4 className="text-white m-0 p-0 mb-4">Education Information:</h4>
      {abouts.map((about) => (
        <AboutStep key={about.id} about={about} />
      ))}
    </div>
  );
}

export default EduList;
