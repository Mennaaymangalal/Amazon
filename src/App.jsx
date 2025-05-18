import { Button } from "@heroui/button"
import { HeroUIProvider } from "@heroui/react"

function App() {


  return (
    <>
      <HeroUIProvider>
      <h1 className="text-3xl font-bold underline">
      Hello world!
       </h1>
       <Button>
        hii
       </Button>
      </HeroUIProvider>
    
    </>
  )
}

export default App
