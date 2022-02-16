import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './style.css';

function Home(){
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            const response = await api.get('r-api/?api=filmes')
            // console.log(response.data);
            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();
    }, []);

    if(loading){
        return(
            <div className="container">
                <h1>Carregando...</h1>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filme.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome}/>
                            <Link to={`/filmes/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;