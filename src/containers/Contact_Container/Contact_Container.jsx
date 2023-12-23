import ContactForm from "@/components/Contact_Page/ContactForm/ContactForm";
import "./style.css";
import SecHeading from "@/components/Global/secHeading/SecHeading";
import SocialCard from "@/components/Global/socialCard/SocialCard";

function ContactContainer() {
  return (
    <section className="contactpage">
      <div className="container">
        <SecHeading
          title="Contact-me"
          para="Rev up the conversation! stop—share your thoughts, and let’s turn ideas into pixels together."
        />
        <SocialCard />
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactContainer;
