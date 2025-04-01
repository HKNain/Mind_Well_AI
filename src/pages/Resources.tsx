import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import ResourceCard from "@/components/ResourceCard";
import { 
  resourceCategories, 
  resources, 
  getResourcesByCategory, 
  getResourceCategoryColor
} from "@/lib/resources";

const Resources = () => {
  const [location] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredResources, setFilteredResources] = useState(resources);

  // Parse query params to get initial category
  useEffect(() => {
    const params = new URLSearchParams(location.split("?")[1]);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location]);

  // Update filtered resources when category changes
  useEffect(() => {
    setFilteredResources(getResourcesByCategory(selectedCategory));
  }, [selectedCategory]);

  return (
    <section className="py-16 bg-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-500 mb-4">Mental Health Resources</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Explore our curated collection of articles, guides and exercises to support your mental wellness journey.
          </p>
        </div>

        <div className="flex items-center justify-center mb-8 overflow-x-auto py-2">
          <div className="flex space-x-2">
            {resourceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-white text-neutral-500 hover:bg-primary hover:text-white"
                } px-4 py-2 rounded-full text-sm font-medium transition duration-300`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {filteredResources.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-neutral-500 text-lg">No resources found for this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => {
              const { bgColor, textColor } = getResourceCategoryColor(resource.category);
              return (
                <ResourceCard
                  key={resource.id}
                  category={resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                  categoryColor={textColor}
                  bgColorClass={bgColor}
                  readTime={resource.readTime}
                  title={resource.title}
                  description={resource.description}
                  imageSrc={resource.imageSrc}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Resources;
