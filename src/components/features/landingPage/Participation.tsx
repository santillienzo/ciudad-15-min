import RegisterForm from '@/components/common/forms/RegisterForm'
import { CalendarHeart, MapPinned } from 'lucide-react'
import { RiCircleFill } from 'react-icons/ri'
import cityMap from '@/assets/img/citymap.png'
import { Image } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import { variants } from '@/lib/motionVariants'

const Participation = () => {

    const register = () => 'Te registraste correctamente en el evento'

  return (
    <section id='participar' className='bg-background-tertiary text-white py-20 overflow-hidden'>
        <motion.p
            initial={'bottomHidden'}
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={variants}
            className='text-4xl text-center text font-semibold mb-16 max-sm:px-3'
        >
            <span className='text-background-tertiary-foreground'>Participa</span> en nuestra actividad lúdico-educativa donde descubrirás la cercanía de los <span className='text-background-tertiary-foreground'>servicios esenciales</span> de tu ciudad.
        </motion.p>
        <div className='flex justify-between mx-auto max-sm:w-[90%] '>
            <div className='flex flex-col items-center gap-5 w-full'>
                <RegisterForm 
                    variant='secondary'
                    successCallback={register}
                />
                <a href="#instrucciones" className='hover:underline'>¿Cómo jugar?</a>
            </div>
            <div className='hidden md:flex w-full justify-center'>
                <div>
                    <div className='flex flex-col w-full gap-5 mb-8'>
                        <motion.div
                            initial={'rightHidden'}
                            whileInView={'visible'}
                            viewport={{ once: true }}
                            variants={variants}
                            className='flex items-center gap-3'
                        >
                            <span className='block bg-background-primary p-2 rounded-full'>
                                <CalendarHeart />
                            </span>
                            <p>Viernes 22/11 <RiCircleFill className="h-2 inline-flex mb-1" /> 17hs</p>
                        </motion.div>
                        <motion.div 
                            initial={'rightHidden'}
                            whileInView={'visible'}
                            viewport={{ once: true }}
                            variants={variants}
                            className='flex items-center gap-3'
                        >
                            <span className='block bg-background-primary p-2 rounded-full'>
                                <MapPinned />
                            </span>
                            <p>Plaza Independencia</p>
                        </motion.div>
                    </div>
                    <motion.div 
                        initial={'rightHidden'}
                        whileInView={'visible'}
                        viewport={{ once: true }}
                        variants={variants}
                        className='w-96 h-96 rounded-2xl overflow-hidden'
                    >
                        <Image src={cityMap} className='w-full h-full' alt="Ubicación del evento En Busca de la Ciudad de 15 Minutos" />
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Participation