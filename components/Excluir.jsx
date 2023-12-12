import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from 'axios';

// Passa a propriedade ID

function Excluir({id}){

    const [show, setShow] = useState(false)

    function excluirDados(){
        axios.delete("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then(() => location.reload())
        .catch(() => console.log("Erro ao excluir."))
    }

    return(
        <>
            <span style={{cursor: "pointer"}}onClick={() => setShow(true)}>
                <RiDeleteBin5Line size={20} className='text-danger'></RiDeleteBin5Line>
            </span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Excluir</h2>
                </Modal.Header>
                <Modal.Body>
                    <p>Deseja realmente excluir?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button on onClick={excluirDados} variant='danger'>Excluir</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Excluir