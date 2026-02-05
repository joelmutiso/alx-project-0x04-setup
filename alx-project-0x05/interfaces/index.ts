import { ReactNode } from "react";

// For components/common/Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// For components/layouts/Layout.tsx
export interface LayoutProps {
  children: ReactNode;
}

// For pages/index.tsx (Imperative routing)
export interface PageRouteProps {
  pageRoute: string;
}