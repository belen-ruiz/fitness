import React from 'react'

export const Reviews = ({ data }) => {
    const username = data.author_details.username;
    const rating = data.author_details.rating;
    const content = data.content;
    const uploaded = data.created_at;

    const baseUrl="https://image.tmdb.org/t/p";
    const fileSize= "w200";
    const filePath= data.author_details.avatar_path;
    const avatar = `${baseUrl}/${fileSize}/${filePath}`

  return (
    <div>
        <div> {avatar} </div>
        <div> {username} </div>
        <div> {rating}pts. </div>
        <div> "{content}" </div>
        <div> Uploaded: {uploaded} </div>
    </div>
  )
}
