import timerIcon from '@/assets/svg/moreInfo/timer.png'
import precursorIcon from '@/assets/svg/moreInfo/precursor.png'
import treesIcon from '@/assets/svg/moreInfo/trees.png'
import goalsIcon from '@/assets/svg/moreInfo/goals.png'

export const accordionSections = [
  {
    title: "¿Qué es la Ciudad de 15 Minutos?",
    content: `
      <p>La Ciudad de 15 Minutos propone que todo lo que necesitas en tu día a día, como <span class="font-bold">trabajo</span>, <span class="font-bold">escuela</span>, <span class="font-bold">tiendas</span>, <span class="font-bold">parques</span> y más, esté a solo <span class="font-bold">15 minutos caminando</span> o en <span class="font-bold">bici</span> desde tu casa. Esto busca hacer las ciudades más <span class="font-bold">sostenibles</span>, <span class="font-bold">cómodas</span> y <span class="font-bold">centradas</span> en las personas, reduciendo el uso del coche y mejorando la <span class="font-bold">calidad de vida</span>, para que puedas disfrutar de todo sin tener que hacer largos trayectos.</p>
    `,
    icon: timerIcon
  },
  {
    title: "¿Por qué es importante?",
    content: `
      <ul>
        <li><strong>- Menos contaminación y tráfico:</strong> Al reducir la necesidad de usar el auto, disminuye la contaminación 
        y el caos vehicular.</li>
        <li><strong>- Más tiempo libre:</strong> Al tener todo cerca, ahorras tiempo de desplazamiento que puedes dedicar a lo que realmente te importa.</li>
        <li><strong>- Comunidades más fuertes:</strong> Fomenta la vida de barrio y el sentido de comunidad, ya que las personas interactúan más en su entorno cercano.</li>
        <li><strong>- Espacios más verdes y saludables:</strong> Al priorizar la movilidad peatonal y en bicicleta, también se impulsa la creación de espacios verdes y seguros.</li>
      </ul>
    `,
    icon: treesIcon
  },
  {
    title: "¿Quiénes son los precursores?",
    content: `
      <p>Uno de los principales impulsores de este concepto es <span class="font-bold">Carlos Moreno</span>, un urbanista que propuso esta idea para 
      hacer nuestras ciudades más humanas y habitables. La ciudad de París ha adoptado esta visión bajo el liderazgo 
      de la alcaldesa Anne Hidalgo, buscando transformar la capital francesa en una referencia global de 
      sostenibilidad urbana.</p>
    `,
    icon: precursorIcon
  },
  {
    title: "¿Cuáles son los objetivos?",
    content: `
      <ul>
        <li><strong>- Reducir la huella de carbono:</strong> Menos desplazamientos en auto significa menos emisiones.</li>
        <li><strong>- Fomentar la economía local:</strong> Al incentivar la compra en comercios de barrio, se apoya a las pequeñas y medianas empresas.</li>
        <li><strong>- Mejorar la calidad de vida:</strong> Con más tiempo para disfrutar y menos estrés por el tráfico o los desplazamientos largos, las personas viven más satisfechas.</li>
      </ul>
    `,
    icon: goalsIcon
  },
];
