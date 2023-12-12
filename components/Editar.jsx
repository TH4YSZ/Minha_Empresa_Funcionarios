import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { MdModeEditOutline } from "react-icons/md";
import Formulario from './Formulario'
// Passa a propriedade ID

function Editar({id}){

    // setShow(true) é usado para tornar visível a modal, e setShow(false) é usado para ocultar a modal.
    const [show, setShow] = useState(false)
    const [funcionario, setFuncionario] = useState([])

    // function editarDados(){
    //     axios.put("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
    //     .then(() => location.reload())
    //     .catch(() => console.log("Erro ao editar."))
    // }

    useEffect(() => {
        axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then((resposta)=>{
            setFuncionario(resposta.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return(
        <>
            <span style={{cursor: "pointer"}} onClick={() => setShow(true)}>
            <MdModeEditOutline size={20} className='text-success'/>
            </span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Editar</h2>
                </Modal.Header>
                <Modal.Body>
                    <Formulario funcionario={funcionario} setShow={setShow}/>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Editar