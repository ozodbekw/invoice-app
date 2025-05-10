import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

function CardSkeleton({ length = 6 }) {
  return (
    <div className="flex flex-col gap-4 base-container">
      {Array(length)
        .fill(0)
        .map((_, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-bold text-[12px] leading-[15px]">
                    <Skeleton className="w-[72px] h-4 rounded-md bg-slate-300" />
                  </CardTitle>
                  <CardDescription className="text-[12px] leading-[15px]">
                    <Skeleton className="w-[109px] h-5 rounded-md bg-slate-300" />
                  </CardDescription>
                  <span className="text-[12px] leading-[15px] font-medium">
                    <Skeleton className="w-[104px] h-6 rounded-md bg-slate-300" />
                  </span>
                  <span className="font-bold text-[16px] leading-[24px]">
                    <Skeleton className="w-[63px] h-6 rounded-md bg-slate-300" />
                  </span>
                  <Skeleton className="w-[104px] h-9 rounded-md bg-slate-300" />
                </div>
              </CardHeader>
            </Card>
          );
        })}
    </div>
  );
}

export default CardSkeleton;
