import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { User } from 'lucide-react';

interface GridItemProps {
  name: string; 
  avatarUrl?: string | null; 
}

interface GridProps {
  totalItems: number; 
  data?: Array<GridItemProps>; 
  isLoading?: boolean;
  hasError?: boolean; 
  errorIcon?: React.ElementType; 
  defaultIcon?: React.ElementType; 
  label?: string;
}

const Grid: React.FC<GridProps> = ({
  totalItems,
  data = [],
  isLoading = false,
  hasError = false,
  errorIcon: ErrorIcon = User, 
  defaultIcon: DefaultIcon = User,
  label = 'Item',
}) => {
  const placeholdersNeeded = totalItems - data.length;

  const placeholders = Array.from({ length: placeholdersNeeded }).map((_, index) => ({
    name: `${label} ${index + 1}`,
    avatarUrl: null,
  }));

  const itemsToRender = [...data, ...placeholders];

  const renderAvatar = (item: GridItemProps, isPlaceholder: boolean) => (
    <Avatar
      className={`h-12 w-12 rounded-sm ${
        isLoading ? "animate-pulse bg-muted" : ""
      } ${isPlaceholder? "opacity-50" : ""}  `}
    >
      {item.avatarUrl ? (
        <AvatarImage src={item.avatarUrl} alt={item.name} className="rounded-md" />
      ) : (
        <AvatarFallback className="text-muted bg-opacity-10 rounded-sm flex items-center justify-center h-full w-full">
          {hasError ? (
            <ErrorIcon className="h-6 w-6" />
          ) : (
            <DefaultIcon className="h-6 w-6" />
          )}
        </AvatarFallback>
      )}
    </Avatar>
  );

  const renderCardContent = (item: GridItemProps, isPlaceholder: boolean) => (
    <CardContent className="flex justify-center p-0">
      <span
        className={`w-[7ch] h-4 rounded-sm text-xs truncate ${
          isLoading ? "animate-pulse bg-accent opacity-10" : ""
        } ${isPlaceholder ? "text-muted" : ""}`}
      >
        {item.name}
      </span>
    </CardContent>
  );

  return (
    <div className="flex flex-wrap justify-around gap-4 sm:grid sm:grid-cols-6 md:grid-cols-2 lg:grid-cols-3">
      {itemsToRender.map((item, index) => {
        const isPlaceholder = item.avatarUrl === null;

        return (
          <Card
            key={item.name + index}
            className={`relative overflow-hidden transition-all duration-300 space-y-2 p-2 text-center border-none ${
              isPlaceholder ? "shadow-none" : ""
            }`}
          >
            <CardHeader className="p-0 flex flex-col justify-center items-center">
              {renderAvatar(item, isPlaceholder)}
            </CardHeader>
            {renderCardContent(item, isPlaceholder)}
          </Card>
        );
      })}
    </div>
  );
};

export default Grid;