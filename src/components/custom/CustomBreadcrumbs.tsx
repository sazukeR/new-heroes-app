import { Link } from "react-router";
import { SlashIcon } from "lucide-react";
import {
 Breadcrumb,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbList,
 BreadcrumbPage,
 BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Breadcrumbs {
 to: string;
 label: string;
}

interface Props {
 currentPage: string;
 breadcrumbs?: Breadcrumbs[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumbs = [] }: Props) => {
 return (
  <Breadcrumb className="my-5">
   <BreadcrumbList>
    <BreadcrumbItem>
     <BreadcrumbLink asChild>
      <Link to="/">Home</Link>
     </BreadcrumbLink>
    </BreadcrumbItem>

    {breadcrumbs.map((crumb) => (
     <div className="flex items-center">
      <BreadcrumbItem>
       <BreadcrumbSeparator>
        <SlashIcon />
       </BreadcrumbSeparator>
       <BreadcrumbLink asChild>
        <Link to={crumb.to}>{crumb.label}</Link>
       </BreadcrumbLink>
      </BreadcrumbItem>
     </div>
    ))}
    <BreadcrumbSeparator>
     <SlashIcon />
    </BreadcrumbSeparator>

    <BreadcrumbItem>
     <BreadcrumbLink className="font-bold text-black">
      {currentPage}
     </BreadcrumbLink>
    </BreadcrumbItem>
   </BreadcrumbList>
  </Breadcrumb>
 );
};
