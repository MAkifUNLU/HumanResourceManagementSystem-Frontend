import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSingOut() {
        setIsAuthenticated(false)
    }

    function handleSingIn() {
        setIsAuthenticated(true)
    }

    return (
       <div className="Navi">
            <div>
                <Menu inverted fixed='top'>
                    <Container>
                        <Menu.Item name='Anasayfa'/>
                        <Menu.Menu position='right'>
                            {isAuthenticated ? <SignedIn signOut={handleSingOut} />
                                : <SignedOut signIn={handleSingIn} />}
                        </Menu.Menu>
                    </Container>
                </Menu>
            </div>
        </div>
    )
}
//as={NavLink} to="/"
