import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Application = {
  id: number
  name: string
  avatar: string
}

type ApplicationsListProps = {
  applications: Application[]
}

export default function ApplicationsList({ applications }: ApplicationsListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Applications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {applications.map((application) => (
            <div key={application.id} className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src={application.avatar} alt={application.name} />
                <AvatarFallback>{application.name[0]}</AvatarFallback>
              </Avatar>
              <span>{application.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}