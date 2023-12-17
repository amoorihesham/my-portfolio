import "./style.css";
import SecHeading from "@/components/Global/secHeading/SecHeading";
import SocialCard from "@/components/Global/socialCard/SocialCard";

function ContactContainer() {
  return (
    <section className="contactpage">
      <div className="container">
        <SecHeading
          title="Contact-me"
          para="Send me a message,say hi, hire me, i`m happy to hear from U."
        />
        <SocialCard />
      </div>
    </section>
  );
}

export default ContactContainer;
