import { Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FeaturedProjectProps = {
  title: string;
  description: string;
};

export default function FeaturedProject({ title, description }: FeaturedProjectProps) {
  return (
    <Card className="relative overflow-hidden hover:scale-105 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary-foreground blur-3xl z-0"></div>
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center space-x-2">
          <Flame className="h-5 w-5 text-orange-500" />
          <span>Featured Project</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {description.slice(0, 100)}
        </p>
      </CardContent>
    </Card>
  );
}
