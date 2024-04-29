import { Banner } from '../../Components/Banner';
import { Escritorio } from './Escritorio';
import { Socios } from './Socios';
import { AreasAtuacao } from './AreasAtuacao';
import { OndeEstamos } from './OndeEstamos';
import { Duvidas } from './Duvidas';
import { Rodape } from '../../Components/Rodape';
import { RedesSociais } from './Redes Sociais';

function Home() {

  return (
    <div>
      <Escritorio/>
      <Socios/>
      <AreasAtuacao/>
      <RedesSociais/>
      <OndeEstamos/>
      <Duvidas/>
      <Rodape/>
    </div>
  );
}

export default Home;
