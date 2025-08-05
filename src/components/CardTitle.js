import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';


const CardTitle = () => {
    const movies = useSelector((state) => state.fetchvideos)
    console.log(movies);
    useEffect(() => {
        console.log('Movies updated:', movies);
    }, [movies]);
    return (
        <Row >
            {
                movies ? (movies.map((data, index) => {
                    return (
                        <Col key={data.id} lg="3" md="4" className='culomn'>
                            <Link to={`/movie/${data.id}`}>
                                <div className='Card'>
                                    <div className='Card-img'>
                                        <img src={`https://image.tmdb.org/t/p/w500/` + data.poster_path} height={'400px'} width={'300px'} alt='' />
                                    </div>
                                    {/* <div className='card-overlay'> */}
                                    <div className='Card-parag   '>
                                        <p>اسم الفيلم :{data.title}</p>
                                        <p>تاريخ الاصدار :{data.release_date}</p>
                                        <p>اللغة : {data.original_language}</p>
                                        <p>التقييم : {data.vote_average}</p>
                                    </div>
                                    {/* </div> */}
                                </div>
                                <div className='cardTitle'>{data.title}</div>
                            </Link>
                        </Col>
                    )
                })) : (<h1 className='text-center'>sorry ,there is no movies for now </h1>)
            }
        </Row>




    )
}

export default CardTitle;