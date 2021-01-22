import React, {useState} from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap';

export const ShowMesagge = ({showMessage}) => {
    const [saveMessage, setSaveMessage] = useState('')
    const [toggle, setToggle] = useState(false)
    const Message = () =>{
        setToggle(true)
    }
    console.log(saveMessage);
    return (
        <>
            {
                !toggle && <>
                    <FormGroup>
                        <Label for="exampleText">Escribe un mensaje bonito que quieras mostrar</Label>
                        <Input type="textarea" name="text" id="exampleText" onChange={(e) => setSaveMessage(e.target.value)} />
                    </FormGroup>
                    <Button onClick={Message}>Submit</Button>
                </>
            }
            {
                showMessage && <div>{saveMessage}</div>
            }
            
        </>
    )
}