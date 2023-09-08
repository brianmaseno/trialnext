import Link from 'next/link'
export const getStaticProps = async () =>{

    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    return {
        props: { picha:data}
    }
}
const Mapicha = ({picha}) => {
   
    return ( 
        <>
        
        <div>
            <Link href={'/'}>Home</Link>

            <h2>Pictures</h2>
            {picha.map(pic => (
            
            <>
            <Link href={'/ninjas/'+ picha.id} className="single" key={pic.id}>
            <h3 >{pic.url}</h3>
            <p >{pic.title}</p>
            <p >{pic.thumbnailUrl}</p>
           
            </Link>
           
            </>
        )

        )}
        </div>
           
        
        </>
     );
}
 
export default Mapicha;