import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={`flex flex-col space-y-1.5 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className = "", children, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-lg font-semibold leading-none tracking-tight text-gray-900 ${className}`}
    {...props}
  >
    {children}
  </h3>
));

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className = "", children, ...props }, ref) => (
  <p ref={ref} className={`text-sm text-gray-600 ${className}`} {...props}>
    {children}
  </p>
));

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={`p-6  ${className}`} {...props}>
      {children}
    </div>
  )
);

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-center p-6 pt-0 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
