// Import styles
import "./scss/AllStyles.scss";

import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import NavBar from "./components/NavBar";
import FooterNavBar from "./components/FooterNavBar";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

// Import pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CharacterCreation from "./pages/CharacterCreation";
import CharacterSheet from "./pages/CharacterSheet";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app-container">
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route
                path="/characterCreation"
                element={<CharacterCreation />}
              />
              <Route path="/characterSheet" element={<CharacterSheet />} />
            </Routes>
          </div>
          <FooterNavBar />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
