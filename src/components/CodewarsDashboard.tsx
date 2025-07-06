import { fetchStats } from "@/helpers/fetchStats";
import { montserrat, dm_sans } from "@/library/fonts";

interface CodewarsDashboardProps {}

const CodewarsDashboard = async ({}) => {
  const stats = await fetchStats(
    "https://www.codewars.com/api/v1/users/JulianHein"
  );

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-slate-100 dark:bg-slate-300 shadow-lg px-3 py-3 rounded-lg h-48 text-black">
      <div>
        <a
          href="www.codewars.com/users/JulianHein"
          className={`text-base ${montserrat.className}`}
        >
          Codewars Statistics
        </a>
      </div>

      <div
        className={`flex items-center justify-center text-xl font-bold ${dm_sans.className} text-center 2xl:gap-8 statsMD:gap-5 statsSM:gap-8 max-statsSM:gap-5`}
      >
        <div className="statsMD:block statsSM:flex statsXL:flex 2xl:gap-8 statsMD:gap-5 statsSM:gap-8 max-statsSM:space-y-3 statsMD:space-y-3 statsSM:space-y-0 statsXL:space-y-0">
          <div>
            <p>
              <span className="text-accent-400">#</span>
              {stats.leaderboardPosition}
            </p>
            <p className="font-medium text-xs">Leaderboard Position</p>
          </div>

          <div>
            <p>
              {stats.ranks.overall.name[0]}
              <span className="text-accent-400">kyu</span>
            </p>
            <p className="font-medium text-xs">Overall Ranking</p>
          </div>
        </div>

        <div className="statsMD:block statsSM:flex statsXL:flex 2xl:gap-8 statsMD:gap-5 statsSM:gap-8 max-statsSM:space-y-3 statsMD:space-y-3 statsSM:space-y-0 statsXL:space-y-0">
          <div>
            <p>{stats.ranks.overall.score}</p>
            <p className="font-medium text-xs">Total Points</p>
          </div>

          <div>
            <p>{stats.codeChallenges.totalCompleted}</p>
            <p className="font-medium text-xs">Katas Solved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodewarsDashboard;
