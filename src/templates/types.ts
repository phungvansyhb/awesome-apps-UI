import type { ComponentType } from "react";

export type TemplateCategoryId =
  | "ban-le"
  | "landing-page"
  | "technical"
  | "dashboard"
  | "portfolio"
  | "dich-vu"
  | "giao-duc";

export interface TemplateCategory {
  id: TemplateCategoryId;
  label: string;
  shortLabel: string;
  description: string;
}

export type BentoSpan = "wide" | "tall" | "standard";

export interface TemplateMetadata {
  slug: string;
  name: string;
  brandTitle: string;
  category: TemplateCategoryId;
  tagline: string;
  description: string;
  tags: string[];
  accentColor: string;
  surfaceTone: "light" | "dark";
  bentoSpan: BentoSpan;
  featured?: boolean;
  highlights: string[];
}

export interface TemplateRegistryEntry extends TemplateMetadata {
  /**
   * Lazy loader or direct React component for the isolated template preview.
   * Populated per template during Construction Units (UNIT-03 to UNIT-05).
   */
  Component?: ComponentType;
}
