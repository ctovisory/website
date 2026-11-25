const base = "items-center justify-center gap-1.5 rounded-md tracking-[0.1em] transition-colors";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-brand text-brand hover:bg-brand hover:text-white",
};

const sizes = {
  md: "px-7 py-3",
  sm: "px-3 py-3 text-sm",
};

/** Button classes. Display is left to the caller (defaults to inline-flex) so responsive hiding works. */
export function button(variant: keyof typeof variants, { size = "md", display = "inline-flex" }: { size?: keyof typeof sizes; display?: string } = {}) {
  return `${display} ${base} ${variants[variant]} ${sizes[size]}`;
}
