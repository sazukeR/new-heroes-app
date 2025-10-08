import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
 totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
 const page = 8 as number;

 const pagesArr = Array.from({ length: totalPages });

 return (
  <div className="flex items-center justify-center space-x-2">
   <Button variant="outline" size="sm" disabled={page === 1}>
    <ChevronLeft className="h-4 w-4" />
    Previous
   </Button>
   {pagesArr.map((_, index) => (
    <Button
     key={index}
     variant={index + 1 === page ? "default" : "outline"}
     size="sm"
    >
     {index + 1}
    </Button>
   ))}

   {/* <Button variant="outline" size="sm">
    2
   </Button>
   <Button variant="outline" size="sm">
    3
   </Button>
   <Button variant="ghost" size="sm" disabled>
    <MoreHorizontal className="h-4 w-4" />
   </Button> */}

   <Button variant="outline" size="sm" disabled={page === totalPages}>
    Next
    <ChevronRight className="h-4 w-4" />
   </Button>
  </div>
 );
};
