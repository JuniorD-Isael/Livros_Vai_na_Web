import s from './livrosDoados.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const LivrosDoados = () => {

    const [livros, setLivros] = useState([])

    const getLivros = async() => {
        const resposta = await axios.get("https://vainaapi.onrender.com/livros")
        setLivros(resposta.data.livros)
    }
    useEffect(() => {
        getLivros()
    }, [])

    return (
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                {livros.map((livro, index) => (
                    <section key={index}>
                        <div className={s.content}>
                            <h3>{livro.titulo}</h3>
                            <img src={livro.image_url} alt={`Imagem da capa do livro ${livro.titulo}`} />
                            <h4>{livro.autor}</h4>
                            <p>{livro.categoria}</p>
                        </div>
                    </section>
                ))}
            </section>
        </section>
    );
}
