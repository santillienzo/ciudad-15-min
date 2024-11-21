import la_social from '@/assets/img/sponsors/logo_la_social.webp'
import cachipum from '@/assets/img/sponsors/logo_cachipum.webp'
import logo_don_justo from '@/assets/img/sponsors/logo_don_justo.webp'
import logo_latinad from '@/assets/img/sponsors/logo_latinad.webp'
import logo_evolution from '@/assets/img/sponsors/logo_evolution.webp'

const principalSponsor = {
  name: 'Bicicletas Evolution',
  logo: logo_evolution,
  instagram: 'https://www.instagram.com/bicicletas_evolutionok/'
}

const sponsors = [
  {
    name: 'La Social - Pizzería de Barrio',
    logo: la_social,
    instagram: 'https://www.instagram.com/lasocialpizzeria/'
  },
  {
    name: 'Cachipum',
    logo: cachipum,
    instagram: 'https://www.instagram.com/cachipum.mza/'
  },
  {
    name: 'Don Justo',
    logo: logo_don_justo,
    instagram: 'https://www.instagram.com/distribuidoradonjusto/'
  },
  {
    name: 'LatinAd',
    logo: logo_latinad,
    instagram: 'https://latinad.com/'
  }
];


const Sponsors = () => {
  return (
    <section className="py-12 bg-gray-300" id='sponsors'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Nuestros Sponsors</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Agradecemos a nuestros sponsors por su apoyo y confianza, fundamentales para llevar adelante este proyecto.
        </p>
        
        {/* Principal Sponsor */}
        <div className="mb-12">
          {/* <h3 className="text-xl font-semibold text-center mb-4">Principal Sponsor</h3> */}
          <a href={principalSponsor.instagram} target="_blank" rel="noopener noreferrer" className="block">
            <div className=" rounded-lg p-6 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105 cursor-pointer">
              <img 
                src={principalSponsor.logo} 
                alt={principalSponsor.name} 
                width={400} 
                height={200} 
                className="mb-6"
              />
              <p className="text-lg font-bold text-gray-700">{principalSponsor.name}</p>
            </div>
          </a>
        </div>
        
        {/* Other Sponsors */}
        {/* <h3 className="text-xl font-semibold text-center mb-4">Sponsors</h3> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <a key={index} href={sponsor.instagram} target="_blank" rel="noopener noreferrer" className="block">
              <div className=" rounded-lg p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 cursor-pointer">
                <div className="w-48 h-28 flex items-center justify-center mb-6">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-sm text-center font-bold text-gray-700">{sponsor.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors