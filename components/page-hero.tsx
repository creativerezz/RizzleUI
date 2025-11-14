import { cn } from "@/lib/utils"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type React from "react"

type ButtonProps = React.ComponentProps<typeof Button>

interface PageHeroProps {
  headline?: string
  title?: string | React.ReactNode
  description?: string
  links?: Array<ButtonProps & { href?: string; label: string; icon?: React.ReactNode }>
  orientation?: "vertical" | "horizontal"
  reverse?: boolean
  className?: string
  children?: React.ReactNode
}

export function PageHero({
  headline,
  title,
  description,
  links,
  orientation = "vertical",
  reverse = false,
  className,
  children,
}: PageHeroProps) {
  const isVertical = orientation === "vertical"
  const isHorizontal = orientation === "horizontal"

  return (
    <section className={cn("relative isolate", className)}>
      <Container
        className={cn(
          "flex flex-col gap-16 sm:gap-y-24",
          isVertical && "py-24 sm:py-32 lg:py-40",
          isHorizontal && "lg:grid lg:grid-cols-2 lg:items-center py-24 sm:py-32 lg:py-40",
          className
        )}
      >
        {/* Content Wrapper */}
        <div
          className={cn(
            "flex flex-col",
            isVertical && "text-center",
            isHorizontal && reverse && "lg:order-last",
            isHorizontal && !reverse && "lg:order-first"
          )}
        >
          {/* Headline */}
          {headline && (
            <div
              className={cn(
                "mb-4 font-semibold text-primary flex items-center gap-1.5",
                isVertical && "justify-center"
              )}
            >
              {headline}
            </div>
          )}

          {/* Header */}
          <div className={cn(isVertical && "flex flex-col items-center")}>
            {/* Title */}
            {title && (
              <h1
                className={cn(
                  "text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-foreground",
                  isVertical && "text-balance",
                  isHorizontal && "text-pretty",
                  description && "mb-6"
                )}
              >
                {title}
              </h1>
            )}

            {/* Description */}
            {description && (
              <p
                className={cn(
                  "text-lg sm:text-xl/8 text-muted-foreground",
                  isVertical && "text-balance mt-6",
                  isHorizontal && "text-pretty mt-6"
                )}
              >
                {description}
              </p>
            )}
          </div>

          {/* Links/Buttons */}
          {links && links.length > 0 && (
            <div
              className={cn(
                "flex flex-wrap gap-x-6 gap-y-3 mt-10",
                isVertical && "justify-center"
              )}
            >
              {links.map((link, index) => {
                const { href, label, size = "lg", icon, children, ...buttonProps } = link
                
                if (href) {
                  return (
                    <Button key={index} size={size} asChild {...buttonProps}>
                      <Link href={href}>
                        {label}
                        {icon || children}
                      </Link>
                    </Button>
                  )
                }
                
                return (
                  <Button key={index} size={size} {...buttonProps}>
                    {label}
                    {icon || children}
                  </Button>
                )
              })}
            </div>
          )}
        </div>

        {/* Default Slot (for illustrations/content) */}
        {children && (
          <div
            className={cn(
              isHorizontal && reverse && "lg:order-first",
              isHorizontal && !reverse && "lg:order-last"
            )}
          >
            {children}
          </div>
        )}
      </Container>
    </section>
  )
}

