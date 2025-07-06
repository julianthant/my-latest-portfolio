import { fetchStats } from "@/helpers/fetchStats";
import { montserrat, dm_sans } from "@/library/fonts";

const LeetcodeDashboard = async ({}) => {
  const stats = await fetchStats(
    "https://leetcode-stats-api.herokuapp.com/SoyJuju"
  );

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-slate-100 dark:bg-slate-300 shadow-lg px-3 py-3 rounded-lg h-48 text-black">
      <div className="flex justify-center items-center">
        <a
          href="https://leetcode.com/SoyJuju/"
          className={`text-base ${montserrat.className}`}
        >
          Leetcode Statistics
        </a>
      </div>
      <div
        className={`flex items-center justify-center text-xl font-bold ${dm_sans.className} text-center 2xl:gap-8 statsMD:gap-5 statsSM:gap-8 max-statsSM:gap-5`}
      >
        <div className="statsMD:block statsSM:flex statsXL:flex 2xl:gap-8 statsMD:gap-5 statsSM:gap-8 max-statsSM:space-y-3 statsMD:space-y-3 statsSM:space-y-0 statsXL:space-y-0">
          <div>
            <p>
              <span className="text-accent-400">#</span>
              {stats.ranking}
            </p>
            <p className="font-medium text-xs">Leaderboard Position</p>
          </div>

          <div>
            <p>{stats.easySolved}</p>
            <p className="font-medium text-xs">Easy Solved</p>
          </div>
        </div>
        <div className="statsMD:block statsSM:flex statsXL:flex 2xl:gap-8 statsMD:gap-5 statsSM:gap-8 max-statsSM:space-y-3 statsMD:space-y-3 statsSM:space-y-0 statsXL:space-y-0">
          <div>
            <p>{stats.mediumSolved}</p>
            <p className="font-medium text-xs">Medium Solved</p>
          </div>

          <div>
            <p>{stats.hardSolved}</p>
            <p className="font-medium text-xs">Hard Solved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetcodeDashboard;
