import "./redesSociais.css";

const RedesSociais = () => {
  const listaRedes = [
    {
      id: 1,
      urlNome: "Linkedin",
      url: "https://www.linkedin.com/in/engruanfelippe/",
    },
    {
      id: 2,
      urlNome: "Portfólio - Em Construção!",
      url: "",
    },
    {
      id: 3,
      urlNome: "GitHub",
      url: "https://github.com/ruanfelippecode",
    },
    {
      id: 4,
      urlNome: "Email",
      url: "mailto:ruanfelippedev@gmail.com",
    },
  ];

  const linksRedes = listaRedes.map((props) => (
    <div key={props.id} className="conteudo_links">
      <a href={props.url}>{props.urlNome}</a>
    </div>
  ));
  return <>{linksRedes}</>;
};

export default RedesSociais;
