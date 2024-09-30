import Link from "next/link";


const Navber = () => {


    return (

        <div className ="flex justify-center gap-5 md:gap-10 bg-orange-500 py-4">

            <Link href={'/Home'}>Home</Link>
            <Link href={'/OurMenu'}>Our Menu</Link>
            <Link href={'/About'}>About </Link>
            <Link href={''}>Blog</Link>
            <Link href={''}>Contact</Link>
            
        </div>
    );
};

export default Navber;