import userBanner from "../Assets/userBanner.png";
import person2 from "../Assets/person2.png";

export const useUserHandles = ({ userInfo }) => {
  let instagram_url = "",
    facebook_url = "",
    twitter_url = "";
  const instagram =
    userInfo.instagram_url == null || userInfo.instagram_url == "null";
  // We have a link to use
  if (!instagram) {
    instagram_url = "http://" + userInfo.instagram_url;
  }
  const facebook =
    userInfo.facebook_url == null || userInfo.facebook_url == "null";
  // We have a link to use
  if (!facebook) {
    facebook_url = "http://" + userInfo.facebook_url;
  }
  const twitter =
    userInfo.twitter_url == null || userInfo.twitter_url == "null";
  // We have a link to use
  if (!twitter) {
    twitter_url = "http://" + userInfo.twitter_url;
  }
  const banner_url =
    userInfo.banner_img_url == null || userInfo.banner_img_url == "null";
  const banner_img = banner_url ? (
    <>
      <img
        className="bannerImg"
        src={userBanner}
        alt="people standing on a mountain"
      />
    </>
  ) : (
    <>
      <img
        className="bannerImg"
        src={`${userInfo.banner_img_url}`}
        alt="my banner"
      />
    </>
  );
  const profile_url =
    userInfo.profile_img_url == null || userInfo.profile_img_url == "null";
  const profile_img = profile_url ? (
    <>
      {/* Return default image */}
      <img className="profilePic" src={person2} alt="user profile" />
    </>
  ) : (
    <>
      {/* Use our own image */}
      <img
        className="profilePic"
        src={`${userInfo.profile_img_url}`}
        alt="my profile"
      />
    </>
  );
  const bio = userInfo.biography == null || userInfo.biography == "null";
  const biography = bio ? (
    <>
      <div className="description">
        <p>No biography</p>
      </div>
    </>
  ) : (
    <>
      <div className="description">
        <p>{`${userInfo.biography}`}</p>
      </div>
    </>
  );

  return {
    biography,
    instagram_url,
    facebook_url,
    twitter_url,
    banner_img,
    profile_img,
  };
};
