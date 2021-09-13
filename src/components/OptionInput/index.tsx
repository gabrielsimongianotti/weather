import { useState } from "react";

import Carets from "../../assets/Carets.png";

import { Container } from "./styles";

interface NewOptionInputProps {
  name: string;
}

export const OptionInput: React.FC<NewOptionInputProps> =({ name, children }) =>{
  const [open, setOpen] = useState(true);

  return (

    <Container>
      <div><h2>{name}</h2>  <img src={Carets} alt="Carets" onClick={()=>setOpen(!open)} /></div>

      {open?children:null}
    </Container>
  );
}