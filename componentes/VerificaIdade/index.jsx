export default function VerificaIdade({idade}) {
  return (
    <>
      {idade >= 18 ? <h1>Você é adulto</h1> : <h1>Você é diMenó</h1>}
    </>
  )
}