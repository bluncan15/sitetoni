import { assets } from '../assets/assets';
import Title from './Title';


const AboutComponent = ({full}) => {
  return (
    <div>
      <div className="text-2xl text-center pt-8">
        <Title text1={'Millennium'} text2={'Dach Roof'} />
      </div>

      <div className="py-4 text-2xl">
        <Title text1={'De ce'} text2={'sa ne alegi pe noi?'} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        <div className="border border-[#0ac0ac] rounded-lg px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Asigurarea Calității</b>
          <p className="text-gray-600">
            Ne mândrim cu oferirea exclusivă a produselor de cea mai înaltă calitate,
            care îndeplinesc standardele noastre stricte de durabilitate, performanță și valoare.
            </p>
        </div>
        <div className="border border-[#0ac0ac] rounded-lg px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Experiență</b>
          <p className="text-gray-600">
            Avem peste 5 ani de experiență în domeniu, oferind servicii de calitate
            și produse de încredere.
          </p>
        </div>
        <div className="border border-[#0ac0ac] rounded-lg px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Servicii excepționale pentru clienți</b>
          <p className="text-gray-600">
            Echipa noastră dedicată de asistență clienți este disponibilă 24/7 pentru
            a vă oferi suportul necesar și a răspunde oricăror întrebări sau nelămuriri.
          </p>
        </div>
        <div className="border border-[#0ac0ac] rounded-lg px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Peste 900 de clienți mulțumiți</b>
          <p className="text-gray-600">
          Suntem mândri să avem peste 900 de clienți care ne aleg pentru calitatea și serviciile noastre.
          </p>
        </div>
      </div>

      {full === true &&

        <div className="flex flex-col md:flex-row gap-16 my-10">
          <img
            src={assets.about_img.src}
            alt=""
            className="w-full md:max-w-[450px] "
          />

          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <b className="text-gray-800">Despre noi</b>
            <p>
              Suntem o companie specializata in producția de tabla faltuita,
              tigla metalica si capace atic, precum și accesorii speciale pentru acestea.
              Ne dorim sa oferim produse de calitate, realizate din materiale durabile
              si rezistente, pentru a satisface nevoile si cerințele clienților nostri.
            </p>
            <p>
              Datorita tehnologiei avansate pe care o folosim, tabla faltuita si tigla metalica
              produse de noi au un aspect estetic deosebit, care le face ideale pentru orice
              tip de constructie.
            </p>
            <p>
              Capacele atic sunt realizate din materiale de calitate, rezistente la intemperii,
              pentru a asigura o protectie eficienta pentru acoperisul dumneavoastra.
            </p>
            <b className="text-gray-800">Echipa noastră</b>
            <p>
              Suntem dedicați in oferirea unui serviciu de calitate, cu personal profesionist
              si experienta, care va sta la dispozitie pentru orice intrebari sau sfaturi in
              alegerea produselor potrivite pentru nevoile dumneavoastra.
            </p>
            <p>
              De asemenea, oferim o gama variata de accesorii pentru tabla, precum profile,
              jgheaburi, burlane si altele, pentru a va oferi soluții complete pentru constructia
              sau renovarea acoperisului.
            </p>
            <p>
              Ne dorim sa devenim un partener de incredere pentru clientii nostri, oferind produse
              de calitate la un raport calitate-pret avantajos. Va asteptam cu drag sa ne contactati
              pentru orice informatii suplimentare.
            </p>
          </div>
        </div>
      }
    </div>
  );
};

export default AboutComponent;
