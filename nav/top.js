import Link from 'next/link'
const Navbar = () => {
    return ( 
        <>
        <nav>
            <div className='logo'>
                <h1>Dira</h1>
            </div>
        <Link href={'/'}>Home</Link>
            <Link href={'/posts/services'}>Services</Link>
            <Link href={'/posts/contacts'}> Contacts</Link>
        </nav>
        <div>
           
        </div>
        </>
    );
}
 
export default Navbar;