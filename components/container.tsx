'use client'

// The package classNames is an easy way to merge class names.
import classNames from "classnames";

/**
 * The reason I have a container component is so we don't have to repeat
 * the horizontal margin everywhere. This results in more consistency in
 * the design in the end.
 */
export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={classNames("mx-auto max-w-[120rem] px-4 sm:px-8", className)}>{children}</div>;