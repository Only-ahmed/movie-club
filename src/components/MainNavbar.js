import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Searchfunc, fetchallmovies } from '../redux/action/AllMoviesAction';


const MainNavbar = () => {
    const dispatch = useDispatch()
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        if (searchTerm) {
            dispatch(Searchfunc(searchTerm));
        } else {
            dispatch(fetchallmovies());
        }
    };
    return (

        <Navbar bg="dark" data-bs-theme="dark" className='p-4'>
            <Container>
                <Navbar.Brand href="/">Movie Club</Navbar.Brand>
                <Nav className="NavInput1">
                    <input onChange={(e) => handleSearch(e)} type='text' placeholder='search' className='NavInput' ></input>
                </Nav>
            </Container>
        </Navbar>





    );
}

export default MainNavbar;