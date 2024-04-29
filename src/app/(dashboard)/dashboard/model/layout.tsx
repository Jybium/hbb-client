"use client"
import React from 'react'
import Image from 'next/image';
import Logo from "@/public/icons/logo.svg";
import Link from 'next/link';
import NavBar from '@/src/components/app-reusables/model/NavBar';
import Layout from '@/src/components/app-reusables/explorer/Layout/Layout';


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
            {children}
        </Layout>
    );
};

export default layout;
