import React, { useEffect, useState } from 'react'
import CardTitle from './CardTitle'
import Paginateion from './Pagination';
import { toUpperPage } from '../redux/action/AllMoviesAction';


const Collection = () => {
    const [up, setUp] = useState();
    useEffect(() => {
        const onResize = () => setUp(window.scrollY);
        window.addEventListener('scroll', onResize);
        return () => window.removeEventListener('scroll', onResize);
    }, [up]);

    return (
        <div>
            <CardTitle />
            <Paginateion />
            <span className={toUpperPage(up)} onClick={() => setUp(window.scrollTo({ top: 0, behavior: "smooth" }))}>&#8593;</span>
        </div >



    )



}

export default Collection;