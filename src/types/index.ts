export interface FormData {
  name: string;
  phone: string;
  car: string;
}

export interface AnimationCardReturn {
  ref: (node?: Element | null) => void;
  isInView: boolean;
}

export interface ServiceCardProps {
  delay: string;
  children: React.ReactNode;
}