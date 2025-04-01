import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBgClass: string;
  iconClass: string;
}

const FeatureCard = ({ icon, title, description, iconBgClass, iconClass }: FeatureCardProps) => {
  return (
    <div className="bg-neutral-100 rounded-lg p-6 shadow-sm transition duration-300 hover:shadow-md">
      <div className={`w-12 h-12 ${iconBgClass} rounded-full flex items-center justify-center mb-4`}>
        <i className={`${icon} ${iconClass} text-xl`}></i>
      </div>
      <h3 className="text-xl font-semibold text-neutral-500 mb-2">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
