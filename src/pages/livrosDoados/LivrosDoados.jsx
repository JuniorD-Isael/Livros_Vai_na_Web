import livroProtagonista from '../../assets/livroProtagonista.png';
import s from './livrosDoados.module.scss';

export const LivrosDoados = () => {
    return (
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                <section>
                    <div>
                        <img src={livroProtagonista} alt="Imagem da capa do livro O Protagonista" />
                        <h3>O protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
            </section>
        </section>
    );
}
