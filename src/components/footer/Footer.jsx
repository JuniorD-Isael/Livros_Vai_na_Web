import s from './footer.module.scss';
import logoFacebook from '../../assets/facebook.png';
import logoInstagram from '../../assets/instagram.png';
import logoTwitter from '../../assets/Twitter.png';
import logoYoutube from '../../assets/youtube.png';
import logoLinkedin from '../../assets/linkedin.png';

export default function Footer() {
    return (
        <footer className={s.footer}>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="Logo branco da rede social Facebook" /></a>
                    <a href=""><img src={logoTwitter} alt="Logo branco da rede social Twitter" /></a>
                    <a href=""><img src={logoYoutube} alt="Logo branco da rede social Youtube" /></a>
                    <a href=""><img src={logoLinkedin} alt="Logo branco da rede social Linkedin" /></a>
                    <a href=""><img src={logoInstagram} alt="Logo branco da rede social Instagram" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}