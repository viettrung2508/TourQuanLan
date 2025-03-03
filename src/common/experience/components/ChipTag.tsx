import { ElementType } from "react";

export default function ChipTag({Icon, label}: {Icon: ElementType, label: string}) {
  return (
    <div className="bg-primary_green bg-opacity-20 flex items-center gap-2 py-[2px] px-2 rounded-3xl w-fit">
      <Icon className="text-primary_green"/>
      <p className="text-primary_green">{label}</p>
    </div>
  )
}