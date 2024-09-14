import HeroLayout from '@/components/HeroLayout';
import ServicesDetails from '@/components/services/ServicesDetails';
import Contact from '@/components/Contact';
import StepsSection from '@/components/services/StepsSection';

export default function Services() {
  return (
    <>
      <HeroLayout
        title='Nos prestations'
        subtitle="Du développement logiciel à l'administration système en passant par le développement web et mobile, les étudiants de la Junior Entreprise Esisar sauront répondre à vos besoins."
      />
      <ServicesDetails />
      <StepsSection />
      <div className='flex flex-col items-center gap-12 p-12 text-xl'>
        <div className='w-full p-5 md:w-2/3'>
          <h2 className='mb-4 text-4xl font-extrabold'>Osez le numérique !</h2>
          <p>
            Dans un monde de plus en plus connecté, le passage au numérique de
            l&apos;ensemble de son activité est devenu une priorité pour
            développer son entreprise. La Junior Esisar vous accompagne et vous
            conseille dans vos démarches de digitalisation grâce à
            l&apos;expertise de ses étudiants dans les systèmes cyber-physiques
            et la cybersécurité en électronique, automatique informatique et
            réseaux.
          </p>
        </div>
      </div>
      <Contact
        title="C'est parti pour l'aventure ?"
        description='Partagez-nous votre projet...'
      />
    </>
  );
}
