// shadcn
import { buttonVariants } from "./ui/button";

function Status({ status = "draft" }) {
  const style = {
    paid: {
      text: "text-[#33D69F]",
      bg: "rgba(55,59,83,0.05)",
      dot: "bg-[#33D69F]",
    },
    pending: {
      text: "text-[#FF8F00]",
      bg: "rgba(255, 143, 0, 0.05)",
      dot: "bg-[#FF8F00]",
    },
    draft: {
      text: "text-[#373B53]",
      bg: "rgba(55, 59, 83, 0.05)",
      dot: "bg-[#373B53]",
    },
  };

  return (
    <span
      style={{
        backgroundColor: style[status].bg,
      }}
      className={`${buttonVariants({
        variant: "outline",
      })} min-w-[104px] border-none rounded-2xl inline-flex items-center gap-2 `}
    >
      <span
        className={`inline-block w-2 h-2 rounded-full ${style[status].dot}`}
      ></span>
      <span className={`capitalize ${style[status].text}`}>{status}</span>
    </span>
  );
}

export default Status;
