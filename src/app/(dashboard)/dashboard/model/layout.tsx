"use client"

import React from 'react'
import Layout from '@/src/components/app-reusables/model/Layout/Layout';


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
            {children}
        </Layout>
    );
};

export default layout;
