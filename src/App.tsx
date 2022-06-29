import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"

import { Router } from "./Router"

import { HeaderDrawerProvider } from "./contexts/HeaderDrawerContext"
import { client } from "./lib/apollo"

function App() {
  return (
    <ApolloProvider client={client}>
      <HeaderDrawerProvider>
        <BrowserRouter>
          <Router />  
        </BrowserRouter>
      </HeaderDrawerProvider>
    </ApolloProvider>
  )
}

export default App
