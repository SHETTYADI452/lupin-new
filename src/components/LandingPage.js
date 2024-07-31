import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLandingPage } from '../actions/landingPageActions';
import Carousel from './Carousel';
import Title from './Title';
import Tests from './Tests';
import Header from './Header';
import Partnerships from './Partnerships';
import Testimonials from './Testimonials';
import './LandingPage.css';

const LandingPage = () => {
  const dispatch = useDispatch();
  const pageContent = useSelector((state) => state.landingPage.landingPage);

  useEffect(() => {
    dispatch(fetchLandingPage());
  }, [dispatch]);

  return (
    <div className="landing-page">
      {pageContent.map((content) => {
        switch (content.__typename) {
          case 'ComponentCarouselCarousel':
            return <Carousel key={content.id} images={content.Image} />;
          case 'ComponentTitlesTitle':
            return <Title key={content.id} title={content.Title} subTitle={content.SubTitle} />;
          case 'ComponentTestsTestList':
            return <Tests key={content.id} tests={content.Tests} />;
          case 'ComponentHeaderHeader':
            return <Header key={content.id} header={content.Header} />;
          case 'ComponentPartnershipPartnerShipList':
            return <Partnerships key={content.id} partnerships={content.SchemeList} />;
          case 'ComponentExperienceExperience':
            return <Testimonials key={content.id} testimonials={content} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default LandingPage;
