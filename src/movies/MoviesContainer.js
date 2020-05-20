import React, { useState } from 'react';
import Modal from 'react-modal';
import MoviesList from './MoviesList.js';
import './assets/style.css';

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
        return setMovie([...listOfMovies, ...[newMovie]]);

    }

    const handleChangeMovie = (event) => {
        setMovie(movies);
        const result = movies.filter(movie => movie.title == event.target.value);
        return setMovie(result);
    };

    const handleChangeRating = (event) => {
        setMovie(movies);
        const rating =  movies.filter(movie => movie.rating == event.target.value);
        return setMovie(rating);
     };

   const handleReset = (event) => {
    return setMovie(movies);
   };

    return (
        <section className="moviesContainer">
            <header>
                <button className="btn" onClick={openModal}>Add movie</button>
                <button className="btn" onClick={handleReset}>Reset Filter</button>
                <div className="selectGroup">
                    <label className="btn">Filter by name</label>
                    <select onChange={handleChangeMovie}>{movies.map((movie) => <option key={movie.title}>{movie.title}</option>)}</select>
                </div>
                <div className="selectGroup">
                    <label className="btn">Filter by rating <span className="star"></span></label>
                    <select value={null} onChange={handleChangeRating}>{movies.map((movie) => <option key={movie.rating}>{movie.rating}</option>)}</select>
                </div>
                
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
