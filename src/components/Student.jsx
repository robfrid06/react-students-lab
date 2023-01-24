import Score from "./Score"

const Student = ({ student }) => {
  return (
    <div className="Student">
      <h2>{student.name}</h2>
      <p>{student.bio}</p>
      <table className="Score-Table">
        <thead>
          <tr>
            <th colSpan={2}>Scores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Score</th>
          </tr>
          {student.scores.map((score, idx) => <Score key={idx} score={score} />)}
        </tbody>
      </table>

    </div>
  )
}

export default Student