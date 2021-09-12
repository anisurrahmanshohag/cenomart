import React from 'react';
import Campaign from '../Campaign/Campaign';
import Exclusive from '../Exclusive/Exclusive';
import { Footer } from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SignUp from '../SignUp/SignUp';
import Topbar from '../Topbar/Topbar';



const Register = () => {

    return (
        <>
            <Topbar />
            <Navbar />
            <SignUp />
            <Campaign />
            <Exclusive />
            <Footer />
        </>
    )
}
export default Register;
