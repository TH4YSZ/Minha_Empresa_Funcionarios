import Conteudo from "../components/Conteudo"
import Header from "../components/Header"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { useState } from "react"

function Login(){
    const [alert, setAlert] = useState(false) //Variável, função q irá alterar o valor método que serve para trabalhar com gerenciamento de status. Array de duas posições 
    // Previnindo comportamento padrão
    function autenticar(event){
        event.preventDefault()
        //Retorna o elemento HTML
        const email = event.target[0].value
        const pass = event.target[1].value //Retorna o valor (Captura o valor do elemento)

        // Compara o valor e o tipo de dado (===)

        if (email === "admin@admin" && pass === "123"){
            localStorage.setItem("key", "token") //Salva o token no LocalStorage
            location.href = "/painel" //método do objeto window. Href: imperlink de referência
        }
        else{
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }
    }

    return(
        <>
            <Header btn={false}/>
            <Conteudo>
                <h2>Login</h2>
                <Form onSubmit={autenticar}>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Insira seu e-mail" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control type="password" placeholder="Insira sua senha" required/>
                    </Form.Group>
                    <Button className="mt-3" type="submit">Login</Button>
                    {alert ? <Alert className="mt-3" variant="danger">Usuário e senha incorretos</Alert> : ""}
                </Form>
            </Conteudo>
        </>
    )
}

export default Login