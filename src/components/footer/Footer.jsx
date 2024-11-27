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
                    <a href=""><img src={logoFacebook} alt="" /></a>
                    <a href=""><img src={logoTwitter} alt="" /></a>
                    <a href=""><img src={logoYoutube} alt="" /></a>
                    <a href=""><img src={logoLinkedin} alt="" /></a>
                    <a href=""><img src={logoInstagram} alt="" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>© 2021 - Todos os direitos reservados</p>
            </section>
        </footer>
    )
}