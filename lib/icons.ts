import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ClipboardList,
  Construction,
  Factory,
  GraduationCap,
  HardHat,
  Layers,
  Landmark,
  Mountain,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

import type { IndustryIconName } from "@/types/home";
import type { ServiceIconName } from "@/types/services";

export const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  layers: Layers,
  crane: Construction,
  rebar: Wrench,
  clipboard: ClipboardList,
  building: Building2,
  truck: Truck,
  "graduation-cap": GraduationCap,
};

export const industryIcons: Record<IndustryIconName, LucideIcon> = {
  landmark: Landmark,
  "hard-hat": HardHat,
  "building-2": Building2,
  factory: Factory,
  zap: Zap,
  mountain: Mountain,
};
