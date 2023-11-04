import logo from './logo.svg';
import './App.css';
//import './GetNewEmails.js'
//import 'bootstrap/dist/css/bootstrap.css';
function showApply(apply){
  var x = document.getElementById(apply);
    x.style.display = "block";
}
function hideApply(apply){
  var x = document.getElementById(apply);
    x.style.display = "none";
}
function closeCatchEmails(){
  var x = document.getElementById("catch-emails");
    x.style.display = "none";
}
function App() {
  var items = [];
  for (let index = 0; index < 7; index++) {
    items.push(
      <>
        <tr
          data-id="109466"
          class="job job-109466 verified  hot has-highlight-color  sticky bumped 												"
          title=""
          onMouseOver={()=>showApply("apply"+index)}
          onMouseOut={()=>hideApply("apply"+index)}
        >
          <td class="image has-logo">
            <a
              alt="IAPWE"
              class="preventLink"
              href="/remote-jobs/remote-freelance-writer-iapwe-109466"
            >
              <img
                alt="IAPWE"
                data-z="1"
                data-extension="png"
                itemprop="image"
                class="logo lazy lazyloaded"
                src="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=50/https://remoteOK.com/assets/img/jobs/f965d5c27e5954dbfffa10ecdbcd36331646841248.png?1646841248"
                data-src="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=50/https://remoteOK.com/assets/img/jobs/f965d5c27e5954dbfffa10ecdbcd36331646841248.png?1646841248"
              />
            </a>
          </td>
          <td class="company position company_and_position">
            <a
              itemprop="url"
              class="preventLink"
              href="/remote-jobs/remote-freelance-writer-iapwe-109466"
            >
              <h2 itemprop="title">Freelance Writer</h2>
            </a>
            <span class="original tooltip-set" title="">
              🎈
            </span>{" "}
            <span class="verified tooltip-set" title="">
              verified
            </span>
            <br />
            <span
              itemprop="hiringOrganization"
              itemscope=""
              itemtype="http://schema.org/Organization"
              class="companyLink"
              href="/iapwe"
            >
              <h3 itemprop="name">IAPWE </h3>
              &nbsp;
              <img
                alt="This job is getting a high amount of applications right now (15% of viewers clicked Apply)"
                src="https://remoteok.com/assets/hot2x.gif"
                width="28"
                height="11"
                class="tooltip-set"
                title=""
              />
              &nbsp;
              <img
                alt="This job has just been posted and is fresh off the press"
                src="https://remoteok.com/assets/new2x.gif"
                width="30"
                height="14"
                class="tooltip-set"
                title=""
              ></img>
            </span>
            <br />
            <div class="location">🌏 Worldwide</div>
            <div class="location">💰 $40k - $50k</div>{" "}
          </td>
          <td class="tags">
            <a
              class="no-border tooltip-set action-add-tag"
              data-tooltip="Add  to filters"
              href="/remote-content-writing-jobs"
              aria-label="Remote Content Writing Jobs"
              alt="Remote Content Writing Jobs"
            >
              <div rel="follow" class="tag tag- action-add-tag">
                <h3>Content Writing </h3>
              </div>
              &nbsp;{" "}
            </a>
            <a
              class="no-border tooltip-set action-add-tag"
              data-tooltip="Add  to filters"
              href="/remote-non-tech-jobs"
              aria-label="Remote Non Tech Jobs"
              alt="Remote Non Tech Jobs"
            >
              <div rel="follow" class="tag tag- action-add-tag">
                <h3>Non Tech </h3>
              </div>
              &nbsp;{" "}
            </a>
            <a
              class="no-border tooltip-set action-add-tag"
              data-tooltip="Add  to filters"
              href="/remote-writing-jobs"
              aria-label="Remote Writing Jobs"
              alt="Remote Writing Jobs"
            >
              <div rel="follow" class="tag tag- action-add-tag">
                <h3>Writing </h3>
              </div>{" "}
            </a>
          </td>
          <td class="time">
            <time datetime="2023-10-05T00:44:12+00:00">
              <img
                src="https://remoteok.com/assets/paper-clip.svg"
                class="paper-clip"
              />
              28d{" "}
            </time>
          </td>
          <td class="source" style={{alignContent:'center'}}>
            <button
              id={"apply" + index}
              style={{ display: "none", width:"150px" }}
              type="button"
              class="button apply btn btn-danger"
            >
              Apply
            </button>
          </td>
        </tr>
        <tr class="divider">
          <td colspan="10"></td>
        </tr>
      </>
    ); 
  }
  return (
    <div className="App">
      <div class="top">
        <div class="remote-ok-logo">
          <h1>
            <a class="no-border" href="/">
              <span class="pacifico">
                R<span class="hide-before-1000px">emote</span>
              </span>
            </a>
            <a class="no-border" href="/">
              <span class="ok">
                DEV<span class="trademark">®</span>
              </span>
            </a>
          </h1>
        </div>
        <div class="box">
          <h1>
            <span class="hide-before-300px">find</span> a{" "}
            <b>
              <span class="hide-before-400px">remote </span>job
            </b>
            <br />
            <span class="hide-before-800px">
              work from <b>anywhere</b>
            </span>
          </h1>

          <input
            class="search"
            autocomplete="new-password"
            type="text"
            placeholder="your next job?"
          />
        </div>
      </div>
      <div class="top-right-nav">
        <span class="ad advertisement sponsored" rel="sponsored">
          <a
            class="button remote-health"
            rel="sponsored"
            href="/nomad-health-individual"
          >
            Health insurance
          </a>
        </span>
        <a
          class="button action-post-job"
          href="/hire-remotely?discount_code=a33f0de8672af573c67e182c72654b41&amp;ref=top"
        >
          Post <span class="hide-before-600px">a remote </span>job{" "}
        </a>
        <a class="button white action-log-in" href="/login">
          Log in
        </a>
      </div>
      <container>
        <table id="jobsboard">
          <thead>
            <tr>
              <th colSpan="10" class="filter-actions" style={{ padding: 0 }}>
                <div class="top-bar-avatar">
                  <img
                    class="top-bar-avatar-img"
                    src="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=85/https://remoteok.com/assets/logo-square.png?1633381266"
                  />
                </div>
                <span class="dropdown-toggle"></span>
                <div class="search-filter">
                  <input
                    autocomplete="google_chrome_fix"
                    class="search-filter-input"
                    type="text"
                    placeholder="🔍 Search"
                  />
                  <div class="search-filter-input-icon-circle">
                    <div class="search-filter-input-icon"></div>
                  </div>
                  <div
                    class="search-filter-results"
                    style={{
                      position: "absolute",
                      left: "468.641px",
                      top: "69px",
                      display: "none",
                    }}
                  >
                    <div
                      data-add="yes"
                      data-tag="engineer"
                      data-slug="engineer"
                    >
                      🤓 Engineer
                    </div>
                    <div data-add="yes" data-tag="exec" data-slug="exec">
                      💼 Executive
                    </div>
                    <div data-add="yes" data-tag="senior" data-slug="senior">
                      👵 Senior
                    </div>
                    <div data-add="yes" data-tag="dev" data-slug="dev">
                      🤓 Developer
                    </div>
                    <div data-add="yes" data-tag="finance" data-slug="finance">
                      💰 Finance
                    </div>
                    <div
                      data-add="yes"
                      data-tag="sys-admin"
                      data-slug="sys-admin"
                    >
                      ♾️ Sys Admin
                    </div>
                    <div
                      data-add="yes"
                      data-tag="javascript"
                      data-slug="javascript"
                    >
                      ☕️ JavaScript
                    </div>
                    <div data-add="yes" data-tag="backend" data-slug="backend">
                      🍑 Backend
                    </div>
                    <div data-add="yes" data-tag="golang" data-slug="golang">
                      🐀 Golang
                    </div>
                    <div data-add="yes" data-tag="cloud" data-slug="cloud">
                      ☁️ Cloud
                    </div>
                    <div data-add="yes" data-tag="medical" data-slug="medical">
                      🚑 Medical
                    </div>
                    <div
                      data-add="yes"
                      data-tag="front-end"
                      data-slug="front-end"
                    >
                      🎨 Front End
                    </div>
                    <div
                      data-add="yes"
                      data-tag="full-stack"
                      data-slug="full-stack"
                    >
                      🥞 Full Stack
                    </div>
                    <div data-add="yes" data-tag="ops" data-slug="ops">
                      ♾️ Ops
                    </div>
                    <div data-add="yes" data-tag="design" data-slug="design">
                      🎨 Design
                    </div>
                    <div data-add="yes" data-tag="react" data-slug="react">
                      ⚛️ React
                    </div>
                    <div data-add="yes" data-tag="infosec" data-slug="infosec">
                      🔑 InfoSec
                    </div>
                    <div
                      data-add="yes"
                      data-tag="marketing"
                      data-slug="marketing"
                    >
                      🚥 Marketing
                    </div>
                    <div data-add="yes" data-tag="mobile" data-slug="mobile">
                      📱 Mobile
                    </div>
                    <div
                      data-add="yes"
                      data-tag="content-writing"
                      data-slug="content-writing"
                    >
                      ✍️ Content Writing
                    </div>
                    <div data-add="yes" data-tag="saas" data-slug="saas">
                      📦 SaaS
                    </div>
                    <div
                      data-add="yes"
                      data-tag="recruiter"
                      data-slug="recruiter"
                    >
                      🎯 Recruiter
                    </div>
                    <div
                      data-add="yes"
                      data-tag="full-time"
                      data-slug="full-time"
                    >
                      ⏰ Full Time
                    </div>
                    <div data-add="yes" data-tag="api" data-slug="api">
                      🤖 API
                    </div>
                    <div data-add="yes" data-tag="sales" data-slug="sales">
                      💼 Sales
                    </div>
                    <div data-add="yes" data-tag="ruby" data-slug="ruby">
                      💎 Ruby
                    </div>
                    <div
                      data-add="yes"
                      data-tag="education"
                      data-slug="education"
                    >
                      👨‍🏫 Education
                    </div>
                    <div data-add="yes" data-tag="devops" data-slug="devops">
                      ♾️ DevOps
                    </div>
                    <div data-add="yes" data-tag="stats" data-slug="stats">
                      👩‍🔬 Stats
                    </div>
                    <div data-add="yes" data-tag="python" data-slug="python">
                      🐍 Python
                    </div>
                    <div data-add="yes" data-tag="node" data-slug="node">
                      🔗 Node
                    </div>
                    <div data-add="yes" data-tag="english" data-slug="english">
                      🇬🇧 English
                    </div>
                    <div
                      data-add="yes"
                      data-tag="non-tech"
                      data-slug="non-tech"
                    >
                      🔌 Non Tech
                    </div>
                    <div data-add="yes" data-tag="video" data-slug="video">
                      📼 Video
                    </div>
                    <div data-add="yes" data-tag="travel" data-slug="travel">
                      🎒 Travel
                    </div>
                    <div
                      data-add="yes"
                      data-tag="quality-assurance"
                      data-slug="quality-assurance"
                    >
                      🔬 Quality Assurance
                    </div>
                    <div
                      data-add="yes"
                      data-tag="ecommerce"
                      data-slug="ecommerce"
                    >
                      🛍 Ecommerce
                    </div>
                    <div
                      data-add="yes"
                      data-tag="teaching"
                      data-slug="teaching"
                    >
                      👨‍🏫 Teaching
                    </div>
                    <div data-add="yes" data-tag="linux" data-slug="linux">
                      🐧 Linux
                    </div>
                    <div data-add="yes" data-tag="java" data-slug="java">
                      ☕️ Java
                    </div>
                    <div data-add="yes" data-tag="crypto" data-slug="crypto">
                      🏅 Crypto
                    </div>
                  </div>
                </div>
                <div class="location-filter">
                  <input
                    autocomplete="google_chrome_fix"
                    class="location-filter-input"
                    type="text"
                    placeholder="🌏 Location"
                  />
                  <div class="location-filter-icon-circle">
                    <div class="location-filter-icon"></div>
                  </div>
                </div>
                <div class="salary-filter">
                  <div>💵 Salary</div>
                  <div class="salary-filter-icon-circle">
                    <div class="salary-filter-icon"></div>
                  </div>
                </div>
                <div class="benefits-filter">
                  <div>🎪 Benefits</div>
                  <div class="benefits-filter-icon-circle">
                    <div class="benefits-filter-icon"></div>
                  </div>
                </div>
                <select class="order-by">
                  <option selected="" value="default">
                    🦴 Sort by
                  </option>
                  <option value="date">🆕 Latest jobs</option>
                  <option value="salary">💵 Highest paid</option>
                  <option value="views">👀 Most viewed</option>
                  <option value="applied">✅ Most applied</option>
                  <option value="hot">🔥 Hottest</option>
                  <option value="benefits">🎪 Most benefits</option>
                </select>
                <div class="selected-tags active-filters-box">
                  <div data-tag="engineer" class="active-filter latest-filter">
                    🤓 Engineer
                    <img
                      alt="Remove this filter"
                      class="action-remove-this-filter"
                      src="https://remoteok.com/assets/times-circle.svg"
                    />
                  </div>
                  <div data-location="Worldwide" class="active-filter">
                    🌏 Worldwide{" "}
                    <img
                      alt="Remove this filter"
                      class="action-remove-this-filter"
                      src="https://remoteok.com/assets/times-circle.svg"
                    />
                  </div>
                  <div class="action-remove-latest-filter">
                    ❌ Clear 20+ results
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
        <div
          class="top-tags"
        >
          <div >
            <a href="https://remoteok.com/hire-remotely/verified" class="tag">
              <img
                alt="Verified"
                src="/assets/verified.png"
              
              />{" "}
              <span>Verified</span>{" "}
            </a>
            <a
              href="https://remoteok.com/hire-remotely/available-now"
              class="tag"
            >
              ✅ <span>Available now</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/js" class="tag">
              ☕️ <span>JavaScript</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/html" class="tag">
              🔡 <span>HTML</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/react" class="tag">
              ⚛️ <span>React</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/excel" class="tag">
              📗 <span>Excel</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/css" class="tag">
              🎨 <span>CSS</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/python" class="tag">
              🐍 <span>Python</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/marketing" class="tag">
              🚥 <span>Marketing</span>{" "}
            </a>
            <a
              href="https://remoteok.com/hire-remotely/customer-support"
              class="tag"
            >
              🎧 <span>Customer Support</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/node" class="tag">
              🔗 <span>Node</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/office365" class="tag">
              ✍️ <span>Office365</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/sql" class="tag">
              🐬 <span>SQL</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/java" class="tag">
              ☕️ <span>Java</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/typescript" class="tag">
              🟦 <span>Typescript</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/mysql" class="tag">
              🐬 <span>MySQL</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/php" class="tag">
              🐘 <span>PHP</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/backend" class="tag">
              🍑 <span>Backend</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/aws" class="tag">
              ☁️ <span>AWS</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/git" class="tag">
              📦 <span>Git</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/front-end" class="tag">
              🎨 <span>Front End</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/mongodb" class="tag">
              🍃 <span>Mongo</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/docker" class="tag">
              🐳 <span>Docker</span>{" "}
            </a>
            <a
              href="https://remoteok.com/hire-remotely/customer-service"
              class="tag"
            >
              🎧 <span>Customer Service</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/ui" class="tag">
              🎨 <span>UI</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/ux" class="tag">
              🎨 <span>UX</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/writing" class="tag">
              ✍️ <span>Writing</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/word" class="tag">
              ✍️ <span>Word</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/sales" class="tag">
              💼 <span>Sales</span>{" "}
            </a>
            <a
              href="https://remoteok.com/hire-remotely/project-management"
              class="tag"
            >
              💼 <span>Project Management</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/angular" class="tag">
              🅰️ <span>Angular</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/data-entry" class="tag">
              <span>Data Entry</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/vue" class="tag">
              💚 <span>Vue</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/wordpress" class="tag">
              ✍️ <span>Wordpress</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/postgresql" class="tag">
              🐬 <span>PostgreSQL</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/bootstrap" class="tag">
              🟪 <span>Bootstrap</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/c-sharp" class="tag">
              #️⃣ <span>C Sharp</span>{" "}
            </a>
            <a
              href="https://remoteok.com/hire-remotely/microsoft-office"
              class="tag"
            >
              ✍️ <span>Microsoft Office</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/photoshop" class="tag">
              🎨 <span>Photoshop</span>{" "}
            </a>
            <a
              href="https://remoteok.com/hire-remotely/communication"
              class="tag"
            >
              <span>Communication</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/laravel" class="tag">
              📦 <span>Laravel</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/linux" class="tag">
              🐧 <span>Linux</span>{" "}
            </a>
            <a
              href="https://remoteok.com/hire-remotely/c-plus-plus"
              class="tag"
            >
              ➕ <span>C Plus Plus</span>{" "}
            </a>
            <a
              href="https://remoteok.com/hire-remotely/content-writing"
              class="tag"
            >
              ✍️ <span>Content Writing</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/figma" class="tag">
              🎨 <span>Figma</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/office-365" class="tag">
              <span>Office 365</span>{" "}
            </a>
            <a
              href="https://remoteok.com/hire-remotely/digital-marketing"
              class="tag"
            >
              🚥 <span>Digital Marketing</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/frontend" class="tag">
              🎨 <span>Front End</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/english" class="tag">
              🇬🇧 <span>English</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/spanish" class="tag">
              🇪🇸 <span>Spanish</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/hindi" class="tag">
              🇮🇳 <span>Hindi</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/portuguese" class="tag">
              🇵🇹 <span>Portuguese</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/french" class="tag">
              🇫🇷 <span>French</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/arabic" class="tag">
              🇸🇦 <span>Arabic</span>{" "}
            </a>{" "}
            <a href="https://remoteok.com/hire-remotely/men" class="tag">
              👨 <span>Men</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/women" class="tag">
              👱‍♀️ <span>Women</span>{" "}
            </a>
            <a href="https://remoteok.com/hire-remotely/other" class="tag">
              👱 <span>Other</span>{" "}
            </a>
          </div>
        </div>
      </container>
      <div class="catch-emails" id="catch-emails" data-tag="">
        <div class="form">
          <p>
            Get new remote&nbsp;jobs sent to
            <input type="hidden" name="JOBTYPE" id="mce-JOBTYPE" value="jobs" />
          </p>
          <span class="mobile"></span>
          <input type="text" class="email" placeholder="Type your email..." />
          <input type="hidden" name="TIME" id="mce-TIME" value="daily" />
          <input type="hidden" class="source" value="" />
          <input type="hidden" class="tag" value="" />
          <div class="button action-subscribe">Subscribe</div>
          <div class="action-close-catch-emails" onClick={closeCatchEmails}>
            ×
          </div>
        </div>
      </div>
      <a
        class="by-levelsio"
        target="_blank"
        href="https://twitter.com/cuongnguyenCNN"
      >
        by @cuongnguyenCNN
      </a>
    </div>
  );
}

export default App;
