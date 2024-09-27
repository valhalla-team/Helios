"use client";

import { ReactNode, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Description, DialogTitle } from '@radix-ui/react-dialog';

interface SheetToggleProps {
  trigger: ReactNode;
  content: ReactNode;
  title?: string;
  description?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export const SheetToggle = ({
  trigger,
  content,
  title,
  description,
  side = "right",
}: SheetToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side={side} className="w-1/2">
        {title && <DialogTitle>{title}</DialogTitle>}
        {description && <Description>{description}</Description>}
        <div className="flex flex-col space-y-4 mt-4" role="document">
          {content}
        </div>
      </SheetContent>
    </Sheet>
  );
};
