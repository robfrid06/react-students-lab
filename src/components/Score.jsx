const Score = ({ score }) => {
  return (
    <tr>
      <td>{score.date}</td>
      <td>{score.score}</td>
    </tr>
  )
}

export default Score