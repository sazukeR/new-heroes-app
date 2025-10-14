import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useSearchParams } from "react-router";

interface Props {
 totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
 const [searchParams, setSearchParams] = useSearchParams();

 const queryPage = searchParams.get("page") ?? "1";

 const page = isNaN(+queryPage) ? 1 : +queryPage;

 const handleChangePage = (page: number) => {
  if (page < 1 || page > totalPages) return;

  searchParams.set("page", page.toString());

  setSearchParams(searchParams);
 };

 const pagesArr = Array.from({ length: totalPages });

 return (
  <div className="flex items-center justify-center space-x-2">
   <Button
    onClick={() => handleChangePage(page - 1)}
    variant="outline"
    size="sm"
    disabled={page === 1}
   >
    <ChevronLeft className="h-4 w-4" />
    Previous
   </Button>
   {pagesArr.map((_, index) => (
    <Button
     onClick={() => handleChangePage(index + 1)}
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

   <Button
    onClick={() => handleChangePage(page + 1)}
    variant="outline"
    size="sm"
    disabled={page === totalPages}
   >
    Next
    <ChevronRight className="h-4 w-4" />
   </Button>
  </div>
 );
};
