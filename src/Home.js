import React from 'react';
import './index.css';
import Topbar from './Topbar/Topbar';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Campaign from './Campaign/Campaign';
import { SecHead1, SecHead2, SecHead3 } from './SectionHead/Headlines';
import Products from './Product/Products';
import { Collection } from './Collection/Collection';
import BlogMap from './OurBlogs/BlogMap';
import Exclusive from './Exclusive/Exclusive';
import { Footer } from './Footer/Footer';

const Home = () => {

    return (
        <div>
            <Topbar />
            <Navbar />
            <Banner />
            <Campaign />
            <SecHead1 />
            <Products />
            <Collection />
            <SecHead2 />
            <Products />
            <SecHead3 />
            <BlogMap />
            <Exclusive />
            <Footer />
        </div>
    )
};

export default Home;
