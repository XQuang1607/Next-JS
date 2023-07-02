import React from 'react';
import axiosClient from '@/libraries/axiosClient';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/Layout/Header';

function CategoryAll({ categoryall }) {

    return (
        <>
            <Head>
                <title>Tất cả danh mục</title>
                <meta name="description" content="Đây là tất cả danh mục" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <Header />
            {
                categoryall.length > 0 ? (
                    <div className="flex-container stretch">
                        {categoryall.map((cat) =>
                            <Link key={cat._id} href={`/categoryall/${cat._id}`}>
                                <div className='flex-item'>
                                    <Image src="https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg?w=2000" class="card-img-top" width="100" height="70" alt="..." />

                                    <p >{cat.name}</p>
                                </div>
                            </Link>)}
                    </div>
                ) : <small>Không có sản phẩm</small>}
        </>
    );
}

export default CategoryAll;

// getServerSideProps - Server-Side Rendering
export async function getServerSideProps() {
    try {
        const response = await axiosClient.get('/user/categories');

        return {
            props: {
                categoryall: response.data.payload,
            },

            // revalidate: 24 * 60 * 60,
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}

