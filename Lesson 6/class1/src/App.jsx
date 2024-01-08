import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";

function App() {
    return (
        <Container className="p-5 w-50 border mt-5">
            <Header/>
            <List/>
            <Footer/>
        </Container>
    );
}

export default App;
