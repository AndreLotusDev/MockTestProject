import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css',
})
export class WebComponent {
  public newsArr = [
    {
      id: 1,
      img: 'https://media.discordapp.net/attachments/1150797086112088085/1261012810817736897/O-surgimento-do-dinheiro-800x450.webp?ex=66916932&is=669017b2&hm=8f1600de89c439444ec47766d63c7b6aa8fd055cdc937e72aa2e5d6bc7b613c3&=&format=webp',
      title: 'Jovem de 23 anos ganha 2 milhões de reais na loteria',
      subtitle:
        'Um jovem de 22 anos, morador de São Paulo, está celebrando após ganhar o prêmio máximo na loteria. Com um bilhete de sorte comprado em uma pequena lotérica do bairro, ele agora é o mais novo milionário do Brasil, levando para casa um prêmio de R$ 20 milhões. Em entrevista, o rapaz declarou que pretende ajudar a família, investir em educação e viajar pelo mundo. "É um sonho que se torna realidade", disse ele, emocionado. A comunidade local também está em festa, comemorando a sorte do conterrâneo.',
    },
    {
      id: 2,
      img: 'https://media.discordapp.net/attachments/1150797086112088085/1261012871664504862/shell-gas-stations-front-let.webp?ex=66916941&is=669017c1&hm=f2823bb04cb07dd46fed5be98afe5db99a4605927348ac1bfd97e85ff6de86cd&=&format=webp&width=1198&height=676',
      title: 'Jovem Envolvido em Suposto Escândalo de Corrupção na Shell',
      subtitle:
        'Um jovem de 22 anos está no centro de uma investigação sobre um suposto escândalo de corrupção envolvendo a gigante petrolífera Shell. De acordo com fontes policiais, ele estaria ligado a um esquema de pagamento de propinas para facilitar contratos e operações da empresa. O jovem, que atuava como consultor externo, teria usado sua influência para obter vantagens indevidas. A Shell afirmou estar cooperando com as autoridades e que não tolera práticas corruptas. O caso ainda está em fase inicial e as investigações devem se aprofundar nos próximos dias.',
    },
    {
      id: 3,
      img: 'https://media.discordapp.net/attachments/1150797086112088085/1261013003458056344/deep-web-cover.jpg?ex=66916960&is=669017e0&hm=367cd9815fa3e985411b775ac244921f91e10a45f4af91881af0bda8532169f6&=&format=webp&width=1013&height=676',
      title: 'Jovem de 23 Anos Preso por Acessos Ilegais na Dark Web',
      subtitle:
        'Um jovem de 23 anos foi preso ontem, em uma operação da Polícia Federal, acusado de realizar acessos ilegais na dark web. Segundo os investigadores, ele estaria envolvido em atividades criminosas, incluindo a venda de dados pessoais e financeiros roubados, além de participação em fóruns de hackers. A operação, que durou meses, culminou na apreensão de computadores, celulares e outros dispositivos eletrônicos na residência do suspeito. O jovem pode enfrentar várias acusações, que incluem crimes cibernéticos e formação de quadrilha. As autoridades ressaltam a importância de ações rigorosas para combater o crime na internet.',
    },
  ];
}
