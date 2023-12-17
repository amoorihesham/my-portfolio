import "./style.css";
import info from "../../../utils/personal.json";

function PersonalCard() {
  return (
    <section className="personal_card_container text-white">
      <h4>Personal Information:</h4>
      <div className="info">
        <p>
          Name: <span>{info.fname}</span>
        </p>
        <p>
          Nationality: <span>{info.nationality}</span>
        </p>
        <p>
          Milatry Status: <span>{info.milatry}</span>
        </p>
        <p>
          Martial Status: <span>{info.martial}</span>
        </p>
        <p className="tags">
          Languages:{" "}
          {info.languages.map((lang) => (
            <span key={lang}>{lang}</span>
          ))}
        </p>
        <p>
          Current Job: <span>{info.job}</span>
        </p>
        <p className="tags">
          Hobbies:{" "}
          {info.hoppies.map((hobby) => (
            <span key={hobby}>{hobby}</span>
          ))}
        </p>
        <p className="tags">
          Tech-Skills:{" "}
          {info.skills.map((skil) => (
            <span key={skil}>{skil}</span>
          ))}
        </p>
        <p className="tags">
          Non-Tech:{" "}
          {info.personalAbilities.map((ability) => (
            <span key={ability}>{ability}</span>
          ))}
        </p>
      </div>
    </section>
  );
}

export default PersonalCard;
