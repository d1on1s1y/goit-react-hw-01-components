//import userEvent from "@testing-library/user-event";
import { Profile } from "./Profile/profile";
import { Statistic } from "./Statistic/statistic";
import user from "./Data/user"
import stats from "./Data/data"


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistic
        statistic={stats}
        
      />
      
    </div>
  );
};
