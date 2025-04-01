interface ResourceCardProps {
  category: string;
  categoryColor: string;
  bgColorClass: string;
  readTime: string;
  title: string;
  description: string;
  imageSrc: string;
}

const ResourceCard = ({
  category,
  categoryColor,
  bgColorClass,
  readTime,
  title,
  description,
  imageSrc,
}: ResourceCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 h-full">
      <div className="h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className={`${bgColorClass} ${categoryColor} text-xs font-semibold px-3 py-1 rounded-full`}>
            {category}
          </span>
          <span className="ml-auto text-neutral-400 text-sm">{readTime} read</span>
        </div>
        <h3 className="text-xl font-semibold text-neutral-500 mb-2">{title}</h3>
        <p className="text-neutral-400 mb-4">{description}</p>
        <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
          Read More <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
