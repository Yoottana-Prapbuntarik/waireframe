import React, { Component } from 'react'
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
class MainLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                
                <Footer/>
            </div>
        )
    }
}

export default MainLayout
