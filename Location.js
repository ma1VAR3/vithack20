import React, { Component } from 'react'
import axios from "axios"

export default class Location extends Component {
    state={
        loading:true,
        location:null,
    }

    componentDidMount = () => {
        axios.get('https://api.rootnet.in/covid19-in/contacts').then( response => {
    
            var loc=response.data.data.contacts.regional
            // loc.forEach(function(data){
            //     console.log(data)
            // })
            this.setState({location:loc[0].loc})
            // console.log(loc[0].loc)
            
        })
    }

    render() {
        return (
            <div>
                
                <p>location is: {this.state.location}</p>
                <hr></hr>
            </div>
        )
    }
}
