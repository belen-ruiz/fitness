import React from "react";
import { FormatListBulletedRounded } from '@mui/icons-material'
import { BookmarkAddRounded } from '@mui/icons-material'
import { FavoriteRounded } from '@mui/icons-material'
import { Star } from '@mui/icons-material'

export const ItemBanner = ({ data }) => {
    const {
        title,
        original_title,
        poster_path,
        release_date,
        vote_average,
        vote_count,
        popularity,
        overview,
        genres,
        budget,
        homepage,
        production_companies
    } = data;

    const baseUrl = "https://image.tmdb.org/t/p";
    const fileSize = "w200";
    const filePath = `${poster_path}`;
    const imgUrl = `${baseUrl}/${fileSize}/${filePath}`;

    return (
        <div className="">
            <div className="header">
                <div className="info de peli">
                    <div className="titulo">{title} </div>
                    <div className="titulo original">{original_title} </div>
                    <div className="año"> {release_date}</div>
                </div>

                <div className="puntuajes">
                    <div className="titulo">{vote_count} </div>
                    <div className="titulo original">{vote_average} </div>
                    <div className="titulo"> {popularity}</div>
                </div>
            </div>

            <div className="img banner">
                <img src={imgUrl} alt={`img-${poster_path}`} />
            </div>

            <div>
                {genres && genres.map((e) => <div key={e.name}>{e.name}</div>)}
            </div>

            <div>{overview}</div>
            <div>{budget}</div>
            <div>{homepage}</div>

            <div>
                {production_companies &&
                    production_companies.map((e) => <div key={e.name}>{e.name}</div>)}
            </div>

            <div>
                <div>
                    <Star />
                </div>
                <div>
                    <FormatListBulletedRounded />
                </div>
                <div>
                    <FavoriteRounded />
                </div>
                <div>
                    <BookmarkAddRounded />
                </div>
            </div>
        </div>
    );
};
