"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';
import styles from './Page.module.css'; 
import { Navbar } from '../Components/Navbar';

const Page = () => {
    const { push } = useRouter(); 

    return (
 <div>
            <Navbar>
            </Navbar>
                {/* <div>
                    <h1>It works</h1>
                </div> */}
        </div>
    );
}

export default Page;