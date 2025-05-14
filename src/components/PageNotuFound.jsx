import NotFoundImage from "../assets/not-found-bg.svg";

function PageNotuFound() {
  return (
    <div className="flex flex-col items-center text-center mx-auto">
      <img src={NotFoundImage} alt="not fount image" width={241} height={200} />
      <h1 className="font-bold text-[20px] text-[#0C0E16]">
        There is nothing here
      </h1>
      <p>
        Create an invoice by clicking the New Invoice button and get started
      </p>
    </div>
  );
}

export default PageNotuFound;
