import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { HeaderDrawerProvider } from "./contexts/HeaderDrawerContext"
import { client } from "./lib/apollo"
import { Router } from "./Router"

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
