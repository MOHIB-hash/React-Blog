import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import SinglePost from "./components/singlePost/SinglePost";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
