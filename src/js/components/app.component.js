import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePageComponent from './pages/homePage.component';
import GalleryPageComponent from "../components/pages/galleryPage.component";
import NoMatchPageComponent from "../components/pages/noMatch.component"



export const AppComponent = props =>{
    
    
        return(    
                <Router>
                    
                               <Switch>
                                <Route exact path="/" component = {HomePageComponent} />
                                <Route path="/gallery" component = {GalleryPageComponent} />
                                <Route path="*" component = {NoMatchPageComponent} />    
                            </Switch> 
                            
                    
                </Router>
        )
    
}