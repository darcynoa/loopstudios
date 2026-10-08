"use client";

export default function HoverAnim({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative before:absolute before:-bottom-4 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-center before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-50"
    >
        {children}
    </div>
  )
}
