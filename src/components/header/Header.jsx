import logoLivro from '../../assets/logoLivro.png';
import lupa from '../../assets/lupa.png';
import {Inicio} from '../../pages/inicio/Inicio';
import {LivrosDoados} from '../../pages/livrosDoados/LivrosDoados';
import {QueroDoar} from '../../pages/queroDoar/QueroDoar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <section>
                    <img src={logoLivro} alt="Um logotipo de um livro" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav>
                    <ul>
                        <li><Link to={"/"}>Inico</Link></li>
                        <li><Link to={"/livros-doados"}>Livros Doados</Link></li>
                        <li><Link to={"/quero-doar"}>Quero doar</Link></li>
                    </ul>
                </nav>
                <section>
                    <input type="search" name="" id="" placeholder='O que você procura ?' />
                    <button><img src={lupa} alt="imagem de uma lupa branca" /></button>
                </section>
            </header>

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/livros-doados" element={<LivrosDoados />} />
                <Route path="/quero-doar" element={<QueroDoar />} />
            </Routes>
        </BrowserRouter>
    );
}