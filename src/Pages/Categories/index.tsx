import Banner from '../../components/Header/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'RPG',
    description:
      'ogabilidade. Diablo é um RPG eletrônico de ação. O jogador se move e interage com o ambiente principalmente por meio do cursor do mouse. Outras ações, como lançar um feitiço, são executadas através de comandos do teclado.',
    title: 'Zelda',
    system: 'windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Em Resident Evil 4, você joga como Leon S. Kennedy, o protagonista de Resident Evil 2. Leon agora trabalha como agente do governo dos EUA. Ele é enviado a um vilarejo isolado na Europa após relatos da aparição da filha do presidente, que está desaparecida',
    title: 'Resident',
    system: 'windows',
    infos: ['17/05'],
    image: resident
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'Este jogo para Wii, que levou cinco anos para ser produzido, oferece aos jogadores um ambiente totalmente novo para explorar — um céu repleto de ilhas flutuantes, que Link deve percorrer com a ajuda de um pássaro gigante — e uma história de origem há muito desejada para a terra de Hyrule',
    title: 'Zelda',
    system: 'windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 4,
    category: 'RPG',
    description:
      'Assuma o papel de um Padawan fugindo dos Inquisidores do Império, recebendo ajuda de um ex-Cavaleiro Jedi, um piloto rabugento e um droide destemido enquanto luta para concluir o treinamento antes que seus planos de reviver a Ordem Jedi sejam descobertos.',
    title: 'Star Wars',
    system: 'windows',
    infos: ['17/05'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Jogabilidade. Diablo é um RPG eletrônico de ação. O jogador se move e interage com o ambiente principalmente por meio do cursor do mouse. Outras ações, como lançar um feitiço, são executadas através de comandos do teclado.',
    title: 'Diablo IV',
    system: 'windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Em Resident Evil 4, você joga como Leon S. Kennedy, o protagonista de Resident Evil 2. Leon agora trabalha como agente do governo dos EUA. Ele é enviado a um vilarejo isolado na Europa após relatos da aparição da filha do presidente, que está desaparecida.',
    title: 'Resident',
    system: 'windows',
    infos: ['17/05'],
    image: resident
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Este jogo para Wii, que levou cinco anos para ser produzido, oferece aos jogadores um ambiente totalmente novo para explorar — um céu repleto de ilhas flutuantes, que Link deve percorrer com a ajuda de um pássaro gigante — e uma história de origem há muito desejada para a terra de Hyrule',
    title: 'Zelda',
    system: 'windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Assuma o papel de um Padawan fugindo dos Inquisidores do Império, recebendo ajuda de um ex-Cavaleiro Jedi, um piloto rabugento e um droide destemido enquanto luta para concluir o treinamento antes que seus planos de reviver a Ordem Jedi sejam descobertos.',
    title: 'Star Wars',
    system: 'windows',
    infos: ['17/05'],
    image: starWars
  }
]

const Home = () => (
  <div>
    <>
      <Banner />
      <ProductList games={promocoes} title="Promoções" background={'gray'} />
      <ProductList games={emBreve} title="Em breve" background={'black'} />
    </>
  </div>
)

export default Home
