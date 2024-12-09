export const ProgressBar = ({ percentage }) => {
  return (
    <div className="bg-white rounded-md">
      <div
        style={{
          width: `${percentage}%`,
        }}
        className="rounded-md bg-amber-400 h-2"
      />
    </div>
  );
};
