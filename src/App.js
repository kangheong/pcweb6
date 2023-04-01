import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from "./views/LoginPage";
import PostPageAdd from './views/PostPageAdd';
import PostPageDetails from './views/PostPageDetails';
import PostPageHome from "./views/PostPageHome";
import PostPageUpdate from './views/PostPageUpdate';
import SignUpPage from "./views/SignUpPage";
import { Nav, Navbar, Container } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  return (
    <BrowserRouter>
          <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">Tinkergram</Navbar.Brand>
          <Nav>
            <Nav.Link href="/add">New Post</Nav.Link>
            <Nav.Link onClick={(e) => signOut(auth) }>🚪</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Routes>
      <Route path="/" element={<PostPageHome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/add" element={<PostPageAdd />} />
      <Route path="/post/:id" element={<PostPageDetails />} />
      <Route path="/update/:id" element={<PostPageUpdate />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
