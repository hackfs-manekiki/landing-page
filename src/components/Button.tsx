import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const PrimaryGradientButton = styled(Button)`
  background: ${({ theme }) => theme.palette.gradient.linear.primary};
  padding: 8px 16px;
  border-radius: 50px;
  height: 36px;
  color: ${({ theme }) => theme.palette.text.primary};
  &:hover {
    opacity: 0.8;
  }
`