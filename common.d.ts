/**
 * Global component properties interface.
 * All components should extend this interface.
 */
export interface ComponentProps {
  /**
   * Optional CSS class for the component root element.
   */
  className?: string;
  /**
   * Optional ID for the component root element.
   */
  id?: string;
}

/**
 * Defines the structure for an image.
 */
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Defines the structure for a button.
 */
export interface ButtonProps extends ComponentProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
}

/**
 * Defines the structure for a heading.
 */
export interface HeadingProps extends ComponentProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Defines the structure for a review.
 */
export interface Review {
  id: string;
  author: string;
  avatar: ImageProps;
  rating: number;
  content: string;
}

/**
 * Defines the structure for a trending swap item.
 */
export interface TrendingSwap {
  id: string;
  title: string;
  image: ImageProps;
  description: string;
  participants: number;
}