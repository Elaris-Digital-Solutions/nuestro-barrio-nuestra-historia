import * as React from "react"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const detectTheme = (): ToasterProps["theme"] => {
  if (typeof document === "undefined" || typeof window === "undefined") return "light"
  const html = document.documentElement
  if (html.classList.contains("dark")) return "dark"
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

const Toaster = ({ ...props }: ToasterProps) => {
  const [theme, setTheme] = React.useState<ToasterProps["theme"]>(() => detectTheme())

  React.useEffect(() => {
    const html = document.documentElement
    const onChange = () => setTheme(detectTheme())
    const observer = new MutationObserver(onChange)
    observer.observe(html, { attributes: true, attributeFilter: ["class"] })
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    mql.addEventListener?.("change", onChange)
    return () => {
      observer.disconnect()
      mql.removeEventListener?.("change", onChange)
    }
  }, [])

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
