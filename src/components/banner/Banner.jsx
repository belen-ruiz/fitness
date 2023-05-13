import { InfoOutlined, LiveTvRounded, PlayCircleOutline } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonInfo } from "../atoms/ButtonInfo"

export const Banner = () => {
  return (
    <div className='container-banner mm-1'>
        <div className='banner-info flex-column'>
            <Link to={"/series"}className='container-id flex-center'>
                <div className='tv-icon'><LiveTvRounded /></div>
                <div className='id-type'>SERIE</div>
            </Link> 
            <div className='title-m'>
                QUEEN EYE <span>more than a makeover</span>
            </div>

            <div className='season'>Ve la temporada 7</div>
            
            <div className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cupiditate porro blanditiis quis modi nihil ad molestiae qui accusamus velit mollitia minima eveniet quos asperiores, aspernatur suscipit consectetur enim placeat.
            </div>
            <div className='btn-container flex-center'>
                <ButtonInfo>
                    <span><PlayCircleOutline/></span>
                    REPRODUCIR
                </ButtonInfo>
                <ButtonInfo>
                    <span><InfoOutlined/></span>
                    Mas Información
                </ButtonInfo>
            </div>
        </div>        
    </div>
  )
}
