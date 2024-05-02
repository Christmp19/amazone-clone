import React from 'react';
import Product from './Product';

function ProductFeed({ products }) {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>

            {products
                .splice(0,3)
                .map(({ id,
                    title,
                    price,
                    rating,
                    description,
                    category,
                    image,
                    hasPrime, }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        rating={rating}
                        description={description}
                        category={category}
                        image={image}
                        hasPrime={hasPrime}
                    />
                ))}
            <img className='md:col-span-full'
                src="https://links.papareact.com/dyz"
                alt="Middle banner" />
            
            <div className='md:col-span-2'>
                {products
                    .splice(3, 4)
                    .map(({ id,
                        title,
                        price,
                        rating,
                        description,
                        category,
                        image,
                        hasPrime, }) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            rating={rating}
                            description={description}
                            category={category}
                            image={image}
                            hasPrime={hasPrime}
                        />
                    ))}
            </div>

            {products
                .splice(4, products.length)
                .map(({ id,
                    title,
                    price,
                    rating,
                    description,
                    category,
                    image,
                    hasPrime, }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        rating={rating}
                        description={description}
                        category={category}
                        image={image}
                        hasPrime={hasPrime}
                    />
                ))}
        </div>
    )
}

export default ProductFeed;