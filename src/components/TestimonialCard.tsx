interface TestimonialCardProps {
  quote: string;
  name: string;
  rating: number; // Rating from 1-5
}

const TestimonialCard = ({ quote, name, rating }: TestimonialCardProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    // Add empty stars to make it up to 5
    const emptyStars = 5 - (fullStars + (hasHalfStar ? 1 : 0));
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className="bg-neutral-100 p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <i className="fas fa-quote-left text-primary opacity-30 text-4xl"></i>
      </div>
      <p className="text-neutral-500 italic mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-neutral-300 flex items-center justify-center text-white font-semibold mr-3">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-medium text-neutral-500">{name}</h4>
          <div className="flex text-yellow-400">{renderStars()}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
