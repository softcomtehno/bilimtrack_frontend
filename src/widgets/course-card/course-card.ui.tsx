import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~shared/components/ui/card';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  id: number;
}

export function CourseCard({ title, description, image, id }: CourseCardProps) {
  return (
    <Card className="w-[350px] hover:bg-alto ">
      <Link to={`/courses/${id}`}>
        <CardHeader>
          <CardTitle className="flex items-end gap-1">
            <img
              className="w-[24px] h-[24px]"
              src={image}
              alt={title}
            />
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
}
