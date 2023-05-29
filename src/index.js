import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Pages/Root';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Post from './Pages/Post';
import Error from './Pages/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import './style.css';
import './menu-style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
       <Menu>
          <Link id="home" className="menu-item" to="/">Home</Link>
          <Link id="about" className="menu-item" to="/about">Sobre</Link>
          <Link id="contact" className="menu-item" to="/contact">Contato</Link>
      </Menu>

      <section className="container">
        <Routes>
             <Route path="/" element={<Root />} exact/>
             <Route path="posts/:slug" element={<Post />} />
             <Route path="about" element={<About />}></Route>
             <Route path="contact" element={<Contact />}></Route>
             <Route path="post" element={<Post />}></Route>
             <Route path="*" element={<Error/>} />
        </Routes>
      </section>
    </Router>
);


// {
//     "1": {
//             "id": "01",
//             "title": "O ChatGPT não veio para te substituir",
//             "date": "Fev. 2023",
//             "image": "",
//             "text": "As visões apocalípticas da nova era tecnológica estão a todo o vapor.<br/><br/>Em todos os lugares é possível ver os semeadores do alarmismo  Bem, eu acredito que não. A começar que o ChatGPT não foi feito com o intuito de dominar a humanidade e substituir o trabalho de todo mundo aqui na internet e mundo afora. Estamos falando de um modelo de linguagem treinado para gerar textos de forma autônoma. De uma tecnologia que usa rede neural com milhares de informações com o objetivo de criar soluções plausíveis para problemas existentes. Não é a Skynet. Portanto, independente da sua profissão, não tenha medo disso. Procure entender como funciona, e adapte-se a essa nova ferramenta. Não importa se ela cria textos incríveis em poucos segundos ou se pode criar códigos complexos de maneira deliberada. A única maneira de você ser substituído por um robô, é ser igual a um. Ou seja, se você se contenta em entregar somente o mínimo e não se esforça para desenvolver algo de fato bom. O mínimo todo mundo faz, e agora a IA está fazendo muito melhor. O ChatGPT está aí para que você aprenda com ele, e não para te causar terror. Deixe disso, desenvolva sua identidade e não seja como um robô. Você vai me agradecer depois."
//         },
//     "2": {
//             "id": "01",
//             "title": "O ChatGPT não veio para te substituir",
//             "date": "",
//             "image": "",
//             "text": "As visões apocalípticas da nova era tecnológica estão a todo o vapor.<br/><br/>Em todos os lugares é possível ver os semeadores do alarmismo  Bem, eu acredito que não. A começar que o ChatGPT não foi feito com o intuito de dominar a humanidade e substituir o trabalho de todo mundo aqui na internet e mundo afora. Estamos falando de um modelo de linguagem treinado para gerar textos de forma autônoma. De uma tecnologia que usa rede neural com milhares de informações com o objetivo de criar soluções plausíveis para problemas existentes. Não é a Skynet. Portanto, independente da sua profissão, não tenha medo disso. Procure entender como funciona, e adapte-se a essa nova ferramenta. Não importa se ela cria textos incríveis em poucos segundos ou se pode criar códigos complexos de maneira deliberada. A única maneira de você ser substituído por um robô, é ser igual a um. Ou seja, se você se contenta em entregar somente o mínimo e não se esforça para desenvolver algo de fato bom. O mínimo todo mundo faz, e agora a IA está fazendo muito melhor. O ChatGPT está aí para que você aprenda com ele, e não para te causar terror. Deixe disso, desenvolva sua identidade e não seja como um robô. Você vai me agradecer depois."
//         }
// }