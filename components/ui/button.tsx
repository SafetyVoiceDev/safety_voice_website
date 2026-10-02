import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-bold whitespace-nowrap transition-[color,background-color,border-color,transform] duration-150 select-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Ink label on orange: AA at any size. Use for small buttons (header).
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover",
        // White label on orange: only pass at 18px/700+, so pair with size="xl".
        cta: "bg-primary text-cta-foreground shadow-cta hover:-translate-y-px hover:bg-primary-hover active:translate-y-0",
        outline:
          "border-[1.5px] border-border bg-background text-foreground hover:border-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_8%)]",
        ghost: "text-foreground hover:bg-muted",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        // Dark band behind orange: store buttons in the final CTA.
        ink: "bg-ink text-ink-foreground hover:bg-ink/85",
        link: "font-bold text-primary-ink underline-offset-4 hover:underline",
        // Inherits the surrounding text color: footer, orange band.
        "link-plain": "text-current underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-11 gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        sm: "h-9 gap-1.5 px-3 text-[0.8125rem] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-2 px-5 text-base",
        xl: "h-12 gap-2.5 px-7 text-lg leading-none md:h-14 [&_svg:not([class*='size-'])]:size-5",
        header: "h-10 gap-1.5 px-4 text-[0.9375rem]",
        inline: "h-auto gap-1 p-0 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
