import React from 'react';
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const Home = () => {

    const categories = [
        {name:'placement prep',id:1,icon:'https://cdn-icons-png.flaticon.com/512/1055/1055672.png'},
        
    ];

    return (
        <Card>
        <CardHeader>
            <CardTitle>Select Category to Play</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='w-[400px] grid grid-cols-1 gap-0'>
            
            {categories.map((x,i) => {
                return <Link key={i} to='/quiz' className='flex flex-col border hover:border-gray-200 justify-center rounded p-3 items-center bg-[rgba(255,255,255,0.5)]'>
                <img className='w-[80px]' src={x.icon} alt="" />
                <span className='mt-2'>{x.name}</span>
            </Link>
            })
            }
            </div>
        </CardContent>
        </Card>

    );
}

export default Home;
