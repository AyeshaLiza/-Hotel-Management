import React from 'react';
// import Map from '../../Component/Map';
import FeaturedRoom from '../../Component/FeaturedRoom';
import ImageSlider from '../../Component/ImageSlider';
import Banner from '../../Component/Banner';
import { Helmet } from 'react-helmet';
import OfferBanner from '../../Component/OfferBanner';
import NewsLetter from '../../Component/NewsLetter';
import Review from '../../Component/Review';


const Home = () => {
 return (
  <div>
   <Helmet>
        <title>Hotel management</title>
        <meta name='description' content='Hotel Managemenet Website' />

      </Helmet>
      <Banner></Banner>
  <FeaturedRoom></FeaturedRoom>
  <OfferBanner></OfferBanner>
  <ImageSlider></ImageSlider>
  <NewsLetter></NewsLetter>

  </div>
 );
};

export default Home;