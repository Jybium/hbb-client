"use client"
import Layout from '@/src/components/app-reusables/explorer/Layout/Layout';



const layout = ({ children }: { children: React.ReactNode }) => {
    return (
       <Layout children={children}/>
    );
};

export default layout;