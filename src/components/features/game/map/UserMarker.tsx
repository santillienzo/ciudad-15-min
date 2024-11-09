import { AdvancedMarker } from "@vis.gl/react-google-maps"
import { motion } from "framer-motion"
import { User } from "lucide-react"

interface Props {
  currentPosition: {lat: number, lng: number}
}

const UserMarker = ({currentPosition}: Props) => {
  return (
    <AdvancedMarker position={currentPosition} zIndex={1000}>
        <div 
            className='w-[30px] h-[30px] rounded-full bg-background-secondary-muted flex items-center justify-center'
            style={{
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'
            }}
        >
            <motion.div 
                className='w-[20px] h-[20px] rounded-full bg-background-secondary flex items-center justify-center'
                animate={{
                scale: [1, 1.2, 1],
                }}
                transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
                }}
            >
          <User size={20} color='white'/>
        </motion.div>
      </div>
    </AdvancedMarker>
  )
}

export default UserMarker