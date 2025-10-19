"use client"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { User } from "lucide-react"
import * as React from "react"

const userAvatarVariants = cva(
  "relative flex shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground overflow-hidden",
  {
    variants: {
      size: {
        xs: "size-6 text-xs",
        sm: "size-8 text-sm",
        md: "size-10 text-base",
        lg: "size-12 text-lg",
        xl: "size-16 text-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

type UserAvatarProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof userAvatarVariants> & {
    user?: {
      name?: string | null
      image?: string | null
    }
  }

const UserAvatar = React.forwardRef<HTMLSpanElement, UserAvatarProps>(
  ({ className, size, user, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(userAvatarVariants({ size }), className)}
        {...props}
      >
        {user?.image ? (
          <img
            src={user.image}
            alt={user.name ?? ""}
            className="aspect-square h-full w-full"
          />
        ) : (
          <User className="aspect-square h-3/4 w-3/4" />
        )}
      </span>
    )
  }
)

UserAvatar.displayName = "UserAvatar"

export { UserAvatar, userAvatarVariants }
export type { UserAvatarProps }
