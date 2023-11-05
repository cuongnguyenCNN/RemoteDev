import { Link } from "react-router-dom";
import './profile.css'

const Profile = () => {
  return (
    <div class="page">
      <div class="profile-top-buttons">
        <a
          href="https://remoteok.com/@cuong_nguyen_ngoc?edit=1"
          class="button black"
        >
          Edit<span class="hide-before-600px"> your</span>
          <span class="hide-before-400px"> profile</span>
        </a>
      </div>
      <div class="box profile ">
        <div class="info">
          <a href="https://remoteok.com/workers" class="big-avatar online">
            <img class="avatar" src="https://remoteok.com/assets/no-profile-photo.png" />
          </a>
          <center>
            <h1 class="username">cuong_nguyen_ngoc </h1>
          </center>
          <h2 class="subline">
            Remote worker with 5+ years of experience - Last seen{" "}
            <time datetime="1692108231">one day</time> ago
          </h2>
          <p class="bio"></p>
          <br />
          <a name="salary"></a>
          <div class="preferred_salary_range"></div>
          <div class="preferred_salary_range"></div>
          <table class="profile_info">
            <input
              type="hidden"
              class="session_token"
              name="session_token"
              value="ea0336a6fefabccfd6d0c0d52fbdcb23"
            />
            <tbody>
              <tr class="link">
                <td>🛂 Nationality</td>
                <td>🇻🇳 Vietnam </td>
              </tr>
              <tr class="link">
                <td>🏡 Residency</td>
                <td>🇻🇳 Vietnam </td>
              </tr>
              <tr class="link">
                <td>📍 Location</td>
                <td>🇻🇳 Vietnam </td>
              </tr>
              <tr class="link">
                <td>
                  <img
                    alt="This position is a Remote OK original posting"
                    src="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=50,height=50,quality=85/https://remoteok.com/assets/logo.png?1"
                    width="16"
                    height="16"
                   
                  />{" "}
                  Remote OK
                </td>
                <td>
                  <a rel="follow" href="https://rok.co/@cuong_nguyen_ngoc">
                    rok.co/@cuong_nguyen_ngoc{" "}
                  </a>
                </td>
              </tr>
              <tr class="link">
                <td>🔗 Website</td>
                <td>
                  <a rel="noopener nofollow" href="https://nguyenngoccuong.com">
                    nguyenngoccuong.com
                  </a>
                </td>
              </tr>
              <tr class="link">
                <td>
                  <img class="socialicon"
                    src="https://logo.clearbit.com/github.com"
                   
                  />{" "}
                  GitHub
                </td>
                <td>
                  <a href="https://github.com/cuongnguyencnn">
                    cuongnguyencnn{" "}
                  </a>
                </td>
              </tr>
              <tr class="link">
                <td>
                  <img class="socialicon"
                    src="https://logo.clearbit.com/twitter.com"
                   
                  />{" "}
                  X
                </td>
                <td>
                  <a href="https://twitter.com/cuongnguyencnn">
                    cuongnguyencnn{" "}
                  </a>
                </td>
              </tr>

              <tr class="tags">
                <td>Skilled in</td>
                <td>
                  <a
                    href="https://remoteok.com/hire-remotely/dot-net"
                    class="tag"
                  >
                    dot net
                  </a>
                  &nbsp;
                  <a href="https://remoteok.com/hire-remotely/js" class="tag">
                    js
                  </a>
                  &nbsp;{" "}
                </td>
              </tr>
              <tr class="languages">
                <td>Fluent in</td>
                <td>
                  <a
                    href="https://remoteok.com/hire-remotely/english"
                    class="tag"
                  >
                    english
                  </a>
                  <a
                    href="https://remoteok.com/hire-remotely/vietnamese"
                    class="tag"
                  >
                    vietnamese
                  </a>{" "}
                </td>
              </tr>
              <tr class="preferred_timezone">
                <td>Preferred timezone</td>
                <td>UTC+7 </td>
              </tr>

              <tr>
                <td>Preferred annual pay (min)</td>
                <td>$50,000/year </td>
              </tr>

              <tr>
                <td>Preferred hourly pay (min)</td>
                <td>$15/hour </td>
              </tr>

              <tr>
                <td>Last seen</td>
                <td>one day ago</td>
              </tr>
              <tr>
                <td>Signed up</td>
                <td>11 months ago</td>
              </tr>
              <tr>
                <td>Badges</td>
                <td>
                  👨‍💻 Remote worker
                  <br />
                  <br />
                  🎖 Early adopter
                  <br />
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="backdrop-send-message"></div>
      <center >
        <div ></div>
      </center>
      <div class="box employment">
        <h2>Employment</h2>
        <p class="">
          2019 - 2022: FullStack Developer @{" "}
          <a target="_blank" rel="noopener nofollow" href="https://">
            <strong>StepMedia</strong>
          </a>
        </p>{" "}
      </div>
    </div>
  );
};

export default Profile;
