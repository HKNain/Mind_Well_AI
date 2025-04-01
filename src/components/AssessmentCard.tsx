interface AssessmentCardProps {
  title: string;
  description: string;
  icon: string;
  iconBgClass: string;
  iconClass: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const AssessmentCard = ({
  title,
  description,
  icon,
  iconBgClass,
  iconClass,
  isSelected = false,
  onClick,
}: AssessmentCardProps) => {
  const borderClass = isSelected ? "border-primary-light" : "border-neutral-300";
  const hoverClass = isSelected ? "bg-primary-light/10" : "hover:bg-neutral-200/50";

  return (
    <div
      className={`border ${borderClass} rounded-lg p-4 cursor-pointer ${hoverClass} transition duration-300`}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className={`${iconBgClass} rounded-full p-2 mr-3`}>
          <i className={`${icon} ${iconClass}`}></i>
        </div>
        <div>
          <h5 className="font-medium text-neutral-500">{title}</h5>
          <p className="text-sm text-neutral-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
