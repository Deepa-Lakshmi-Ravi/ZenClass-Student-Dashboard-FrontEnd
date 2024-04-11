import leaderBoardData from "../../../utils/LeaderBoardData";
import "./LeaderBoard.css";

const LeaderBoard = () => {
  return (
    <>
      <section className="leaderboard">
        <div className="leader-leaderboard p-3  text-center">
          <h2 className="leader-leaderboard-heading">
            Competition is a good thing; it forces us to do our best.
          </h2>
          <div className="leader-leaderboard-icon">
            <img
              className="p-2"
              src="https://www.zenclass.in/Icons/leader.svg"
              alt="leaderBoard"
            />
          </div>
        </div>
        <div className="leader-leaderboard-table">
          <table className="table">
            <thead>
              <tr className="p-2 text-center text-md-start">
                <th>Rank</th>
                <th>Name</th>
                <th>Batch</th>
                <th>Learning</th>
              </tr>
            </thead>
            <tbody>
              {leaderBoardData.map((data) => {
                return data.rank === 1 ? (
                  <tr
                    key={data.rank}
                    className="topper p-2 text-center text-md-start"
                  >
                    <td className="px-3">{data.rank}</td>
                    <td>{data.name}</td>
                    <td>{data.batch}</td>
                    <td>{data.learning}</td>
                  </tr>
                ) : (
                  <tr key={data.rank} className="p-2 text-center text-md-start">
                    <td className="px-3">{data.rank}</td>
                    <td>{data.name}</td>
                    <td>{data.batch}</td>
                    <td>{data.learning}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default LeaderBoard;
