"use client";

import { ReactNode } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from 'react';
import { Description, DialogTitle } from '@radix-ui/react-dialog';

interface CustomSheetProps {
  trigger: ReactNode; 
  content: ReactNode; 
  title?: string;
  description?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export const CustomSheet = ({ 
  trigger, 
  content, 
  title, 
  description, 
  side = 'right' 
}: CustomSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side={side}>
        {title && <DialogTitle>{title}</DialogTitle>}
        {description && <Description>{description}</Description>}
        <div className="flex flex-col space-y-4 mt-4" role="document">
          {content}
        </div>
      </SheetContent>
    </Sheet>
  );
};
