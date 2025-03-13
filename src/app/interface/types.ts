export interface ContactProp {
  label: string;
  value: string;
  icon: string;
}

export interface NavProp {
  label: string;
  link: string;
}

export interface CardProps {
  title: string;
  subtitle: string;
  selected?: boolean;
}

export interface ServicesProps {
  title: string;
  content: string;
}

export interface PartnersProps {
  image: string;
  link: string;
  content: string;
}

export interface ProjectsProps {
  id: string;
  title: string;
  partial: string;
  content: string;
  image: string;
}
