import React, { Fragment } from 'react';
import Image from 'next/image';
import RedDot from '../../Elements/Icons/red-dot.element';
import Star from '../../Elements/Icons/star-component';
import Link from 'next/link';

const TrendingNewsComponent = (props) => {
    const {tag, title, desc, imgLink, date, minutes, rating, to} = props

    return (
        <Link href={`/news/${to}`}>
            <blockquote className='cursor-pointer transition-transform  hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg
            hover:shadow-gray-200 p-2.5 hover:rounded-2xl mb-4
            '>
                <div className=''>     
                {
                    tag ? (       
                    <header className="flex flex-wrap items-center">
                            <RedDot/>
                            <span className="ml-3 mt-2 sm:mt-0">{tag}</span>
                    </header>
                    ) : (
                        <></>
                    )
                }
                    <main className='grid grid-colspan-8 grid-flow-row lg:grid-flow-col lg:gap-x-5'>

                        <div className='col-span-12 lg:col-span-3'>
                            <Image src={`/images/others/${imgLink}`} objectFit="cover" width='200%' height={185}/>
                        </div>

                        <div className='mt-1 col-span-5 flex flex-col justify-between'>
                            <div>
                                <h2 className='mt-2 font-semibold'>{title}</h2>
                                <p className="mt-2 text-gray-700 hidden lg:block">
                                    {
                                        desc.length > 125 ? (
                                            `${desc.substring(0, 125)}...`
                                        ):(
                                            desc
                                        )
                                    }
                                </p>
                            </div>
                            <div className="mt-3">
                                <p className="text-xs text-gray-500 flex items-center ">
                                <span className='font-semibold'>{date}</span>  
                                &nbsp; &nbsp;
                                <span className='font-semibold'>{minutes}min read</span>
                                &nbsp; &nbsp; &nbsp;
                                <span className='flex'>
                                    {[...Array(parseInt(rating))].map((star, key) => {        
                                        return (         
                                            <Star key={key+1}/>      
                                        );
                                    })}
                                </span>
                                
                                </p>  
                            </div>
                        </div>              
                    </main>
                </div>    
            </blockquote>
        </Link>

    );
};

export default TrendingNewsComponent;