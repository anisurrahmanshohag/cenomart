import React from 'react';
import Campaign from '../Campaign/Campaign';
import Exclusive from '../Exclusive/Exclusive';
import { Footer } from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Signin from '../Signin/Signin';
import Topbar from '../Topbar/Topbar';



const LogIn = () => {

    return (
        <>
            <Topbar />
            <Navbar />
            <Signin />
            <Campaign />
            <Exclusive />
            <Footer />
        </>
    )
};
export default LogIn;
