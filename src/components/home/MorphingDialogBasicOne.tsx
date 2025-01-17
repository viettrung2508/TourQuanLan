import { PlusIcon } from "lucide-react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogImage,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogClose,
} from "../../../components/core/morphing-dialog";

export function MorphingDialogBasicOne() {
  const products = [
    {
      id: "EB27",
      name: "EB27",
      designer: "Edouard Wilfrid Buquet",
      thumbnailSrc: "/about3.jpg",
      imageSrc: "/eb-27-lamp-edouard-wilfrid-buquet.jpg",
      description: `Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.

Research conducted in the 1970s revealed that he’d designed the “EB 27” double-arm desk lamp in 1925, handcrafting it from nickel-plated brass, aluminium and varnished wood.`,
      link: "https://www.are.na/block/12759029",
      linkText: "Are.na block",
    },
    {
      id: "LC2",
      name: "LC2",
      designer: "Le Corbusier",
      thumbnailSrc: "/about1.jpg",
      imageSrc: "/lc2-armchair-le-corbusier.jpg",
      description: `The LC2 armchair is a modernist design icon created by Le Corbusier, Pierre Jeanneret, and Charlotte Perriand in 1928. 

It is characterized by its simple geometric forms, exposed tubular steel frame, and luxurious leather cushions. The LC2 is a timeless piece of furniture that has been celebrated for its comfort, elegance, and enduring appeal.`,
      link: "https://www.are.na/block/12759029",
      linkText: "Are.na block",
    },
  ];

  return (
    <div className="">
      {products.map((product) => (
        <MorphingDialog
          key={product.id}
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
          >
            <MorphingDialogImage
              src={product.thumbnailSrc}
              alt={`${product.name} designed by ${product.designer}`}
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-grow flex-row items-end justify-between p-2">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                  {product.name}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  {product.designer}
                </MorphingDialogSubtitle>
              </div>
              <button
                type="button"
                className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                aria-label="Open dialog"
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <MorphingDialogImage
                src={product.imageSrc}
                alt={`${product.name} designed by ${product.designer}`}
                className="h-full w-full"
              />
              <div className="p-6">
                <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                  {product.name}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  {product.designer}
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                    {product.description}
                  </p>
                  <a
                    className="mt-2 inline-flex text-zinc-500 underline"
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.linkText}
                  </a>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
      ))}
    </div>
  );
}
