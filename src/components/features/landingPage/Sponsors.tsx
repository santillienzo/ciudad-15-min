import logo from '@/assets/img/sponsors/laSocial.png'

const Sponsors = () => {
  return (
    <section className="bg-gray-700 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-white text-center mb-4">Nuestro Sponsor</h2>
      <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto mb-12">Agradecemos a nuestro sponsor por su apoyo y confianza para hacer posible este proyecto.</p>
      <div className="flex justify-center">
          <div
            rel="noopener noreferrer"
            className="group flex flex-col items-cente w-[300px]"
            title='La Social - Pizzería de Barrio'
          >
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg w-full">
              <div className="relative w-full">
                <img
                  src={logo}
                  alt={`Logo de La Social`}
                  className="contain transition-opacity duration-300 group-hover:opacity-80"
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default Sponsors