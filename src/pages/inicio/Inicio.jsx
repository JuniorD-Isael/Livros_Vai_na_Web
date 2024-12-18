import s from './inicio.module.scss';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';

export const Inicio = () => {
    return (
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar ?</h2>
            </section>
            <div className={s.containerCards}>
                <section>
                    <img src={img1} alt="Imagem representando uma comunidade" />
                    <p> Oferece livros a quem não tem acesso,
                        ajudando a reduzir a exclusão social.</p>
                </section>
                <section>
                    <img src={img2} alt="Um desenho de uma pessoa lendo um livro" />
                    <p>Estimula o hábito da leitura
                        e o aprendizado contínuo.</p>
                </section>
                <section>
                    <img src={img3} alt="Uma imagem de um grupo de pessoas lutando pela educação e conhecimento" />
                    <p>Fornece conhecimento e inspiração,
                        permitindo que indivíduos transformem suas vidas.</p>
                </section>
                <section>
                    <img src={img4} alt="Um desenho de uma balança" />
                    <p>Garante que todos, independentemente de sua condição,
                        tenham oportunidades de aprendizado.</p>
                </section>
            </div>
        </main>
    );
}