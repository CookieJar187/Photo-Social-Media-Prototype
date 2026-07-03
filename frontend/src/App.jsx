import { Routes, Route } from "react-router-dom";

import ProfilesPage from './pages/ProfilesPage/ProfilesPage.jsx'
import ExplorePage from './pages/ExplorePage/ExplorePage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import SignupPage from './pages/SignupPage/SignupPage.jsx'
import PostPage from './pages/PostPage/PostPage.jsx'

import GuestRoute from "./components/GuestRoute/GuestRoute.jsx";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route element={<GuestRoute/>}>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
        </Route>

        <Route element={<ProtectedRoute/>}>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/explore" element={<ExplorePage/>}/>
          <Route path="/profiles" element={<ProfilesPage/>}/>
          <Route path="/post/:postId" element={<PostPage/>}/>
        </Route>

      </Routes>
    </main>
  )
}

export default App