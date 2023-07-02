import React from 'react';
import axiosClient from '@/libraries/axiosClient';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/Layout/Header';

function FlashSaleList({ flashsale }) {

    return (
        <>
            <Head>
                <title>Tất cả sản phẩm</title>
                <meta name="description" content="Đây là tất cả sản phẩm được sale" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <Header />
            {
                flashsale.length > 0 ? (
                    <div className="flex-container stretch" style={{marginBottom : '100px'}}>
                        {flashsale.map((flash) =>
                            <Link key={flash._id} href={`/products/${flash._id}`}>
                                <div className="card flashsale_card" style={{width:'10rem', textAlign: 'center', marginBottom: '50px', marginTop : "20px", height: '400px'}}>
                                            <Image src="https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg?w=2000" class="card-img-top" width="120" height="150" alt="..." />
                                            <div class="card-body">
                                                <div className='d-flex'>
                                                <p class="card-text ">
                                                    {flash.name}</p>
                                                    <p style={{color: 'red'}}>{flash.discount}%</p>
                                                </div>
                                                <div className='card_cost d-flex'>
                                                    <del>{flash.price}</del>
                                                <p>{flash.discountedPrice}</p>
                                                </div>
                                            </div>
                                        </div>
                            </Link>)}
                    </div>
                ) : <small>Không có sản phẩm</small>}
        </>
    );
}

export default FlashSaleList;

// getServerSideProps - Server-Side Rendering
export async function getServerSideProps() {
    try {
        const response = await axiosClient.get('/user/products');

        return {
            props: {
                flashsale: response.data.payload,
            },

            // revalidate: 24 * 60 * 60,
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}

