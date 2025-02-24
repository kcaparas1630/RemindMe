import { FC, useState, useEffect } from 'react';
import { carouselPhotos } from '../../../Constants/CarouselPhotos';
import { AnimatePresence } from 'framer-motion';
import { CarouselContainer, ImageWrapper, CarouselImage, CarouselIndicatorWrapper, CarouselIndicator, CarouselHeading } from '../Styled-Components/StyledCarousel';

const sliderVariants = {
    incoming: {
        x: '100%',
        opacity: 0
    },
    active: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: '-100%',
        opacity: 0
    }
};

const transition = {
    type: "tween",
    duration: 0.6,
    ease: "easeInOut"
};

const Carousel: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                const nextIndex = (prev + 1) % carouselPhotos.length;
                return nextIndex;
            });
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <CarouselContainer>
            <AnimatePresence mode="wait">
                <ImageWrapper
                    key={currentIndex}
                    variants={sliderVariants}
                    initial="incoming"
                    animate="active"
                    exit="exit"
                    transition={transition}
                >
                    <CarouselHeading>
                        {carouselPhotos[currentIndex].heading}
                    </CarouselHeading>
                    <CarouselImage
                        src={carouselPhotos[currentIndex].image}
                        alt={carouselPhotos[currentIndex].alt || 'Carousel image'}
                    />
                </ImageWrapper>
            </AnimatePresence>
            <CarouselIndicatorWrapper>
                {carouselPhotos.map((photo, index) => {
                    return (
                        <CarouselIndicator
                            key={photo.id || index}
                            isActive={index === currentIndex}
                        />
                    )
                })}
            </CarouselIndicatorWrapper>
        </CarouselContainer>
    );
};

export default Carousel;
