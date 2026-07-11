/**
 * Ridgetechone component library
 *
 * Prop-driven, accessible, dark-mode-ready building blocks.
 * Prefer composing these over duplicating markup in route files.
 */

export type * from "./types";

export { Container, containerVariants } from "./container";
export type { ContainerProps } from "./container";

export { Section, sectionVariants } from "./section";
export type { SectionProps } from "./section";

export { SectionHeader } from "./section-header";
export type { SectionHeaderProps } from "./section-header";

export { Button, buttonVariants } from "./button";
export type { ButtonProps } from "./button";

export { Badge, badgeVariants } from "./badge";
export type { BadgeProps } from "./badge";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
} from "./card";
export type { CardProps } from "./card";

export { Navbar } from "./navbar";
export type { NavbarProps, NavbarBrand } from "./navbar";

export { Footer } from "./footer";
export type { FooterProps, FooterBrand } from "./footer";

export { Hero } from "./hero";
export type { HeroProps } from "./hero";

export { ServiceCard } from "./service-card";
export type { ServiceCardProps } from "./service-card";

export { ProjectCard } from "./project-card";
export type { ProjectCardProps } from "./project-card";

export { StatisticCard } from "./statistic-card";
export type { StatisticCardProps } from "./statistic-card";

export { AnimatedCounter } from "./animated-counter";
export type { AnimatedCounterProps } from "./animated-counter";

export { Timeline } from "./timeline";
export type { TimelineProps, TimelineStep } from "./timeline";

export { CtaSection } from "./cta-section";
export type { CtaSectionProps } from "./cta-section";

export { Accordion } from "./accordion";
export type { AccordionProps } from "./accordion";

export { Gallery } from "./gallery";
export type { GalleryProps } from "./gallery";

export { ContactForm } from "./contact-form";
export type { ContactFormProps, ContactFormValues } from "./contact-form";

export { Label, Input, Textarea } from "./form-controls";
export type { LabelProps, InputProps, TextareaProps } from "./form-controls";

export { Breadcrumbs } from "./breadcrumbs";
export type { BreadcrumbsProps } from "./breadcrumbs";

export { PageHeader } from "./page-header";
export type { PageHeaderProps } from "./page-header";
