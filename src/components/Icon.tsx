import React from 'react'
import * as icons from '../utils/_icons'

interface GetIconProps {
  icon: keyof typeof icons
  size?: number
  color?: string
  key?: string
}

export const getIcon = ({ icon, size, color = '#000' }: GetIconProps) => {
  const TagName = icons[icon]
  return <TagName key={icon} size={size || 64} color={color} />
}
