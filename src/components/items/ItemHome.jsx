import React, { useEffect, useMemo, useState } from "react";
import { Movie, MovieSharp, Tv, TvRounded, TvSharp } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Chip } from "@mui/material";
import { Star } from "@mui/icons-material";

//2  u
//luego on click de estos item se va a otro componente y params ITEMContainer
export const ItemHome = ({ data }) => {
    const id = data.id;

    const baseUrl = "https://image.tmdb.org/t/p";
    const fileSize = "w200";
    const filePath = data.poster_path;
    const imgUrl = `${baseUrl}/${fileSize}/${filePath}`;
    const genreId = data.genre_ids;
    const title = data.title || data.name;
    const overview = data.overview;
    const mediaType = data.media_type;
    const voteAv = data.vote_average;
    
    const credit_id = data.credit_id;
    const character = data.character;
    const name = data.name;
    const department = data.department;
    const job = data.job;
    const profile_path = data.profile_path;
    const profileUrl = `${baseUrl}/${fileSize}${profile_path}`;

    //const score = parseInt(data.vote_count / data.vote_average);
    //const score = parseInt(data.vote_average / data.vote_count );

    //console.log(data)

    return (
        <Link to={`movies/${id}`}>
            <div className="item-info flex-column" id={genreId}>
                <div className={`hover-card`}>
                    {title && <div className="subtitle name">{title}</div>}
                    {character && <div>({character})</div>}
                    {department && <div>{department}</div>}
                    {job && <div>{job}</div>}

                    <div className="subtitle media">
                        {mediaType === "tv" && <TvSharp />}
                        {mediaType === "movie" && <MovieSharp />}
                        {mediaType == null && ""}
                    </div>

                    {voteAv && <div className="subtitle rate">{voteAv}</div>}
                    {overview && (
                        <p className="subtitle overview">{overview}</p>
                    )}
                </div>

                {imgUrl && 
                <div className="poster">
                    <img className="poster-img" src={imgUrl} alt={title || name} />
                </div>}

                {profileUrl && 
                <div className="poster">
                    <img className="poster-img" src={profileUrl} alt={title || name} />
                </div>}
            </div>
        </Link>
    );
};

// <Chip variant="soft" startDecorator={<Sun />}>
//   Today is sunny
// </Chip>
// <Chip variant="soft" startDecorator={<Cloud />}>
//   Tomorrow is cloudy
// </Chip>
