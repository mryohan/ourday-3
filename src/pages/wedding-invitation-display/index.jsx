import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import StoryNavigationController from '../../components/ui/StoryNavigationController';
import BottomFloatingMenu from '../../components/ui/BottomFloatingMenu';
import useGuestParameters from '../../hooks/useGuestParameters';
import StorySection from './components/StorySection';
import WelcomeOverlay from './components/WelcomeOverlay';
import LoadingSkeleton from './components/LoadingSkeleton';

const WeddingInvitationDisplay = () => {
  const { guestId, guestName, coupleNames, isLoading: guestLoading } = useGuestParameters();
  const [currentSection, setCurrentSection] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isContentLoading, setIsContentLoading] = useState(true);

  const storySections = [
  {
    id: 1,
    type: 'hero',
    title: 'Sarah & Michael',
    subtitle: 'June 15, 2026',
    backgroundImage: "/assets/images/homepage.jpg",
    backgroundImageAlt: 'Couple photo of Yohannes and Yanmei in matching floral shirts'
  },
  {
    id: 2,
    type: 'quote',
    quote: 'Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.',
    author: 'Unknown'
  },
  {
    id: 3,
    type: 'photo',
    image: "https://images.unsplash.com/photo-1655471262546-51a02f61effd",
    imageAlt: 'Happy couple laughing together in casual outdoor setting with natural sunlight and green foliage background',
    caption: 'Our first date - Central Park, Spring 2023'
  },
  {
    id: 4,
    type: 'text',
    title: 'Our Story',
    content: `We met on a rainy Tuesday afternoon at a small coffee shop in Manhattan. Sarah was reading her favorite book, and Michael accidentally spilled his coffee on her table.\n\nWhat started as an embarrassing moment turned into hours of conversation. We talked about everything - our dreams, our fears, our favorite movies, and our shared love for adventure.\n\nFrom that day forward, we knew we had found something special. Every moment together has been a new chapter in our beautiful story.`
  },
  {
    id: 5,
    type: 'photo',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eeacb275-1767749287706.png",
    imageAlt: 'Couple holding hands while walking on cobblestone street in European city with historic architecture and warm evening light',
    caption: 'Our trip to Paris - Where dreams came true'
  },
  {
    id: 6,
    type: 'gallery',
    title: 'Moments Together',
    images: [
    {
      url: "https://images.unsplash.com/photo-1627581269643-af565621e18f",
      alt: 'Couple dancing together at outdoor venue with string lights and romantic atmosphere during evening celebration'
    },
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_13b34bfa8-1767899640715.png",
      alt: 'Close-up of couple laughing joyfully together with genuine smiles and warm natural lighting in casual setting'
    },
    {
      url: "https://images.unsplash.com/photo-1733616524826-e5e0308f8b6f",
      alt: 'Romantic couple embracing on mountain peak with scenic valley view and blue sky in background during hiking adventure'
    },
    {
      url: "https://images.unsplash.com/photo-1527671451221-facae43877c9",
      alt: 'Couple sitting together on vintage bench in park with autumn leaves and golden afternoon sunlight filtering through trees'
    },
    {
      url: "https://images.unsplash.com/photo-1661308853869-7e4b73c9a406",
      alt: 'Happy couple enjoying picnic together on checkered blanket in green meadow with basket of food and flowers'
    },
    {
      url: "https://images.unsplash.com/photo-1653902199481-3c7c2b353b45",
      alt: 'Silhouette of couple holding hands at beach during sunset with orange and pink sky reflecting on ocean water'
    },
    {
      url: "https://images.unsplash.com/photo-1556908450-60aec6018662",
      alt: 'Couple cooking together in modern kitchen with fresh ingredients and wine glasses creating intimate domestic scene'
    },
    {
      url: "https://images.unsplash.com/photo-1708662453907-317070916129",
      alt: 'Couple riding bicycles together on tree-lined path in countryside with dappled sunlight and peaceful rural scenery'
    }]

  },
  {
    id: 7,
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Our Engagement Story Video'
  },
  {
    id: 8,
    type: 'quote',
    quote: 'In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.',
    author: 'Maya Angelou'
  },
  {
    id: 9,
    type: 'photo',
    image: "https://images.unsplash.com/photo-1670349729224-357eb94914aa",
    imageAlt: 'Romantic proposal scene with man on one knee presenting engagement ring to surprised woman in elegant garden setting with roses',
    caption: 'The moment that changed everything - December 2025'
  },
  {
    id: 10,
    type: 'text',
    title: 'The Proposal',
    content: `Michael had been planning the perfect proposal for months. He knew Sarah loved surprises, but he also knew she valued authenticity above all else.\n\nOn a crisp December evening, he took her to the rooftop of their favorite building in the city. As the sun set over the skyline, he got down on one knee and asked her to be his forever.\n\nWith tears of joy and a resounding "Yes!", our journey to forever officially began.`
  },
  {
    id: 11,
    type: 'timeline',
    title: 'Wedding Day Schedule',
    events: [
    {
      icon: 'Church',
      title: 'Ceremony',
      time: '3:00 PM',
      description: 'Join us as we exchange our vows at The Grand Ballroom'
    },
    {
      icon: 'Camera',
      title: 'Photos',
      time: '4:30 PM',
      description: 'Cocktail hour while we capture memories'
    },
    {
      icon: 'Utensils',
      title: 'Reception',
      time: '6:00 PM',
      description: 'Dinner and celebration begins'
    },
    {
      icon: 'Music',
      title: 'First Dance',
      time: '7:30 PM',
      description: 'Our first dance as husband and wife'
    },
    {
      icon: 'Cake',
      title: 'Cake Cutting',
      time: '8:30 PM',
      description: 'Sweet moments and dessert'
    },
    {
      icon: 'PartyPopper',
      title: 'Party Time',
      time: '9:00 PM',
      description: 'Dance the night away with us'
    }]

  },
  {
    id: 12,
    type: 'photo',
    image: "https://images.unsplash.com/photo-1716486149462-f88d81ade29e",
    imageAlt: 'Elegant wedding venue interior with crystal chandeliers white floral arrangements round tables and romantic candlelight ambiance',
    caption: 'The Grand Ballroom - Where our forever begins'
  },
  {
    id: 13,
    type: 'text',
    title: 'Dress Code',
    content: `We kindly request formal attire for our special day.\n\nFor gentlemen: Dark suits or tuxedos\nFor ladies: Cocktail dresses or formal gowns\n\nPlease note that our ceremony will be held outdoors, so comfortable shoes are recommended for the garden setting.`
  },
  {
    id: 14,
    type: 'quote',
    quote: 'A successful marriage requires falling in love many times, always with the same person.',
    author: 'Mignon McLaughlin'
  },
  {
    id: 15,
    type: 'gallery',
    title: 'Our Families',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1885818f1-1768552479746.png",
      alt: 'Multi-generational family portrait with grandparents parents and children smiling together in formal attire at outdoor gathering'
    },
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1bb7e2d87-1766839604599.png",
      alt: 'Extended family group photo with multiple generations gathered together in living room with warm lighting and happy expressions'
    },
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee301ee1-1767479226567.png",
      alt: 'Young siblings playing together in backyard with parents watching and smiling in background during sunny afternoon'
    },
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1e92999d6-1767352897597.png",
      alt: 'Family dinner scene with multiple generations seated around dining table with food and decorations in cozy home setting'
    }]

  },
  {
    id: 16,
    type: 'text',
    title: 'Travel & Accommodations',
    content: `For out-of-town guests, we have reserved room blocks at the following hotels:\n\nThe Plaza Hotel - (212) 759-3000\nSpecial rate: $299/night\nBook by: May 15, 2026\n\nThe Ritz-Carlton - (212) 308-9100\nSpecial rate: $349/night\nBook by: May 15, 2026\n\nBoth hotels are within walking distance of the venue. Please mention the Sarah & Michael wedding when booking.`
  },
  {
    id: 17,
    type: 'photo',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d62c85c2-1768229850548.png",
    imageAlt: 'Luxury hotel exterior at night with illuminated entrance grand architecture and valet parking area in upscale urban setting',
    caption: 'Recommended accommodations near the venue'
  },
  {
    id: 18,
    type: 'text',
    title: 'Registry',
    content: `Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at:\n\nCrate & Barrel\nWilliams Sonoma\nAmazon Wedding Registry\n\nWe are also accepting contributions to our honeymoon fund as we plan an adventure to the Maldives.`
  },
  {
    id: 19,
    type: 'quote',
    quote: 'The best thing to hold onto in life is each other.',
    author: 'Audrey Hepburn'
  },
  {
    id: 20,
    type: 'photo',
    image: "https://images.unsplash.com/photo-1504385781539-2b4ab2edd8ac",
    imageAlt: 'Romantic couple silhouette walking hand in hand on beach at sunset with waves and golden sky creating dreamy atmosphere',
    caption: 'Thank you for being part of our journey. We cannot wait to celebrate with you!'
  }];


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (guestId) {
      console.log('Guest tracking:', { guestId, guestName, timestamp: new Date()?.toISOString() });
    }
  }, [guestId, guestName]);

  const handleSectionChange = (newSection) => {
    setCurrentSection(newSection);
  };

  const handleDismissWelcome = () => {
    setShowWelcome(false);
  };

  if (guestLoading || isContentLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <Helmet>
        <title>Sarah & Michael's Wedding - June 15, 2026</title>
        <meta name="description" content="Join us in celebrating the wedding of Sarah and Michael. View our story, RSVP, and get all the details for our special day." />
        <meta property="og:title" content="Sarah & Michael's Wedding Invitation" />
        <meta property="og:description" content="You're invited to celebrate our special day on June 15, 2026" />
        <meta property="og:image" content="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      <div className="relative w-full min-h-screen bg-background overflow-hidden">
        <div className="w-full h-screen overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentSection * 100}%)` }}>

            {storySections?.map((section) =>
            <div key={section?.id} className="w-full h-full flex-shrink-0">
                <StorySection section={section} />
              </div>
            )}
          </div>
        </div>

        <StoryNavigationController
          totalSections={storySections?.length}
          currentSection={currentSection}
          onSectionChange={handleSectionChange} />


        <BottomFloatingMenu />

        {showWelcome &&
        <WelcomeOverlay
          guestName={guestName}
          coupleNames={coupleNames}
          onDismiss={handleDismissWelcome} />

        }
      </div>
    </>);

};

export default WeddingInvitationDisplay;