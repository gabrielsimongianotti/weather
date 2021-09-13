import { Container} from './styles';
interface HeaderProps {
  OpenModa: () => void
}

export function Header ({OpenModa}:HeaderProps) {
  return (
    <Container>
      <p>Empresas</p>
      <button type="button" onClick ={OpenModa}><p>+</p></button>
    </Container>
  );
}

