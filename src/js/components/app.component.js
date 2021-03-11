import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {HomePageComponent} from './pages/homePage.component';
import {GalleryPageComponent} from "../components/pages/galleryPage.component";
import {NoMatchPageComponent} from "../components/pages/noMatch.component";
import HeaderComponent from "../components/layout/header.component";
import {FooterComponent} from "../components/layout/footer.component";

const repoName = "/repo-name/";

export const AppComponent = props =>{
    
    
        return(    
                <Router basename={process.env.NODE_ENV==="development"?null:repoName}>
                        <HeaderComponent/>
                               <Switch>
                                <Route exact path="/" component = {HomePageComponent} />
                                <Route path="/gallery" component = {GalleryPageComponent} />
                                <Route path="*" component = {NoMatchPageComponent} />    
                            </Switch> 
                        <FooterComponent/>          
                </Router>
        )
    
}