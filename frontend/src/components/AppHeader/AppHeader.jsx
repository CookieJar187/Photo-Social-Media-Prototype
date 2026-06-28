import { useState } from 'react';

import CreatePostModal from './components/CreatePostModal'
import LogoutConfirmationModal from './components/LogoutConfirmationModal'

function AppHeader() {

    const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);

    return (
        <header className="header">

            <h1 className="app-title">Photo Social Media Prototype</h1>

            <button onClick={() => setIsLogoutOpen(true)}>Logout</button>
            <button onClick={() => setIsCreatePostOpen(true)}>New Post</button>

            {isLogoutOpen && (
                <LogoutConfirmationModal onClose={() => setIsLogoutOpen(false)}/>
            )}
            {isCreatePostOpen && (
                <CreatePostModal onClose={() => setIsCreatePostOpen(false)}/>
            )}

        </header>
    )
}

export default AppHeader