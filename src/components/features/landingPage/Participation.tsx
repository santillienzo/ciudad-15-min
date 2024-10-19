import RegisterForm from '@/components/common/forms/RegisterForm'
import { CalendarHeart, MapPinned } from 'lucide-react'
import { RiCircleFill } from 'react-icons/ri'
import cityMap from '@/assets/img/citymap.png'
import { Box, Image, Text } from '@chakra-ui/react'

const Participation = () => {

    const register = () => 'Te registraste correctamente en el evento'

  return (
    <Box as={'section'} id='participar' className='bg-background-tertiary text-white py-20'>
        <Text className='text-4xl text-center text font-semibold mb-16 max-sm:px-3'>
            <span className='text-background-tertiary-foreground'>Participa</span> en nuestra actividad lúdico-educativa donde descubrirás la cercanía de los <span className='text-background-tertiary-foreground'>servicios esenciales</span> de tu ciudad.
        </Text>
        <Box className='flex justify-between mx-auto max-sm:w-[90%] '>
            <Box className='flex flex-col items-center gap-5 w-full'>
                <RegisterForm 
                    variant='secondary'
                    successCallback={register}
                />
                <a href="#instrucciones" className='hover:underline'>¿Cómo jugar?</a>
            </Box>
            <Box className='hidden md:flex w-full justify-center'>
                <Box>
                    <Box className='flex flex-col w-full gap-5 mb-8'>
                        <Box className='flex items-center gap-3'>
                            <span className='block bg-background-primary p-2 rounded-full'>
                                <CalendarHeart />
                            </span>
                            <Text>Viernes 22/11 <RiCircleFill className="h-2 inline-flex mb-1" /> 17hs</Text>
                        </Box>
                        <Box className='flex items-center gap-3'>
                            <span className='block bg-background-primary p-2 rounded-full'>
                                <MapPinned />
                            </span>
                            <Text>Plaza Independencia</Text>
                        </Box>
                    </Box>
                    <Box className='w-96 h-96 rounded-2xl overflow-hidden'>
                        <Image src={cityMap} className='w-full h-full' alt="Ubicación del evento En Busca de la Ciudad de 15 Minutos" />
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Participation