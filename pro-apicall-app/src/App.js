import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class App extends React.Component {

  state = {
    isLoaded : false,
    response : []
  };

  async componentDidMount() {

    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const result = await fetch(apiUrl);
    const response = await result.json();
    this.setState ({isLoaded:true, response:response})
    
  }

  renderTableRows =(response, index) =>{
    return(
        <tr key={index}>
          <td>{response.id}</td>
          <td>{response.name}</td>
          <td>{response.email}</td>
          <td>{response.phone}</td>
        </tr>
    )
  }

  render(){
    return(
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.state.response.map(this.renderTableRows)}
            </tbody>
          </table>
        </div>
    )
  }
}
