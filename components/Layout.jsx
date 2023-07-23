import Head from 'next/head';
import Script from 'next/script'


const Layout = ({ children, page }) => {
    return (
        <>
            <Head>
                <title>{page}</title>
            </Head>
            <div className= 'absolute flex w-full items-center justify-center bg-[rgba(0,0,0,.95)]'>
                {children}
            </div>
        </>
        ) 
        
}

export default Layout