import classNames from "classnames";

interface HeroProps {
   children: React.ReactNode;
}

interface HeroElementProps {
    children: React.ReactNode;
    className?: string;
}

export const HeroTitle = ({children, className}: HeroElementProps) => {
    return (
        <h1 className={classNames(
            "text-white text-gradient my-6 text-6xl md:text-8xl",
            className
            )}
            >
            {children}
        </h1>
    );
}
export const HeroSubtitle = ({children, className}: HeroElementProps) => {
    return  (
        <p className={classNames(
            "text-primary-text text-lg md:text-xl mb-12",
            className
            )}
            >
            {children}
        </p>
    );
}
export const Hero = ({children}: HeroProps) => {
    return <div className="text-center">{children}</div>
  
}