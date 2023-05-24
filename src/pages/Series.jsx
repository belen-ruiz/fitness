import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navBar/NavBar";
import { Footer } from "../components/footer/Footer";
import { ItemListContainer } from "../components/items/ItemListContainer";
import { useDataContext } from "../context/DataProvider";
import { CatBanner } from "../components/banner/CatBanner";
import { Pagintation } from "../components/atoms/Pagination";
import { Loader } from "../components/atoms/Loader";

export const Series = () => {
    const {
        tvshows,
        genresTv,
        currentGenreIds,
        setCurrentGenreIds,
    } = useDataContext();
    
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [TvPerPage, setTvPerPage] = useState(10);
    const totalTv = Object.keys(tvshows).length;
    const totalPages = Math.ceil(totalTv / TvPerPage)

    const slicedTvshows = tvshows.slice(
        (currentPage - 1) * TvPerPage,
        (currentPage - 1) * TvPerPage + TvPerPage
    );


    useEffect(() => {
        setTimeout(() => {
            slicedTvshows && setLoading(false)
        }, 3000);
    }, [])
        

    return (
        <div>
            <NavBar />

            {loading ? <Loader /> : 
            
            <div className="container-page">
                <Pagintation
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <CatBanner
                    genresTv={genresTv}
                    currentGenreIds={currentGenreIds}
                    setCurrentGenreIds={setCurrentGenreIds}
                />
                <ItemListContainer
                    data={slicedTvshows}
                    genresTv={genresTv}
                    currentGenreIds={currentGenreIds}

                />
            </div>}

            <Footer />
        </div>
    );
};
