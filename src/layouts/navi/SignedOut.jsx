import React from 'react'
import { MenuItem, Button, Dropdown } from 'semantic-ui-react'

export default function SignedOut({ signIn }) {
    return (
        <div>
            <MenuItem>
            <Button>
                    <Dropdown pointing="top right" text="Kayıt Ol">
                        <Dropdown.Menu >
                            <Dropdown.Item  text="İş Veren" icon="angle double right" />
                            <Dropdown.Item  text="İş Arayan" icon="angle double right" />
                        </Dropdown.Menu>
                    </Dropdown>
                </Button>
                <Button style={{marginLeft:'0.5em'}} onClick={signIn} primary >Giriş Yap</Button>
            </MenuItem>
        </div>
    )
}

//as={NavLink} to="/employerRegister"
//as={NavLink} to="/jobSeekerRegister"
