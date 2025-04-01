export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  readTime: string;
  imageSrc: string;
}

export type ResourceCategory = 'mindfulness' | 'anxiety' | 'depression' | 'stress' | 'sleep' | 'relationships';

export const getResourceCategoryColor = (category: ResourceCategory): { bgColor: string, textColor: string } => {
  switch (category) {
    case 'mindfulness':
      return { bgColor: 'bg-primary-light/20', textColor: 'text-primary' };
    case 'anxiety':
      return { bgColor: 'bg-blue-100', textColor: 'text-blue-600' };
    case 'depression':
      return { bgColor: 'bg-secondary-light/20', textColor: 'text-secondary' };
    case 'stress':
      return { bgColor: 'bg-orange-100', textColor: 'text-orange-600' };
    case 'sleep':
      return { bgColor: 'bg-accent-light/20', textColor: 'text-accent' };
    case 'relationships':
      return { bgColor: 'bg-purple-100', textColor: 'text-purple-600' };
    default:
      return { bgColor: 'bg-gray-100', textColor: 'text-gray-600' };
  }
};

export const resourceCategories = [
  { id: 'all', name: 'All Resources' },
  { id: 'anxiety', name: 'Anxiety' },
  { id: 'depression', name: 'Depression' },
  { id: 'stress', name: 'Stress Management' },
  { id: 'sleep', name: 'Sleep' },
  { id: 'mindfulness', name: 'Mindfulness' },
  { id: 'relationships', name: 'Relationships' }
];

export const resources: Resource[] = [
  {
    id: '1',
    title: '5 Mindfulness Practices for Daily Stress Relief',
    description: 'Learn simple mindfulness techniques you can incorporate into your daily routine to manage stress and anxiety.',
    category: 'mindfulness',
    readTime: '5 min',
    imageSrc: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Understanding and Managing Depression',
    description: 'An evidence-based guide to understanding depression symptoms and effective strategies for management.',
    category: 'depression',
    readTime: '8 min',
    imageSrc: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Improving Sleep Quality for Better Mental Health',
    description: 'Discover the connection between sleep and mental wellbeing, with practical tips for better sleep hygiene.',
    category: 'sleep',
    readTime: '6 min',
    imageSrc: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Recognizing Anxiety: Signs, Symptoms, and Support',
    description: 'Learn how to identify anxiety symptoms and discover coping strategies that work for different situations.',
    category: 'anxiety',
    readTime: '7 min',
    imageSrc: 'https://images.unsplash.com/photo-1582561833087-1655940339c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Building Resilience in Challenging Times',
    description: 'Strategies to develop emotional resilience and maintain mental wellbeing during periods of stress and uncertainty.',
    category: 'stress',
    readTime: '10 min',
    imageSrc: 'https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Nurturing Healthy Relationships for Mental Wellbeing',
    description: 'Explore how healthy relationships contribute to mental health and learn skills for better communication.',
    category: 'relationships',
    readTime: '9 min',
    imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const getResourcesByCategory = (categoryId: string): Resource[] => {
  if (categoryId === 'all') return resources;
  return resources.filter(resource => resource.category === categoryId);
};

export const getResourceById = (id: string): Resource | undefined => {
  return resources.find(resource => resource.id === id);
};
