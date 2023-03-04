import './profile.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <div class="profile">
        <div class="description">
          <img src={avatar} alt="User avatar" class="avatar" />
          <p class="name">{username}</p>
          <p class="tag">@{tag}</p>
          <p class="location">{location}</p>
        </div>

        <ul class="stats">
          <li>
            <span class="">Followers</span>
            <span class="quantity">{stats.followers}</span>
          </li>
          <li>
            <span class="">Views</span>
            <span class="quantity">{stats.views}</span>
          </li>
          <li>
            <span class="">Likes</span>
            <span class="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
