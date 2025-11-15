# Components

This folder contains reusable React components for your application.

## Structure

Organize your components by feature or type:

```
components/
├── ui/           # Reusable UI components (buttons, inputs, cards, etc.)
├── layout/       # Layout components (sidebar, navbar, etc.)
├── forms/        # Form components
└── ...
```

## Example Component

```tsx
// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        variant === "primary" ? "bg-blue-600" : "bg-gray-600"
      }`}
    >
      {children}
    </button>
  );
}
```

## Usage

Import components in your pages or other components:

```tsx
import { Button } from "@/components/ui/Button";

export default function Page() {
  return <Button>Click me</Button>;
}
```
