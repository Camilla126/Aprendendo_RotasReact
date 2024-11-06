import { Link } from 'react-router-dom';


function Home() {
 
  return ( 
    <div className="container">
<h1>Home</h1> <br />

<Link to='/sobre'>Sobre</Link> <br />
<Link to='/contato'>Contato</Link>

<hr />

<Link to="/produto/123">Acessar Produto 123</Link>
 </div>
 );}
export default Home
