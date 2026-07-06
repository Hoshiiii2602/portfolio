import Image from "next/image";

type ProfileAvatarProps = {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  showRing?: boolean;
};

const sizes = {
  sm: { box: "h-9 w-9", img: 36, rounded: "rounded-xl" },
  md: { box: "h-14 w-14", img: 56, rounded: "rounded-2xl" },
  lg: { box: "h-28 w-28", img: 112, rounded: "rounded-2xl" },
  hero: { box: "h-full w-full", img: 400, rounded: "rounded-[1.75rem]" },
};

export default function ProfileAvatar({
  size = "md",
  className = "",
  showRing = true,
}: ProfileAvatarProps) {
  const s = sizes[size];

  return (
    <div
      className={`relative shrink-0 overflow-hidden ${s.box} ${s.rounded} ${
        showRing ? "ring-2 ring-white/10 ring-offset-2 ring-offset-[#040810]" : ""
      } ${className}`}
    >
      {showRing && (
        <div className="absolute -inset-0.5 rounded-[inherit] bg-gradient-to-br from-cyan-400 via-rose-400 to-violet-500 opacity-80" />
      )}
      <div className={`relative h-full w-full overflow-hidden ${s.rounded} bg-[#0a1020]`}>
        <Image
          src="/images/profile.png"
          alt="Nguyễn Xuân Trọng"
          width={s.img}
          height={s.img}
          className="h-full w-full object-cover object-top"
          priority={size === "hero" || size === "lg"}
        />
      </div>
    </div>
  );
}
