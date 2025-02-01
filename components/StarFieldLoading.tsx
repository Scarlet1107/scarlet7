export default function StarFieldLoading() {
  return (
    <div className="w-full h-screen  bg-gradient-to-br from-[#0D1B2A] via-[#1B2735] to-[#01040F] shadow-inner-strong xl:shadow-inner-ultra fixed">
      <div className="text-white absolute left-[90vw] top-[90vh]">
        <div className="loader"></div>
      </div>
    </div>
  );
}
