import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Categories = ({ categories }) => {
    return (
        <div>
            <div className="flex-container stretch">
                <div className="col-md-12 categories_list_all d-flex" >
                        <h2>Categories</h2>
                        <a className='categorylist' href={`/categoryall`}>Xem tất cả danh mục</a>
                    </div>
                {categories.map((cate) =>
                    <Link style={{ height: '80px' }} key={cate._id} href={`/categoryall`}>
                        <div className='flex-item'>
                        <Image src="https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg?w=2000" class="card-img-top" width="100" height="70" alt="..." />

                        <p >{cate.name}</p>
                        </div>
                    </Link>)}
            </div>
        </div>
    )
}

export default Categories