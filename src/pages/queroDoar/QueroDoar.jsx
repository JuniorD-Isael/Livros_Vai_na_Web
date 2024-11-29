import logoForm from '../../assets/form-livro.png';
import s from './queroDoar.module.scss';

export const QueroDoar = () => {
    return (
        <section className={s.queroDoarSection}>
            <p>Por favor preencha o formulário abaixo com as suas informações.</p>
            <form action="">
                <div>
                    <img src={logoForm} alt="" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" id='' placeholder='Titulo'/>
                <input type="text" id='' placeholder='Categoria'/>
                <input type="text" id='' placeholder='Autor'/>
                <input type="text" id='' placeholder='Link da Imagem'/>
                <input type="submit" value="Doar" className={s.buttonDoar}/>
            </form>
        </section>
    );
}