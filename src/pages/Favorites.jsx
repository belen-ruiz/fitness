import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navBar/NavBar";
import { Footer } from "../components/footer/Footer";
import { Loader } from "../components/atoms/Loader";

export const Favorites = () => {
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         slicedTvshows && setLoading(false)
    //     }, 3000);
    // }, [])
        

    return (
        <div>
            <NavBar />

            {
            //loading ? <Loader /> : 
            
            <div className="container-page">
                
            </div>}

            <Footer />
        </div>
    );
};
