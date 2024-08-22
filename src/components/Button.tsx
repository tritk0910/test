export default function Button({ children }: { children: string }) {
  return (
    <button className="p-[21px_36px_21px_37px] rounded-sm border-[#020001] border-[3px] font-extrabold text-[23px] uppercase">
      {children}
    </button>
  );
}
