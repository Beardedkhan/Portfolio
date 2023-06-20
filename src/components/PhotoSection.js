import React from 'react';

const PhotoSection = () => {
    const photoData = [
        { src: require("../Images/x.jpg"), alt: "Me", description: "Well I got love for Flowers" },
        { src: require("../Images/x1.jpg"), alt: "Me 1", description: "Oh Deer, how nice!" },
        { src: require("../Images/x2.jpg"), alt: "Me 2", description: "Connecting with nature is a must to maintain sanity!" },
        { src: require("../Images/x3.jpg"), alt: "Me 3", description: "Bumped Into Oisin Lunny in DTS23" },
        { src: require("../Images/x4.jpg"), alt: "Me 4", description: "Chekced in Badges and tickets for tech ireland meetup DTS23" },
        { src: require("../Images/x5.jpg"), alt: "Me 4", description: "Porsche Taycan Got our Attention Big Boy Toys!" },
        { src: require("../Images/x6.jpg"), alt: "Me 4", description: "Happily voulenteering at DTS23" },
        
        
        
    ];

    return (
        <section id="me">
            <h2>Welcome to the other Side!</h2>
            <div className="about-me">
            <p>
                Hey there! This is me , a passionate individual who loves to explore new places, capture
                moments through my camera lens or Probably my friends lens :-P, and contribute to meaningful causes through volunteering.
            </p>
            <p>
                Story-telling has always been a way for me to express my creativity.I enjoy
                visualizing and paying attention to the detail of things that are unfolding infront of my eyes, I love to connect with the nature and make it the pivot of my life!
            </p>
            <p>
                Alongside, I actively participate in volunteering activities that make
                a positive impact on society. It's a fulfilling experience to be able to contribute my time and
                skills to causes I care about.
            </p>
            <p>
                Join me on this visual adventure as I showcase my photographs, share my volunteering experiences,
                and take you on a journey of exploration and discovery. Let's connect and inspire each other!
                </p>
            </div>
            <div className="photo-grid">
                {photoData.map((photo, index) => (
                    <div className="photo-item" key={index}>
                        <img src={photo.src} alt={photo.alt} />
                        <div className="description">{photo.description}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PhotoSection;
