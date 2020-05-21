import React, { useState } from 'react';
import Modal from 'react-modal';
import MoviesList from './MoviesList.js';
import './assets/style.css';
const ratingTab = [1,2,3,4,5];
const movies = [
    {
        title: '3 Idiots',
        poster: 'https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,694,1000_AL_.jpg',
        rating: 5,
        year: 2009
    },

    {
        title: '1917',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SY1000_CR0,0,631,1000_AL_.jpg',
        rating: 2,
        year: 2019
    },

    {
        title: 'Capharnaüm',
        poster: 'https://m.media-amazon.com/images/M/MV5BMmExNzU2ZWMtYzUwYi00YmM2LTkxZTQtNmVhNjY0NTMyMWI2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,679,1000_AL_.jpg',
        rating: 3,
        year: 2018
    },

    {
        title: 'Batman Begins',
        poster: 'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY268_CR9,0,182,268_AL_.jpg',
        rating: 4,
        year: 2005
    },

];



const MoviesContainer = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [listOfMovies, setMovie] = useState(movies);

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [rating, setRating] = useState('');
    const [year, setYear] = useState('');

    const openModal = () => { setIsOpen(true); }
    const closeModal = () => {
        setIsOpen(false);
        setTitle('');
        setPoster('');
        setRating('');
        setYear('');
    }
    const customStyles = {
        content: {
            width: '50%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    const addMovie = (e) => {
        e.preventDefault();
        let newMovie = {
            title: { title }.title ? { title }.title :"Missing title",
            poster: { poster }.poster ? { poster }.poster  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPS91SXO_J_XCdlf8rbrOLyoh3HEAFyrCVzg8co1tuFf_Yb3e1&usqp=CAU',
            rating: { rating }.rating ?{ rating }.rating : 1,
            year: { year }.year
        };
        closeModal();
        movies.push(newMovie)
        return setMovie(movies);

    }

    const handleSubmitMovie = (event) => {
       event.preventDefault();
        setMovie(movies);
        const search = document.querySelector('input[name="movie"]').value;
        const  find =  movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()) );
       
        return setMovie(find);
    }; 

    const handleChangeRating = (event) => {
        
        setMovie(movies);
        const rating =  movies.filter(movie => movie.rating == event.target.value);
        
        return rating.length >0 ? setMovie(rating) : setMovie(movies);
     };

    const handleReset = (event) => {
        return setMovie(movies);
    } 

    return (
        <section className="moviesContainer">
            <header>
                <button className="btn" onClick={openModal}>Add movie</button>
                <form onSubmit={handleSubmitMovie}>
                    <div className="selectGroup">
                        <input type="text" name="movie" placeholder="Filter by name"/>
                        <button className="btn" type="submit"><svg className="svg-icon" viewBox="0 0 20 20">
                            <path fill="#fff" d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                            </svg>
                        </button>
                    </div>
                </form>
                
                <div className="selectGroup">
                    <label className="btn">Filter by rating <span className="star"></span></label>
                    <select onChange={handleChangeRating}>{ratingTab.map((value) => <option key={value}>{value}</option>)}</select>
                </div>
                <button className="btn" onClick={handleReset}>Reset</button>
            </header>
            <div>
                <h1>Movie Bank</h1>
                <MoviesList movies={listOfMovies} />
            </div>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="modalHeader">
                    <strong>Add new movie</strong>
                    <button onClick={closeModal} className="btn">x</button>
                </div>
                <form  onSubmit={addMovie}>
                    <div className="formGroup">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" value={title} onChange={event => setTitle(event.target.value)}  required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="poster">Poster url</label>
                        <input type="url" name="poster" id="poster" value={poster} onChange={event => setPoster(event.target.value)} required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" name="rating" id="rating" min="1" max="5" value={rating} onChange={event => setRating(event.target.value)} required/>
                        <small>Add a note between 1 and 5</small>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="year">Year</label>
                        <input type="number" name="year" id="year" maxLength="4" min="1950" max="2020" value={year} onChange={event => setYear(event.target.value)} />
                        <small>Add movies between 1950 and 2020</small>
                    </div>
                    <div className="formGroup">
                        <button type="submit" className="btn">Add movie</button>
                    </div>


                </form>
            </Modal>

        </section>


    );
}

export default MoviesContainer;
