import { ButtonContainer, ButtonLink } from './styles'

//Typagem
type Props = {
  type?: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button')
    return (
      <ButtonContainer type="button" title={title}>
        {children}
      </ButtonContainer>
    )

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
