import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function CVBtn() {
  return (
    <div className="cvBtn">
      <Link
        href="/Last-updated-cv.pdf"
        target="_blank"
        className="btn cvBTN-btn"
      >
        CV <FontAwesomeIcon icon={faFile} size="lg" className="ms-2" />
      </Link>
    </div>
  );
}

export default CVBtn;
