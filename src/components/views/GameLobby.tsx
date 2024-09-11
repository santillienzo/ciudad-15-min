import { Button } from "@/components/ui/button"

const GameLobby = () => {
  return (
    <div className="flex items-end w-full h-full bg-red-50">
      <div className="flex flex-col">
        <Button>Jugar</Button>
        <Button variant='outline'>Registrate</Button>
      </div>
    </div>
  )
}

export default GameLobby