/*import { observer } from "mobx-react-lite";
import { PostsListWithLoader } from "../components/PostList";
import { useGetPostsQuery } from "../services/postsApi_service";
import React from "react";


export const HomePage = observer ((): React.ReactElement | null => (
    // const { data: posts, isloading } = useGetPostsQuery();
    // const limitedPosts = posts?.slice(0, 3);

    return <PostsListWithLoader isLoading={isLoading} posts={limitedPosts} />
));
*/

// src/pages/HomePage.tsx
/*
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ImageSlider } from '../components/ImageSlider';
import { InfoSection } from '../components/InfoSection';
import { CallToAction } from '../components/CallToAction';
import CardList from '../components/CardList/CardList';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ImageSlider />
      <InfoSection />
      <CardList limit={3} /> 
      <CallToAction />
    </>
  );
};
*/



// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { ImageSlider } from '../components/ImageSlider';
import { InfoSection } from '../components/InfoSection';
import { CallToAction } from '../components/CallToAction';
import CardList from '../components/CardList/CardList';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ImageSlider />
      <InfoSection />

      <section className="card-section">
        <h2 onClick={() => window.location.href='/cards'} style={{ cursor: 'pointer' }}>
        </h2>
        <CardList limit={3} />
      </section>

      <CallToAction />
    </>
  );
};

export default HomePage;
