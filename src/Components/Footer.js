import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="container-fluid" style={{position:'absolute',bottom:'0',left:'0',right:'0'}}>
                <div className="row">
                    <div className="col-12 bg-dark text-center text-white py-5">
                        CopyRight &copy; 2019 by Yoottana Prapbuntarik
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
