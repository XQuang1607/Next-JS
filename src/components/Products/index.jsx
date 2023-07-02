import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Products = ({ productsList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30; // Số lượng phần tử trong mỗi trang
    const totalItems = 100; // Tổng số phần tử

    // Tính số trang
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Tính chỉ số của phần tử đầu và phần tử cuối trong trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Lấy danh sách phần tử trong trang hiện tại
    const productsList1 = productsList.slice(indexOfFirstItem, indexOfLastItem);

    // Chuyển đến trang tiếp theo
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Chuyển đến trang trước đó
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div>
            <main>
            <div className="flex-container stretch">
                <div className="col-md-12 categories_list_all" >
                    <h2>Products</h2>
                    <div className='button_products'>
                <button style={{marginRight: '20px', padding: '10px'}} onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span style={{marginRight: '20px'}}>{currentPage} / {totalPages}</span>
                <button style={{ padding: '10px'}} onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
                </div>
                {productsList1.map((p) => <Link key={p._id} href={`/${p._id}`}>
                    <div className="card flashsale_card" style={{ width: '11rem', textAlign: 'center', marginBottom: '50px', marginTop: "20px", height: '400px', marginLeft: '12px' }}>
                        <Image src="https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg?w=2000" class="card-img-top" width="120" height="150" alt="..." />
                        <div class="card-body">
                            <div className='d-flex'>
                                <p class="card-text ">
                                    {p.name}</p>
                                <p style={{ color: 'red' }}>{p.discount}%</p>
                            </div>
                            <div className='card_cost d-flex'>
                                <del>{p.price}</del>
                                <p>{p.discountedPrice}</p>
                            </div>
                        </div>
                    </div>
                </Link>)}
            
            </div>
            </main>
        </div>
    )
}

export default Products

