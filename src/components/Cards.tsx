import Github from '../assets/Github.png';

interface Item {
    image: string;
    title: string;
    desc: string;
    //live: string; <a href={item.live} target='_blank'> on line 19
    github: string;
}

const Cards = ({ item }: { item: Item }) => {
    return (
        <div className='border border-red-500 rounded-lg w-[350px] lg:w-[400px] h-[500px] bg-red-50 flex flex-col'>
            <img src={item.image} alt="" className='rounded-t-lg h-[200px] w-full object-cover' />
            <div className='p-4 flex flex-col justify-between flex-grow'>
                <h1 className='font-semibold text-xl '>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    {/* <button className='bg-red-500 text-white px-3 py-2 rounded-md'><a href={item.live} target='_blank'>Live Preview</a></button> */}
                    <button className='bg-black text-white px-3 py-2 rounded-md'>
                        <a href={item.github} target='_blank' className='flex gap-1 items-center'>
                            <img src={Github} alt="github link" className='w-6'/>
                            Github Link
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards