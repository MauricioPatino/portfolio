import WordArc from '../assets/wordArcnoBG.png';
import Cards from '../components/Cards';


const Projects = () => {

    const projectJson = [
        {
          title: 'WordArc',
          desc: 'A wordle clone designed with React reanimated, secure user authentication and session management using Clerk. Optimized performance and state management with useState, MMKV for local storage, and React-Reanimated for smooth,interactive animations.',
          image: WordArc,
          live: "#",
          github: "https://github.com/MauricioPatino/WordArc"
        },
        {
          title: 'Date Ready',
          desc: 'This is a tinder clone app using React Native written in Javascript. It uses React Reanimated library, Firestore and has messaging capabilties. Users are able to create and upload profiles with their image, biography and name. Ensured cross-platform compatibility by following best practices in React Native development for both iOS and Android.',
          image: WordArc,
          live: "#",
          github: "https://github.com/MauricioPatino/Tinder-Clone"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects