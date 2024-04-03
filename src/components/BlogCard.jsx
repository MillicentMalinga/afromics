import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
   
  export function BlogCard({img, title, body, author, date, likes}) {
    return (
      <Card className="max-w-[100%] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={img} className="h-48 w-full object-cover object-center rounded-none"
            alt="Cover "
          />
        </CardHeader>
        <CardBody>
          <Typography className="font-body-plex text-blue-gray-700 font-bold text-sm">
            {title}
          </Typography>
          <Typography className="mt-3 font-body-plex h-60 text-clip text-blue-gray-700  font-light text-sm">
            {body}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            
            <Typography className="font-body-plex text-xs font-extrabold text-blue-gray-600">Written by: {author}</Typography>
          </div>
          <Typography className="font-bold text-xs font-logo">{likes} likes</Typography>
        </CardFooter>
      </Card>
    );
  }