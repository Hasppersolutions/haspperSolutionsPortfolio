import './Review.css';
import { Box} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import google from "../../assets/img/Reviews/Google_Reviews.png";
import glassdor from "../../assets/img/Reviews/goodfirms.png";
import goodfirm from "../../assets/img/Reviews/Glassdoor_logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const reviews = [
  {
    id: 1,
    logo: google ,// replace with actual path
    name: 'Google Reviews',
    stars: 4,
    description: '4/5 star for the work environment and learning opportunities provided.',
  },
  {
    id: 2,
    logo: goodfirm, // replace with actual path
    name: 'GoodFirms',
    stars: 5,
    description: 'We made 5/5 star for quality, reliability, ability, and overall.',
  },
  {
    id: 3,
    logo: glassdor, // replace with actual path
    name: 'Glassdoor',
    stars: 3.9,
    description: 'We earned 3.9 stars, 94% recommended and 92% approval of CEO.',
  },
];

const Review = () => {
  // const theme = useTheme();
  // const [activeStep, setActiveStep] = useState(0);
  // const maxSteps = reviews.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const emptyStars = totalStars - filledStars;

    return (
      <>
        {Array(filledStars).fill().map((_, i) => (
          <span key={i} className="star filled">&#9733;</span>
        ))}
        {Array(emptyStars).fill().map((_, i) => (
          <span key={i} className="star">&#9734;</span>
        ))}
      </>
    );
  };


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

   //Animation
 useGSAP(() => {
  gsap.from(".reviews-header", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".reviews-header",
      start: "top 100%",
      end: "bottom 20%",
      toggleActions: "play none none reset",
    },
  });
  gsap.from(".carousel-list-container", {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".carousel-list-container",
      start: "top 100%",
      end: "bottom 20%",
      toggleActions: "play none none reset",
    },
  });
});

  return (
    <div className="reviews-container">
      <header className="reviews-header">
        <h2>Our Reviews</h2>
      </header>

      {/* <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.logo} alt={review.name} className="review-logo" />
            <div className="review-stars">
              {renderStars(review.stars)}
            </div>
            <p className="review-description">{review.description}</p>
          </div>
        ))}
      </div> */}
      <Carousel
        responsive={responsive}
        autoPlaySpeed={3000}
        infinite={true}
        draggable
        pauseOnHover
        minimumTouchDrag={80}
        swipeable
        removeArrowOnDeviceType={["mobile"]}
        containerClass="carousel-list-container"
      >
        {reviews.map((review) => (
          <Box key={review.id} sx={cardStyle}>
            <img src={review.logo} alt={review.name} className="review-logo" />
            <div className="review-stars">
              {renderStars(review.stars)}
            </div>
            <p className="review-description">{review.description}</p>
          </Box>
        ))}
      </Carousel>
    </div >
  );
};

export default Review;
const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "20px",
  minWidth: 300,
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "0px 10px",
  height:'100%'
}