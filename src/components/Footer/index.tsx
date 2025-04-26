import {
  Container,
  FooterSection,
  Link,
  Links,
  SectionTitle,
  Content
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <Content>
      <FooterSection>
        <SectionTitle>Categoria</SectionTitle>
        <Links>
          <li>
            <Link href="#">RPG</Link>
          </li>
          <li>
            <Link href="#">Ação</Link>
          </li>
          <li>
            <Link href="#">Aventura</Link>
          </li>
          <li>
            <Link href="#">Esports</Link>
          </li>
          <li>
            <Link href="#">Simulação</Link>
          </li>
          <li>
            <Link href="#">Estratégia</Link>
          </li>
          <li>
            <Link href="#">FPS</Link>
          </li>
        </Links>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link href="#">Novidades</Link>
          </li>
          <li>
            <Link href="#">Promoções</Link>
          </li>
          <li>
            <Link href="#">Em breve</Link>
          </li>
        </Links>
      </FooterSection>

      <p>{currentYear} - &copy; E-play Todos os direitos reservados</p>
    </Content>
  </Container>
)

export default Footer
