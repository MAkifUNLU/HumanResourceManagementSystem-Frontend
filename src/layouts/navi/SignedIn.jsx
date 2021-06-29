import React from 'react'
import { MenuItem, Image, Dropdown } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <MenuItem>
            <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/77721632?s=60&v=4"></Image>
            <Dropdown pointing="top " text="Akif">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </MenuItem>
        </div>
    )
}
