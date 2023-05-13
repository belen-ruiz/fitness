import React from 'react'
import { Legal } from './Legal'
import { MoreInfo } from './MoreInfo'
import { SocialMedia } from './SocialMedia'

export const Footer = () => {
  return (
    <div className='container-footer flex-column'>
      <SocialMedia />
      <MoreInfo />
      <Legal />
    </div>
  )
}
