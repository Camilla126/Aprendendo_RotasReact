import { Link } from 'react-router-dom'

function Contato (){
    return(
        <div>
            <h1>Página Contato</h1>
            <span>Contato da empresa </span> <br />

            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
        </div>
    )
}

export default Contato;