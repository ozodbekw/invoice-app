// shadcn
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// components
import Status from "./Status";

// icons
import { ArrowRight } from "lucide-react";

// router-dom
import { useNavigate } from "react-router-dom";

function MyCard({
  createdAt = "Due  19 Aug 2021",
  clientName = "Jensen Huang",
  total = "1,800.90",
  status = "draft",
  id = "1",
}) {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/${id}`);
      }}
      className="hover:border-indigo-500 cursor-pointer border-2 border-transparent transition-colors"
    >
      <CardHeader>
        <div className="flex items-center justify-between relative">
          <CardTitle className="font-bold text-[12px] leading-[15px]">
            <span className="text-indigo-300">#</span>
            {id}
          </CardTitle>
          <CardDescription className="text-[12px] leading-[15px]">
            {createdAt}
          </CardDescription>
          <span className="text-[12px] leading-[15px] font-medium">
            {clientName}
          </span>
          <span className="font-bold text-[16px] leading-[24px]">
            £ {total}
          </span>
          <span className="mr-10">
            <Status status={status} />
          </span>
          <ArrowRight className="absolute right-0 top-1 text-indigo-500" />
        </div>
      </CardHeader>
    </Card>
  );
}

export default MyCard;
