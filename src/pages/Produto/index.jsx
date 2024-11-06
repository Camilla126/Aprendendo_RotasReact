import { useParams } from "react-router-dom";

function Produto(){

const { id } = useParams();

    return(
        <div>
            <h2>DETALHE DO PRODUTO</h2>
           
           <span>
            MEU PRODUTO É 123 {id}
            </span> 
        </div>
    )
}
export default Produto;