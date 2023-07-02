import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeadMeta from '@/components/HeadMeta'
import Header from '@/Layout/Header'
import Main from '@/Layout/Main'
import Footer from '@/Layout/Footer'
import axiosClient from '@/libraries/axiosClient';



// const inter = Inter({ subsets: ['latin'] })

export default function Home({
  hotsale, flashsale, productsList, categories
}) {

  return (
    <>
      <HeadMeta
        title="Trang thương mại điện tử uy tín"
        description="Đây là trang thương mại điện tử uy tín"
      />
      <Header />
      <Main productsList={productsList} flashsale={flashsale} hotsale={hotsale} categories={categories}/>
      {/* <Footer /> */}
    </>
  )
}
export async function getServerSideProps() {
  try {
    const response1 = await axiosClient.get('/questions/categorylimit');
    const response2 = await axiosClient.get('/questions/hotsale');
    const response3 = await axiosClient.get('/questions/flashsale');
    const response4 = await axiosClient.get('/user/products');
    return {
      props: {
        categories: response1.data.payload,
        hotsale: response2.data.payload,
        flashsale: response3.data.payload,
        productsList: response4.data.payload,
      },

      // revalidate: 24 * 60 * 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
