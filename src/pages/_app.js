import { useEffect, useState } from 'react'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
      setDomLoaded(true);
    }, []);


    return (
        <>
      {domLoaded && (
        <Component {...pageProps} />
      )}
    </>
    )
}

export default MyApp;
