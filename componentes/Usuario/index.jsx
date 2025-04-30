export default function Usuario({online}) {
  return (
    <div>
      {online ? <h1>Usuario online</h1> : <h1>Usuario offline</h1>}
    </div>
  )
}