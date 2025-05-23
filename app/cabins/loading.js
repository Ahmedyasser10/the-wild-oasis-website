import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="item grid items-center justify-center">
      <Spinner />
      <p className="text-primary-200 text-xl">Loading cabin data...</p>
    </div>
  );
}
