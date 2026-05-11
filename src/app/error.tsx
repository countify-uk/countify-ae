'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a112d] text-white">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="text-white/60 mb-6">We apologise for the inconvenience.</p>
      <button onClick={reset} className="px-6 py-3 bg-[#dca958] rounded-lg font-medium">Try again</button>
    </div>
  );
}
