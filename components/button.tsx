import Link from "next/link"
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode;
    href: string;
}

const buttonClasses = cva("rounded-full inline-flex items-center font-semibold", {
    variants: {
        variant: {
            primary: "bg-btn-purple text-white hover:text-background hover:bg-white transition ease-out duration-400",
            secondary: "",
            tertiary: "",
        },
        size:{
            small: "text-xs px-3 h-7",
            medium: "text-sm px-4 md:px-10 h-8",
            large: "text-md px-6 h-12",
        },
    },
    defaultVariants:{
        variant: "primary",
        size: "medium"
    }
})

export const  Button = ({children, href, variant, size}: ButtonProps) => {
    return (
    <Link className={buttonClasses({ variant, size })}href={href}>
        {children}
    </Link>
    );
};