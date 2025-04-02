import axios from 'axios';
import logoForm from '../../assets/form-livro.png';
import s from './queroDoar.module.scss';
import { useState } from 'react';


export const QueroDoar = () => {

    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url,setImage_url] = useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }
    
    const capturaImage_url = (e) => {
        setImage_url(e.target.value)
    }

    const envioDados = async () => {
        const dadosParaEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://vainaapi.onrender.com/doar", dadosParaEnviar)
    }

    return (
        <section className={s.queroDoarSection}>
            <p>Por favor preencha o formulário abaixo com as suas informações.</p>
            <form onSubmit={(e)=> e.preventDefault()}>
                <div>
                    <img src={logoForm} alt="Um logo de um livro azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" id='' placeholder='Titulo' onChange={capturaTitulo} required/>
                <input type="text" id='' placeholder='Categoria' onChange={capturaCategoria} required/>
                <input type="text" id='' placeholder='Autor' onChange={capturaAutor} required/>
                <input type="text" id='' placeholder='Link da Imagem' onChange={capturaImage_url} required/>
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={envioDados}/>
            </form>
        </section>
    );
}