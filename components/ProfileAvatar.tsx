"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { useAvatarMorph } from "@/components/AvatarMorphProvider";

type ProfileAvatarProps = {
  className?: string;
};

export default function ProfileAvatar({ className = "" }: ProfileAvatarProps) {
  const { t } = useLanguage();
  const morph = useAvatarMorph();

  return (
    <div className={`relative mx-auto ${className}`}>
      <div className="flex flex-col items-center gap-3 sm:hidden">
        <div className="profile-avatar-mobile relative">
          <div className="profile-avatar-ring" aria-hidden="true" />
          <div
            ref={morph?.heroRef}
            className="profile-avatar-hero relative h-[5.5rem] w-[5.5rem] overflow-hidden rounded-full border-2 border-white/20 shadow-xl shadow-cyan-500/10"
          >
            <Image
              src="/images/profile.png"
              alt={t.profile.name}
              fill
              className="object-cover object-[center_15%]"
              sizes="88px"
              priority
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/20 text-[10px]">
            📱
          </span>
        </div>
        <div className="flex gap-2">
          {["Flutter", "RN"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="profile-avatar-desktop relative w-full">
          <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-rose-500/15 blur-xl sm:-inset-4 sm:rounded-[2rem]" />
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl sm:rounded-[2rem]">
            <Image
              src="/images/profile.png"
              alt={t.profile.name}
              fill
              className="object-cover object-[center_15%] transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 280px, 360px"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040810]/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
