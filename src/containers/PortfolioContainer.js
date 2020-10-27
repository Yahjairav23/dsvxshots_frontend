import React, { Component } from 'react'
import PortfolioButtons from '../components/PortfolioButtons'
import PhotoAlbum from './PhotoAlbum'

export default class Portfolio extends Component {

    let 
render(){
    return(
        <>
        <h1>Welcome to my portfolio</h1>
        <PortfolioButtons/>
        <PhotoAlbum/>
        </>
    )
}
}