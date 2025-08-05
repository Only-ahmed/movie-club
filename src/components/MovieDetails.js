import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetMovieDetails } from '../redux/action/AllMoviesAction';
// import movies from './App'


const MovieDetails = ({ movies }) => {
    const id = useParams()
    const dispatch = useDispatch()
    const movieID = useSelector((state) => state.movieDetails)
    useEffect(() => {
        dispatch(GetMovieDetails(id))
    }, [dispatch, id])
    return (
        <div className='MainFlexDiv'>
            {movieID ?
                <div>
                    <div className='flexDiv'>
                        <div className='a25'>
                            <img className='imgRouter' src={`https://image.tmdb.org/t/p/w500/` + movieID.poster_path} alt='img' />
                        </div>
                        <div className='a75'>
                            <p>اسم الفيلم : {movieID.title}</p>
                            <p>تاريخ الاصدار : {movieID.release_date}</p>
                            <p>اللغة : {movieID.original_language}</p>
                            <p>التقييم : {movieID.vote_average}</p>
                            <p className='companiesTitle'>شركات الانتاج :</p>
                            <div className='companies'>
                                {movieID.production_companies.map((data) => {
                                    return (
                                        <div className='innerCompanies' key={data.id}>
                                            <div>
                                                <span>{data.name || '???'} </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='a100'>
                        <p>قصة الفيلم :<br /><br />{movieID.overview || 'no information given'}</p>
                    </div>
                    <div className='Routerbtn'>
                        <Link to='/'>
                            <button className='Routerbtn1'>عودة للرئيسية</button> <br />
                        </Link>
                        <button className='Routerbtn1'>مشاهدة الفيلم </button>
                    </div>
                </div> : <h1>error</h1>
            }
        </div>




    )
}

export default MovieDetails;