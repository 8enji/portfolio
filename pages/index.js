import { Suspense } from 'react';
import { motion } from 'framer-motion'

import { Layout, Main, MatrixRain} from '../components';


export default function Home() {
  return (
    <Layout page="Home">
        <Suspense>
        <motion.div animate={{opacity: [.8,.1]}} transition={{delay: 3, duration: 5}}>
            <MatrixRain />
        </motion.div>
        <Main />
    </Suspense>
    </Layout>

    
    )
}
