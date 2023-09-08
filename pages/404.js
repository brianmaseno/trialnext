import Link from "next/link";
import { useState } from "react";
import { useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter();
    useState(()=>{
        setTimeout(()=>{
            router.push('/');
        },3000)
    })
    return ( 
        <>
        <div className="notfound">
            <h1>Oooops Page Not Found</h1>
            <h2>Sorry try again later</h2>
            <p>Go back <Link  href={'/'}>Home</Link></p>
        </div>
        </>
     );
}
 
export default NotFound;