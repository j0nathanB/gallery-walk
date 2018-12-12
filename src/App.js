import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import UserPics from './components/body/userPics'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri : "http://localhost:4000/graphql"
})


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <Header />
          <UserPics apolloClient={client}/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
