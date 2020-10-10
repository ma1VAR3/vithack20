import React from 'react'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

// import {contact,notif,hospital} from './components'
// import {fetchdata} from './api'
import {fetchdata4} from './api'    

class App extends React.Component  {

    constructor(props){
        super(props);
        
        this.state={
            posts:[]
        }
    }

    async componentDidMount(){
        const data= await fetchdata4()

         var posts=data
        //  this.setState({
        //      posts:posts
        //  })

        console.log(posts)
    }

    render(){
        // const columns=[
        //     {
        //         Header:"location",
        //         accessor:"loc"
        //     },
        //     {
        //         Header:"number",
        //         accessor:"number"
        //     }
        // ]
        return(
            <div>
                <h1 >HELPLINE NUMBERS</h1>
                {/* <ReactTable columns={columns} data={this.state.posts}></ReactTable> */}
            </div>
        )
    }
}

 export default App