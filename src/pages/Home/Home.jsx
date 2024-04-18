//COMPONENTS
import Banner from "../../components/Banner/Banner";
import BannerHome from "../../components/Banner/BannerHome";
import Select from "../../components/Filter/Select";
import Information from "../../components/Contact/Information";
import Form from "../../components/Contact/Form"

//ASSETS
import bannerHome from "../../assets/Banner_home.webp";

//CSS
import "../../style/style.css";

function Home() {
    //affichage (render)
    return (
        <main>
            <section>
                <Banner bannerImage={bannerHome} bannerAlt={"Bannière de la page accueil"} bannerClass={"banner__img banner__img--home"} />
                <BannerHome />
            </section>

            <section id="PF">
                <Select />
            </section>

            <section className="section_contact" id="contact">
                <Information />
                <div className="hline"></div>
                <Form />
            </section>
        </main>
    );
}

export default Home;
