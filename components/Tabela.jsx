import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { useState, useEffect} from 'react'
import Editar from './Editar'
import Excluir from './Excluir'

function Tabela(){

    const [btnValue, setBtnValue] = useState("Atualizar")
    const [dados, setDados] = useState([])

    //UseEffect: controlar efeitos colaterais da aplicação (um outro aplicativo poderia atualizar a interface (add mais um funcionário))
    useEffect(() => {
        axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios")
        .then((resposta) => {
        setDados(resposta.data) //Traz resposta da requisição e muda o status da variável dados
        }).catch((error) =>{
            console.log(error)
        })
    }, [])
    return(
        <>
        <button className='btn' onClick={() => setBtnValue("Atualizado")}>{btnValue}</button>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Ação</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {dados.map((item, key) => (
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.cargo}</td>
                            <td className='d-flex gap-3'>
                                <Editar id={item.id}/>
                                <Excluir id={item.id}/> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Tabela