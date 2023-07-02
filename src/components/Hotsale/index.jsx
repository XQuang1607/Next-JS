import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';

const HotSale = ({ hotsale }) => {
    return (
        <div>
            <div className="container">
                <div className="row ">
                    <div className="col-md-12 flash_list_all d-flex" >
                        <h2>HotSale</h2>
                    </div>
                    <div className="categories_list">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={0}
                            slidesPerView={6}
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {hotsale.map((hot) => (
                                <SwiperSlide key={hot._id}>
                                    <Link href={`/flashsale`}>
                                        <div className="card categories_card" >
                                            <Image src="https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg?w=2000" class="card-img-top" width="120" height="150" alt="..." />
                                            <div class="card-body">
                                                <div className='d-flex'>
                                                <p class="card-text ">
                                                    {hot.name}</p>
                                                    <p style={{color: 'red'}}>{hot.discount}%</p>
                                                </div>
                                                <div className='card_cost d-flex'>
                                                    <p>{hot.price}</p>
                                                <p>{hot.totalProductSale}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotSale