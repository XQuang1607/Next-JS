import React from 'react';
import Banner from '@/components/Banner';
import Categories from '@/components/Categories';
import FlashSale from '@/components/Flashsale';
import HeaderBottom from '@/components/HeaderBottom/inedx';
import Products from '@/components/Products';
import HotSale from '@/components/Hotsale';
import Footer from './Footer';

function Main({categories, flashsale, productsList, hotsale}) {
  return (
    <>
      <HeaderBottom />
      <Banner />
      <Categories categories={categories}/>
      <FlashSale flashsale={flashsale}/>
      <HotSale hotsale={hotsale} />
      <Products productsList={productsList}/>
    <Footer />
    </>
  );
}

export default Main;