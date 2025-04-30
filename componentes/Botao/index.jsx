export default function Botao({logado, setLogado}) {
  const handleClick = () => {
    setLogado(!logado);
  };

  return (
    <button onClick={handleClick}>
      {logado ? 'sair' : 'Logar'}
    </button>
  )

}