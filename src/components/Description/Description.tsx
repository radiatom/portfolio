import "./Description.scss";
import foto from "./../../media/Img/photo_2023-04-11_14-24-37.jpg";

const Description = () => {
    return (
        <div className="container">
            <div className="description">
                <div className="description__card">
                    <img src={foto} alt="foto" />
                    <h2>Hi, my name is Vitalii</h2>
                    <h3>React Frontend developer</h3>
                    <h4>with passion for learning new technologies and creating website.</h4>
                    <a
                        download="CV_VitaliiVelychko_Front-end_developer.pdf"
                        href="./../../media/CV_VitaliiVelychko_Front-end_developer.pdf"
                        target="_blank"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Description;
