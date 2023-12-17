import "./style.css";
import HomeIntro from "@/components/Home__Page/homeIntro/HomeIntro";
import SocialCard from "@/components/Global/socialCard/SocialCard";
import CVBtn from "@/components/Global/cvBtn/CVBtn";
function HomeContainer() {
  return (
    <section className="homepage text-center">
      <div className="container">
        <HomeIntro />
        <CVBtn />
        <div className="social_container_home">
          <SocialCard />
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
