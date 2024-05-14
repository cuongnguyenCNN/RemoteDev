import "./hireremote.css";

const formatStringToCamelCase = (str) => {
  const splitted = str.split("-");
  if (splitted.length === 1) return splitted[0];
  return (
    splitted[0] +
    splitted
      .slice(1)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("")
  );
};

export const getStyleObjectFromString = (str) => {
  const style = {};
  str.split(";").forEach((el) => {
    const [property, value] = el.split(":");
    if (!property) return;

    const formattedProperty = formatStringToCamelCase(property.trim());
    style[formattedProperty] = value.trim();
  });

  return style;
};
const HireRemote = () => {
  return (
    <>
    <div class="top-bar">
<a href="/" class="remote-ok-logo" previewlistener="true">
<h2>
<span class="pacifico">Remote</span> <span class="ok">OK<span class="trademark">®</span></span>
</h2>
</a>
<h1>
<a href="/" style={getStyleObjectFromString("color:var(--global-text-color);text-decoration:none;border:none;")} previewlistener="true">
Hire remotely
</a>
</h1>
<a href="/buy-bundle" class="button" style={getStyleObjectFromString("position:absolute;top:18px;right:18px;display:block;width:auto;")} previewlistener="true">Buy a bundle →</a>
</div>
      <div style={getStyleObjectFromString("background:var(--input-background-color);border-bottom: 1px solid var(--input-border-color);margin-top:4px;width:100%;margin:0;padding:14px;font-weight:bold;text-align:center;")}>
        🏷 A discount of 10% with code 128BF14A1D8011F673DC91CC85A7404D is
        applied on checkout
      </div>
      <div
        style={getStyleObjectFromString(
          "margin-top:4px;background-color:#ff4742;width:100%;margin:0;padding:14px;font-weight:bold;text-align:center;color:#fff;"
        )}
      >
        ⛳️ Save up to 50% when buying multiple job posts —{" "}
        <a
          style={getStyleObjectFromString(
            "text-decoration:underline;color:#fff;"
          )}
          href="/buy-bundle"
          previewlistener="true"
        >
          Buy a bundle →
        </a>
      </div>
      <div class="flexbox">
        <div class="left">
          <div class="group">
            <div class="group-heading">Let's start</div>
            <div>
              <span class="head">Company name*</span>
              <input
                autocomplete="off"
                data-required="required"
                type="text"
                name="company"
                data-name="your company name"
                class="input_company"
                placeholder="Company name"
                value=""
              />
              <span
                class="info"
                style={getStyleObjectFromString(
                  "margin-top:-8px;margin-left:18px;"
                )}
              >
                Your company's brand/trade name: without Inc., Ltd., B.V., Pte.,
                etc.
              </span>
            </div>
            <div>
              <span class="head">Position*</span>
              <input
                autocomplete="off"
                maxlength="60"
                data-required="required"
                type="text"
                name="position"
                data-name="a job position"
                class="input_position "
                title=""
                placeholder="Position"
                value=""
              />
              <span
                class="info"
                style={getStyleObjectFromString(
                  "margin-top:-8px;margin-left:18px;"
                )}
              >
                Please specify as single job position like "Marketing Manager"
                or "Node JS Developer", not a sentence like "Looking for PM /
                Biz Dev / Manager". We know your job is important but please DO
                NOT WRITE IN FULL CAPS. If posting multiple roles, please create
                multiple job posts. A job post is limited to a single job. We
                only allow real jobs, absolutely no MLM-type courses "learn how
                to work online" please.
              </span>
            </div>
            <div>
              <span class="head">Employment type*</span>
              <select data-required="required" class="select_employment_type">
                <option value="full_time">Full-time</option>
                <option value="part_time">Part-time</option>
                <option value="contractor">Contractor</option>
                <option value="temporary">Temporary</option>
                <option value="intern">Internship</option>
                <option value="intern">Per diem</option>
                <option value="volunteer">Volunteer</option>
                <option value="onsite">Onsite</option>
              </select>
            </div>
            <div>
              <span class="head">Primary tag</span>
              <select data-required="required" class="select_primary_tag">
                <option value="">Select a primary tag</option>
                <option value="dev">Software Development</option>
                <option value="customer support">Customer Support</option>
                <option value="sales">Sales</option>
                <option value="marketing">Marketing</option>
                <option value="design">Design</option>
                <option value="front end">Front End</option>
                <option value="backend">Back End</option>
                <option value="legal">Legal</option>
                <option value="testing">Testing</option>
                <option value="quality assurance">Quality Assurance</option>
                <option value="non tech">Non-Tech</option>
                <option value="other">Other</option>
              </select>
              <span
                class="info"
                style={getStyleObjectFromString(
                  "margin-top:-8px;margin-left:18px;"
                )}
              >
                This primary tag shows first and increases visibility in the
                main sections. Your job is shown on every page that is tagged
                with though. E.g. if you tag it as PHP, it shows for Remote PHP
                Jobs etc.
              </span>
            </div>
            <div>
              <span class="head">Tags, keywords or stack*</span>
              <select
                multiple="multiple"
                data-required="required"
                autocomplete="off"
                class="select_tags tomselected ts-hidden-accessible"
                id="select_tags"
                placeholder="Type a tag or keyword to search and add it"
                tabindex="-1"
              >
                <option value="engineer">🤓 Engineer </option>
                <option value="exec">💼 Executive </option>
                <option value="senior">👵 Senior </option>
                <option value="dev">🤓 Developer </option>
                <option value="finance">💰 Finance </option>
                <option value="sys admin">♾️ Sys Admin </option>
                <option value="javascript">☕️ JavaScript </option>
                <option value="backend">🍑 Backend </option>
                <option value="golang">🐀 Golang </option>
                <option value="cloud">☁️ Cloud </option>
                <option value="medical">🚑 Medical </option>
                <option value="front end">🎨 Front End </option>
                <option value="full stack">🥞 Full Stack </option>
                <option value="ops">♾️ Ops </option>
                <option value="design">🎨 Design </option>
                <option value="react">⚛️ React </option>
                <option value="infosec">🔑 InfoSec </option>
                <option value="marketing">🚥 Marketing </option>
                <option value="mobile">📱 Mobile </option>
                <option value="content writing">✍️ Content Writing </option>
                <option value="saas">📦 SaaS </option>
                <option value="recruiter">🎯 Recruiter </option>
                <option value="full time">⏰ Full Time </option>
                <option value="api">🤖 API </option>
                <option value="sales">💼 Sales </option>
                <option value="ruby">💎 Ruby </option>
                <option value="education">👨‍🏫 Education </option>
                <option value="devops">♾️ DevOps </option>
                <option value="stats">👩‍🔬 Stats </option>
                <option value="python">🐍 Python </option>
                <option value="node">🔗 Node </option>
                <option value="english">🇬🇧 English </option>
                <option value="non tech">🔌 Non Tech </option>
                <option value="video">📼 Video </option>
                <option value="travel">🎒 Travel </option>
                <option value="quality assurance">🔬 Quality Assurance </option>
                <option value="ecommerce">🛍 Ecommerce </option>
                <option value="teaching">👨‍🏫 Teaching </option>
                <option value="linux">🐧 Linux </option>
                <option value="java">☕️ Java </option>
                <option value="crypto">🏅 Crypto </option>
                <option value="junior">👶 Junior </option>
                <option value="git">📦 Git </option>
                <option value="legal">👩‍⚖️ Legal </option>
                <option value="android">🤖 Android </option>
                <option value="accounting">💼 Accounting </option>
                <option value="admin">♾️ Admin </option>
                <option value="microsoft">🖼 Microsoft </option>
                <option value="excel">📗 Excel </option>
                <option value="php">🐘 PHP </option>
                <option value="amazon">☁️ Amazon </option>
                <option value="serverless">☁️ Serverless </option>
                <option value="css">🎨 CSS </option>
                <option value="software">🤓 Software </option>
                <option value="analyst">🤔 Analyst </option>
                <option value="angular">🅰️ Angular </option>
                <option value="ios">🍏 iOS </option>
                <option value="customer support">🎧 Customer Support </option>
                <option value="html">🔡 HTML </option>
                <option value="salesforce">☁️ Salesforce </option>
                <option value="ads">🚥 Ads </option>
                <option value="product designer">📦 Product Designer </option>
                <option value="hr">👋 HR </option>
                <option value="sql">🐬 SQL </option>
                <option value="c">🔷 C </option>
                <option value="web dev">🤓 Web Developer </option>
                <option value="nosql">🚫 NoSQL </option>
                <option value="postgres">🐬 Postgres </option>
                <option value="c plus plus">➕ C Plus Plus </option>
                <option value="part time">⏰ Part Time </option>
                <option value="jira">🔷 Jira </option>
                <option value="c sharp">#️⃣ C Sharp </option>
                <option value="seo">🔎 SEO </option>
                <option value="apache">🚁 Apache </option>
                <option value="data science">👩‍🔬 Data Science </option>
                <option value="virtual assistant">🎧 Virtual Assistant </option>
                <option value="react native">⚛️ React Native </option>
                <option value="mongo">🍃 Mongo </option>
                <option value="testing">🧪 Testing </option>
                <option value="architecture">📦 Architecture </option>
                <option value="director">🔷 Director </option>
                <option value="music">🎵 Music </option>
                <option value="shopify">🛍 Shopify </option>
                <option value="wordpress">✍️ Wordpress </option>
                <option value="laravel">📦 Laravel </option>
                <option value="elasticsearch">🧩 Elasticsearch </option>
                <option value="blockchain">⛓ Blockchain </option>
                <option value="web3">💎 Web3 </option>
                <option value="drupal">💧 Drupal </option>
                <option value="docker">🐳 Docker </option>
                <option value="graphql">⚛️ GraphQL </option>
                <option value="payroll">💼 Payroll </option>
                <option value="internship">👩‍🎓 Internship </option>
                <option value="machine learning">🤖 Machine Learning </option>
                <option value="architect">📦 Architect </option>
                <option value="scala">☕️ Scala </option>
                <option value="web">🎨 Web </option>
                <option value="objective c">🍏 Objective C </option>
                <option value="social media">✍️ Social Media </option>
                <option value="vue">💚 Vue </option>
                <option value="biotech">💊 Biotech </option>
                <option value="math">🧮 Math </option>
                <option value="nft">🖼 NFT </option>
                <option value="scheme">👄 Scheme </option>
                <option value="dba">🥞 Database Admin </option>
                <option value="game dev">🕹 Game Developer </option>
                <option value="test">🧪 Test </option>
                <option value="copywriting">✍️ Copywriting </option>
                <option value="typescript">🟦 Typescript </option>
                <option value="consulting">💼 Consulting </option>
                <option value="growth">🚀 Growth </option>
                <option value="heroku">🟪 Heroku </option>
                <option value="swift">🐇 Swift </option>
                <option value="tech lead">👩‍✈️ Tech Lead </option>
                <option value="flutter">🦩 Flutter </option>
                <option value="jquery">🧩 jQuery </option>
                <option value="firebase">🔥 Firebase </option>
                <option value="robotics">🤖 Robotics </option>
                <option value="english teacher">🇬🇧 English Teacher </option>
                <option value="assembly">Assembly </option>
                <option value="redis">🧠 Redis </option>
                <option value="meteor">☄️ Meteor </option>
                <option value="lamp">🐘 LAMP </option>
                <option value="aws">☁️ AWS </option>
                <option value="nginx">❇️ Nginx </option>
                <option value="clojure">☯️ Clojure </option>
                <option value="consultant">💼 Consultant </option>
                <option value="training">👨‍🏫 Training </option>
                <option value="defi">💰 Defi </option>
                <option value="solidity">⛓ Solidity </option>
                <option value="embedded">💡 Embedded </option>
                <option value="ethereum">💎 Ethereum </option>
                <option value="haskell">#️⃣ Haskell </option>
                <option value="big data">🧠 Big Data </option>
                <option value="cassandra">🔷 Cassandra </option>
                <option value="photoshop">🎨 Photoshop </option>
                <option value="xamarin">❎ Xamarin </option>
                <option value="ember">🐹 Ember </option>
                <option value="bus dev">💼 Bus Developer </option>
                <option value="adult">🌶 Adult </option>
                <option value="telecom">🔷 Telecom </option>
                <option value="scrum">🔁 Scrum </option>
                <option value="rust">🦀 Rust </option>
                <option value="perl">🐪 Perl </option>
                <option value="illustrator">🎨 Illustrator </option>
                <option value="macos">🍏 macOS </option>
                <option value="telecommuting">🔷 Telecommuting </option>
                <option value="symfony">📦 Symfony </option>
                <option value="erlang">🟥 Erlang </option>
                <option value="ansible">⚫️ Ansible </option>
                <option value="f sharp">F Sharp </option>
                <option value="mern">Mern </option>
                <option value="esports">Esports </option>
                <option value="redux">⚛️ Redux </option>
                <option value="couchbase">🔷 Couchbase </option>
                <option value="vfx">VFX </option>
                <option value="post production">📦 Post Production </option>
                <option value="kubernetes">🦑 Kubernetes </option>
                <option value="designer">🎨 Designer </option>
                <option value="data">👩‍🔬 Data </option>
                <option value="smart contracts">📋 Smart Contracts </option>
                <option value="bitcoin">🏅 Bitcoin </option>
                <option value="groovy">🍸 Groovy </option>
                <option value="b2b">💼 B2B </option>
                <option value="dataops">♾️ DataOps </option>
                <option value="django">🤠 Django </option>
                <option value="chatbot">🔷 Chatbot </option>
                <option value="startup">🚀 Startup </option>
                <option value="grafana">Grafana </option>
                <option value="product">📦 Product </option>
                <option value="health tech">🚑 Health Tech </option>
                <option value="rabbitmq">Rabbitmq </option>
                <option value="copywriter">🔷 Copywriter </option>
                <option value="net">🌊 Net </option>
                <option value="distributed systems">
                  ♾️ Distributed Systems{" "}
                </option>
                <option value="azure">☁️ Azure </option>
                <option value="smart contract">📋 Smart Contract </option>
                <option value="data viz">👩‍🔬 Data Viz </option>
                <option value="project management">
                  💼 Project Management{" "}
                </option>
                <option value="work from home">Work from Home </option>
                <option value="controller">🔷 Controller </option>
                <option value="dot net">🌊 Dot NET </option>
                <option value="fastapi">🤖 Fastapi </option>
                <option value="flask">🍼 Flask </option>
                <option value="figma">🎨 Figma </option>
                <option value="gaming">Gaming </option>
                <option value="leadership">💼 Leadership </option>
                <option value="kafka">🚁 Kafka </option>
                <option value="automic design">🎨 Automic Design </option>
                <option value="other">❓ Other </option>
                <option value="kotlin">☕️ Kotlin </option>
                <option value="open source">🧩 Open Source </option>
                <option value="next">➡️ Next </option>
                <option value="gcp">☁️ GCP </option>
                <option value="algorithms">👩‍🔬 Algorithms </option>
                <option value="outreach">🔷 Outreach </option>
                <option value="jest">🃏 Jest </option>
                <option value="pandas">🐼 Pandas </option>
                <option value="product management">
                  💼 Product Management{" "}
                </option>
                <option value="data processing">👩‍🔬 Data Processing </option>
                <option value="product design">🎨 Product Design </option>
                <option value="remote">🏝 Remote </option>
                <option value="tester">🧪 Tester </option>
                <option value="data structures">👩‍🔬 Data Structures </option>
                <option value="martech">⚙️ Martech </option>
                <option value="crm">🧠 CRM </option>
                <option value="game">🕹 Game </option>
                <option value="tech">⚙️ Tech </option>
                <option value="hardware">Hardware </option>
                <option value="scalability">☕️ Scalability </option>
                <option value="insurance">🔷 Insurance </option>
                <option value="software engineer">🤓 Software Engineer </option>
                <option value="bootstrap">🟪 Bootstrap </option>
                <option value="writing">✍️ Writing </option>
                <option value="virtual reality">Virtual Reality </option>
                <option value="mobiledev">🤓 Mobiledev </option>
                <option value="terraform">🌳 Terraform </option>
                <option value="etl">Etl </option>
                <option value="infrastructure">🌉 Infrastructure </option>
                <option value="matlab">👩‍🔬 Matlab </option>
                <option value="ml">🧠 Ml </option>
                <option value="ceo">🔷 Ceo </option>
                <option value="landing page">Landing Page </option>
                <option value="monitoring">Monitoring </option>
                <option value="infra">🌉 Infra </option>
                <option value="project manager">💼 Project Manager </option>
                <option value="webrtc">🔷 Webrtc </option>
                <option value="windows">🪟 Windows </option>
                <option value="platform">Platform </option>
                <option value="cryptography">🏅 Cryptography </option>
                <option value="memory tuning">Memory Tuning </option>
                <option value="performance">🔷 Performance </option>
                <option value="applicationdev">🤓 Applicationdev </option>
                <option value="web app">Web App </option>
                <option value="linode">🔗 Linode </option>
                <option value="associate">♾️ Associate </option>
                <option value="tokyo">Tokyo </option>
                <option value="revenue">Revenue </option>
                <option value="abap">Abap </option>
                <option value="vc">🔷 Vc </option>
                <option value="stimulus">Stimulus </option>
                <option value="funding">Funding </option>
                <option value="hoteltech">⚙️ Hoteltech </option>
                <option value="japan">Japan </option>
                <option value="sre">Sre </option>
                <option value="speech">🔷 Speech </option>
                <option value="social impact">♾️ Social Impact </option>
                <option value="google cloud">☁️ Google Cloud </option>
                <option value="data entry">👩‍🔬 Data Entry </option>
                <option value="onboarding">Onboarding </option>
                <option value="product manager">📦 Product Manager </option>
                <option value="evm">Evm </option>
                <option value="writer">Writer </option>
                <option value="community">🙏 Community </option>
                <option value="cybersecurity">🔑 Cybersecurity </option>
                <option value="microservices">⚙️ Microservices </option>
                <option value="seed">Seed </option>
                <option value="platform engineer">🤓 Platform Engineer </option>
                <option value="dao">Dao </option>
                <option value="dynamodb">🧠 Dynamodb </option>
                <option value="creative">🔷 Creative </option>
                <option value="agile">🐇 Agile </option>
                <option value="magento">🔸 Magento </option>
                <option value="code">🧩 Code </option>
                <option value="fun">Fun </option>
                <option value="nestjs">☕️ Nest JS </option>
                <option value="databases">🧠 Databases </option>
                <option value="obj c">🔷 Obj C </option>
                <option value="net core">🔷 Net Core </option>
                <option value="tailwind">🌊 Tailwind </option>
                <option value="support">🎧 Support </option>
                <option value="technology">⚙️ Technology </option>
                <option value="dashboard">Dashboard </option>
                <option value="site reliability engineer">
                  ♾️ Site Reliability Engineer{" "}
                </option>
                <option value="analysis">Analysis </option>
                <option value="reactnative">⚛️ Reactnative </option>{" "}
              </select>
              <div class="ts-wrapper select_tags multi plugin-remove_button">
                <div class="ts-control">
                  <input
                    type="select-multiple"
                    autocomplete="off"
                    size="1"
                    tabindex="0"
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-controls="select_tags-ts-dropdown"
                    id="select_tags-ts-control"
                    placeholder="Type a tag or keyword to search and add it"
                  />
                </div>
                <div
                  class="ts-dropdown multi plugin-remove_button"
                  style={getStyleObjectFromString("display: none;")}
                >
                  <div
                    role="listbox"
                    tabindex="-1"
                    class="ts-dropdown-content"
                    id="select_tags-ts-dropdown"
                  ></div>
                </div>
              </div>
              <span
                class="info"
                style={getStyleObjectFromString(
                  "margin-top:-8px;margin-left:18px;"
                )}
              >
                Short tags are preferred. Use tags like industry and tech stack.
                The first 3 or 4 tags are shown on the site, the other tags
                aren't but the job will be shown on each tag specific page (like
                /remote-react-jobs). We also sometimes generate tags
                automatically after you post/edit to supplement.
              </span>
            </div>
            <div>
              <span class="head">
                Job is restricted to locations? <span class="badge">New</span>
              </span>
              <select
                multiple="multiple"
                data-required="required"
                autocomplete="off"
                class="select_locations tomselected ts-hidden-accessible"
                id="select_locations"
                placeholder="Type a location this job is restricted to like Worldwide, Europe, or Netherlands"
                tabindex="-1"
              >
                <option></option>
                <optgroup label="Regions">
                  <option value="region_AF">🦁 Africa </option>
                  <option value="region_AS">⛩ Asia </option>
                  <option value="region_EU">🇪🇺 Europe </option>
                  <option value="region_LA">💃 Latin America </option>
                  <option value="region_ME">🕌 Middle East </option>
                  <option value="region_NA">⛰️ North America </option>
                  <option value="region_OC">🌊 Oceania </option>{" "}
                </optgroup>
                <optgroup label="Countries">
                  <option value="AF">🇦🇫 Afghanistan </option>
                  <option value="AL">🇦🇱 Albania </option>
                  <option value="DZ">🇩🇿 Algeria </option>
                  <option value="AS">🇦🇸 American Samoa </option>
                  <option value="AD">🇦🇩 Andorra </option>
                  <option value="AO">🇦🇴 Angola </option>
                  <option value="AI">🇦🇮 Anguilla </option>
                  <option value="AQ">🇦🇶 Antarctica </option>
                  <option value="AG">🇦🇬 Antigua and Barbuda </option>
                  <option value="AR">🇦🇷 Argentina </option>
                  <option value="AM">🇦🇲 Armenia </option>
                  <option value="AW">🇦🇼 Aruba </option>
                  <option value="AU">🇦🇺 Australia </option>
                  <option value="AT">🇦🇹 Austria </option>
                  <option value="AZ">🇦🇿 Azerbaijan </option>
                  <option value="BH">🇧🇭 Bahrain </option>
                  <option value="BD">🇧🇩 Bangladesh </option>
                  <option value="BB">🇧🇧 Barbados </option>
                  <option value="BY">🇧🇾 Belarus </option>
                  <option value="BE">🇧🇪 Belgium </option>
                  <option value="BZ">🇧🇿 Belize </option>
                  <option value="BJ">🇧🇯 Benin </option>
                  <option value="BM">🇧🇲 Bermuda </option>
                  <option value="BT">🇧🇹 Bhutan </option>
                  <option value="BO">🇧🇴 Bolivia </option>
                  <option value="BA">🇧🇦 Bosnia </option>
                  <option value="BW">🇧🇼 Botswana </option>
                  <option value="BV">🇧🇻 Bouvet Island </option>
                  <option value="BR">🇧🇷 Brazil </option>
                  <option value="IO">🇮🇴 British Indian Ocean Territory </option>
                  <option value="VG">🇻🇬 British Virgin Islands </option>
                  <option value="BN">🇧🇳 Brunei </option>
                  <option value="BG">🇧🇬 Bulgaria </option>
                  <option value="BF">🇧🇫 Burkina Faso </option>
                  <option value="BI">🇧🇮 Burundi </option>
                  <option value="KH">🇰🇭 Cambodia </option>
                  <option value="CM">🇨🇲 Cameroon </option>
                  <option value="CA">🇨🇦 Canada </option>
                  <option value="CV">🇨🇻 Cape Verde </option>
                  <option value="BQ">🇧🇶 Caribbean Netherlands </option>
                  <option value="KY">🇰🇾 Cayman Islands </option>
                  <option value="CF">🇨🇫 Central African Republic </option>
                  <option value="TD">🇹🇩 Chad </option>
                  <option value="CL">🇨🇱 Chile </option>
                  <option value="CN">🇨🇳 China </option>
                  <option value="CX">🇨🇽 Christmas Island </option>
                  <option value="CC">🇨🇨 Cocos Islands </option>
                  <option value="CO">🇨🇴 Colombia </option>
                  <option value="KM">🇰🇲 Comoros </option>
                  <option value="CG">🇨🇬 Congo </option>
                  <option value="CK">🇨🇰 Cook Islands </option>
                  <option value="CR">🇨🇷 Costa Rica </option>
                  <option value="CI">🇨🇮 Cote d'Ivoire </option>
                  <option value="HR">🇭🇷 Croatia </option>
                  <option value="CU">🇨🇺 Cuba </option>
                  <option value="CW">🇨🇼 Curaçao </option>
                  <option value="CY">🇨🇾 Cyprus </option>
                  <option value="CZ">🇨🇿 Czechia </option>
                  <option value="CD">🇨🇩 DR Congo </option>
                  <option value="DK">🇩🇰 Denmark </option>
                  <option value="DJ">🇩🇯 Djibouti </option>
                  <option value="DM">🇩🇲 Dominica </option>
                  <option value="DO">🇩🇴 Dominican Republic </option>
                  <option value="TL">🇹🇱 East Timor </option>
                  <option value="EC">🇪🇨 Ecuador </option>
                  <option value="EG">🇪🇬 Egypt </option>
                  <option value="SV">🇸🇻 El Salvador </option>
                  <option value="GQ">🇬🇶 Equatorial Guinea </option>
                  <option value="ER">🇪🇷 Eritrea </option>
                  <option value="EE">🇪🇪 Estonia </option>
                  <option value="ET">🇪🇹 Ethiopia </option>
                  <option value="FK">🇫🇰 Falkland Islands </option>
                  <option value="FO">🇫🇴 Faroe Islands </option>
                  <option value="FJ">🇫🇯 Fiji </option>
                  <option value="FI">🇫🇮 Finland </option>
                  <option value="FR">🇫🇷 France </option>
                  <option value="GF">🇬🇫 French Guiana </option>
                  <option value="TF">🇹🇫 French Southern Territories </option>
                  <option value="GA">🇬🇦 Gabon </option>
                  <option value="GM">🇬🇲 Gambia </option>
                  <option value="GE">🇬🇪 Georgia </option>
                  <option value="DE">🇩🇪 Germany </option>
                  <option value="GH">🇬🇭 Ghana </option>
                  <option value="GI">🇬🇮 Gibraltar </option>
                  <option value="GR">🇬🇷 Greece </option>
                  <option value="GL">🇬🇱 Greenland </option>
                  <option value="GD">🇬🇩 Grenada </option>
                  <option value="GP">🇬🇵 Guadeloupe </option>
                  <option value="GU">🇬🇺 Guam </option>
                  <option value="GT">🇬🇹 Guatemala </option>
                  <option value="GG">🇬🇬 Guernsey </option>
                  <option value="GN">🇬🇳 Guinea </option>
                  <option value="GW">🇬🇼 Guinea Bissau </option>
                  <option value="GY">🇬🇾 Guyana </option>
                  <option value="HT">🇭🇹 Haiti </option>
                  <option value="US-HI">🏝 Hawaii </option>
                  <option value="HM">
                    🇭🇲 Heard Island and McDonald Islands{" "}
                  </option>
                  <option value="HN">🇭🇳 Honduras </option>
                  <option value="HK">🇭🇰 Hong Kong </option>
                  <option value="HU">🇭🇺 Hungary </option>
                  <option value="IS">🇮🇸 Iceland </option>
                  <option value="IN">🇮🇳 India </option>
                  <option value="ID">🇮🇩 Indonesia </option>
                  <option value="IR">🇮🇷 Iran </option>
                  <option value="IQ">🇮🇶 Iraq </option>
                  <option value="IE">🇮🇪 Ireland </option>
                  <option value="IM">🇮🇲 Isle of Man </option>
                  <option value="IL">🇮🇱 Israel </option>
                  <option value="IT">🇮🇹 Italy </option>
                  <option value="JM">🇯🇲 Jamaica </option>
                  <option value="JP">🇯🇵 Japan </option>
                  <option value="JE">🇯🇪 Jersey </option>
                  <option value="JO">🇯🇴 Jordan </option>
                  <option value="KZ">🇰🇿 Kazakhstan </option>
                  <option value="KE">🇰🇪 Kenya </option>
                  <option value="KI">🇰🇮 Kiribati </option>
                  <option value="XK">🇽🇰 Kosovo </option>
                  <option value="KS">🇽🇰 Kosovo </option>
                  <option value="KU">🏴 Kurdistan </option>
                  <option value="KW">🇰🇼 Kuwait </option>
                  <option value="KG">🇰🇬 Kyrgyzstan </option>
                  <option value="LA">🇱🇦 Laos </option>
                  <option value="LV">🇱🇻 Latvia </option>
                  <option value="LB">🇱🇧 Lebanon </option>
                  <option value="LS">🇱🇸 Lesotho </option>
                  <option value="LR">🇱🇷 Liberia </option>
                  <option value="LY">🇱🇾 Libya </option>
                  <option value="LI">🇱🇮 Liechtenstein </option>
                  <option value="LT">🇱🇹 Lithuania </option>
                  <option value="LU">🇱🇺 Luxembourg </option>
                  <option value="MO">🇲🇴 Macau </option>
                  <option value="MG">🇲🇬 Madagascar </option>
                  <option value="MW">🇲🇼 Malawi </option>
                  <option value="MY">🇲🇾 Malaysia </option>
                  <option value="MV">🇲🇻 Maldives </option>
                  <option value="ML">🇲🇱 Mali </option>
                  <option value="MT">🇲🇹 Malta </option>
                  <option value="MH">🇲🇭 Marshall Islands </option>
                  <option value="MQ">🇲🇶 Martinique </option>
                  <option value="MR">🇲🇷 Mauritania </option>
                  <option value="MU">🇲🇺 Mauritius </option>
                  <option value="YT">🇾🇹 Mayotte </option>
                  <option value="MX">🇲🇽 Mexico </option>
                  <option value="FM">🇫🇲 Micronesia </option>
                  <option value="MD">🇲🇩 Moldova </option>
                  <option value="MC">🇲🇨 Monaco </option>
                  <option value="MN">🇲🇳 Mongolia </option>
                  <option value="ME">🇲🇪 Montenegro </option>
                  <option value="MS">🇲🇸 Montserrat </option>
                  <option value="MA">🇲🇦 Morocco </option>
                  <option value="MZ">🇲🇿 Mozambique </option>
                  <option value="MM">🇲🇲 Myanmar </option>
                  <option value="NA">🇳🇦 Namibia </option>
                  <option value="NR">🇳🇷 Nauru </option>
                  <option value="NP">🇳🇵 Nepal </option>
                  <option value="NL">🇳🇱 Netherlands </option>
                  <option value="NC">🇳🇨 New Caledonia </option>
                  <option value="NZ">🇳🇿 New Zealand </option>
                  <option value="NI">🇳🇮 Nicaragua </option>
                  <option value="NE">🇳🇪 Niger </option>
                  <option value="NG">🇳🇬 Nigeria </option>
                  <option value="NU">🇳🇺 Niue </option>
                  <option value="NF">🇳🇫 Norfolk Island </option>
                  <option value="KP">🇰🇵 North Korea </option>
                  <option value="MK">🇲🇰 North Macedonia </option>
                  <option value="MP">🇲🇵 Northern Mariana Islands </option>
                  <option value="NO">🇳🇴 Norway </option>
                  <option value="OM">🇴🇲 Oman </option>
                  <option value="PK">🇵🇰 Pakistan </option>
                  <option value="PW">🇵🇼 Palau </option>
                  <option value="PS">🇵🇸 Palestine </option>
                  <option value="PA">🇵🇦 Panama </option>
                  <option value="PG">🇵🇬 Papua New Guinea </option>
                  <option value="PY">🇵🇾 Paraguay </option>
                  <option value="PE">🇵🇪 Peru </option>
                  <option value="PH">🇵🇭 Philippines </option>
                  <option value="PN">🇵🇳 Pitcairn Island </option>
                  <option value="PL">🇵🇱 Poland </option>
                  <option value="PF">🇵🇫 Polynesia </option>
                  <option value="PT">🇵🇹 Portugal </option>
                  <option value="PR">🇵🇷 Puerto Rico </option>
                  <option value="QA">🇶🇦 Qatar </option>
                  <option value="RE">🇷🇪 Reunion </option>
                  <option value="RO">🇷🇴 Romania </option>
                  <option value="RU">🇷🇺 Russia </option>
                  <option value="RW">🇷🇼 Rwanda </option>
                  <option value="SH">🇸🇭 Saint Helena </option>
                  <option value="KN">🇰🇳 Saint Kitts and Nevis </option>
                  <option value="LC">🇱🇨 Saint Lucia </option>
                  <option value="PM">🇵🇲 Saint Pierre and Miquelon </option>
                  <option value="VC">
                    🇻🇨 Saint Vincent and the Grenadines{" "}
                  </option>
                  <option value="MF">🇲🇫 Saint-Martin </option>
                  <option value="WS">🇼🇸 Samoa </option>
                  <option value="SM">🇸🇲 San Marino </option>
                  <option value="ST">🇸🇹 Sao Tome and Principe </option>
                  <option value="SA">🇸🇦 Saudi Arabia </option>
                  <option value="SN">🇸🇳 Senegal </option>
                  <option value="RS">🇷🇸 Serbia </option>
                  <option value="SC">🇸🇨 Seychelles </option>
                  <option value="SL">🇸🇱 Sierra Leone </option>
                  <option value="SG">🇸🇬 Singapore </option>
                  <option value="SX">🇸🇽 Sint Maarten </option>
                  <option value="SK">🇸🇰 Slovakia </option>
                  <option value="SI">🇸🇮 Slovenia </option>
                  <option value="SB">🇸🇧 Solomon Islands </option>
                  <option value="SO">🇸🇴 Somalia </option>
                  <option value="ZA">🇿🇦 South Africa </option>
                  <option value="GS">
                    🇬🇸 South Georgia and the South Sandwich Islands{" "}
                  </option>
                  <option value="KR">🇰🇷 South Korea </option>
                  <option value="SS">🇸🇸 South Sudan </option>
                  <option value="ES">🇪🇸 Spain </option>
                  <option value="LK">🇱🇰 Sri Lanka </option>
                  <option value="SD">🇸🇩 Sudan </option>
                  <option value="SR">🇸🇷 Suriname </option>
                  <option value="SJ">🇸🇯 Svalbard and Jan Mayen Islands </option>
                  <option value="SZ">🇸🇿 Swaziland </option>
                  <option value="SE">🇸🇪 Sweden </option>
                  <option value="CH">🇨🇭 Switzerland </option>
                  <option value="SY">🇸🇾 Syria </option>
                  <option value="TW">🇹🇼 Taiwan </option>
                  <option value="TJ">🇹🇯 Tajikistan </option>
                  <option value="TZ">🇹🇿 Tanzania </option>
                  <option value="TH">🇹🇭 Thailand </option>
                  <option value="BS">🇧🇸 The Bahamas </option>
                  <option value="TG">🇹🇬 Togo </option>
                  <option value="TK">🇹🇰 Tokelau </option>
                  <option value="TO">🇹🇴 Tonga </option>
                  <option value="TT">🇹🇹 Trinidad and Tobago </option>
                  <option value="TN">🇹🇳 Tunisia </option>
                  <option value="TR">🇹🇷 Turkey </option>
                  <option value="TM">🇹🇲 Turkmenistan </option>
                  <option value="TC">🇹🇨 Turks and Caicos Islands </option>
                  <option value="TV">🇹🇻 Tuvalu </option>
                  <option value="UM">🇺🇲 USA Minor Outlying Islands </option>
                  <option value="UG">🇺🇬 Uganda </option>
                  <option value="UA">🇺🇦 Ukraine </option>
                  <option value="AE">🇦🇪 United Arab Emirates </option>
                  <option value="UK">🇬🇧 United Kingdom </option>
                  <option value="US">🇺🇸 United States </option>
                  <option value="VI">🇻🇮 United States Virgin Islands </option>
                  <option value="UY">🇺🇾 Uruguay </option>
                  <option value="UZ">🇺🇿 Uzbekistan </option>
                  <option value="VU">🇻🇺 Vanuatu </option>
                  <option value="VA">🇻🇦 Vatican City </option>
                  <option value="VE">🇻🇪 Venezuela </option>
                  <option value="VN">🇻🇳 Vietnam </option>
                  <option value="WF">🇼🇫 Wallis and Futuna Islands </option>
                  <option value="EH">🇪🇭 Western Sahara </option>
                  <option value="YE">🇾🇪 Yemen </option>
                  <option value="ZM">🇿🇲 Zambia </option>
                  <option value="ZW">🇿🇼 Zimbabwe </option>{" "}
                </optgroup>
                <option value="Worldwide" selected="">
                  🌏 Worldwide{" "}
                </option>
              </select>
              <div class="ts-wrapper select_locations multi plugin-remove_button has-items">
                <div class="ts-control">
                  <div data-value="Worldwide" class="item" data-ts-item="">
                    🌏 Worldwide{" "}
                    <a
                      href="javascript:void(0)"
                      class="remove"
                      tabindex="-1"
                      title="Remove"
                    >
                      ×
                    </a>
                  </div>
                  <input
                    type="select-multiple"
                    autocomplete="off"
                    size="1"
                    tabindex="0"
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-controls="select_locations-ts-dropdown"
                    id="select_locations-ts-control"
                    placeholder="Type a location this job is restricted to like Worldwide, Europe, or Netherlands"
                  />
                </div>
                <div
                  class="ts-dropdown multi plugin-remove_button"
                  style={getStyleObjectFromString("display: none;")}
                >
                  <div
                    role="listbox"
                    tabindex="-1"
                    class="ts-dropdown-content"
                    id="select_locations-ts-dropdown"
                  ></div>
                </div>
              </div>
              <span
                class="info"
                style={getStyleObjectFromString(
                  "margin-top:-8px;margin-left:18px;"
                )}
              >
                If you'd only like to hire people from a specific location or
                timezone this remote job is restricted to (e.g. Europe, United
                States or Japan). If not restricted, please leave it as
                "Worldwide". The less restricted this is, the more applicants
                you will get. Keeping it "Worldwide" is highly recommended as
                you'll have access to a worldwide pool of talent.{" "}
                <strong>
                  To promote fairness in remote work positions,{" "}
                  <a
                    target="_blank"
                    href="https://twitter.com/levelsio/status/1394260973406457863?s=20"
                    previewlistener="true"
                  >
                    worldwide jobs are ranked higher
                  </a>
                  .
                </strong>
              </span>
            </div>
            <br />
          </div>
          <div class="group group-layout">
            <div class="group-heading">Design your job post</div>
            <p class="p_paid_support">
              <input
                autocomplete="off"
                type="checkbox"
                checked=""
                class="input_paid_support"
              />
              <span class="span_paid_support">
                Get 💁‍♀️ premium support and help with your job post (+$
                <span class="paid_support_price">89</span>)
              </span>
            </p>
            <p class="p_show_logo">
              <input
                autocomplete="off"
                type="checkbox"
                checked=""
                name="show_logo"
                class="input_show_logo"
              />
              <span class="span_show_logo">
                Show my ⭐️ company logo besides my post (+$
                <span class="show_logo_price">44</span>)
                <span
                  class="tooltip"
                  title="Based on previous job post data compared to a regular job post"
                  style={getStyleObjectFromString(
                    "border:1px solid #ff4742;background:none;display:inline-block;text-transform:uppercase;color:#ff4742;font-size:12px;margin-left:14px;font-weight:bold;border-radius:6px;padding:3px;"
                  )}
                >
                  2x more views
                </span>
              </span>
            </p>
            <p class="p_email_blast">
              <input
                autocomplete="off"
                type="checkbox"
                checked=""
                name="email_blast"
                class="input_email_blast"
              />
              <span class="span_email_blast tooltip">
                Email blast my job post to <span class="big">📮1,109,888</span>{" "}
                remote candidates (+$<span class="email_blast_price">89</span>)
                <span
                  class="tooltip"
                  title="Based on previous job post data compared to a regular job post"
                  style={getStyleObjectFromString(
                    "border:1px solid #ff4742;background:none;display:inline-block;text-transform:uppercase;color:#ff4742;font-size:12px;margin-left:14px;font-weight:bold;border-radius:6px;padding:3px;"
                  )}
                >
                  3x more views
                </span>
              </span>
            </p>
            <p class="p_auto_match_with_remote_workers">
              <input
                autocomplete="off"
                type="checkbox"
                checked=""
                name="auto_match_with_remote_workers"
                class="input_auto_match_with_remote_workers"
              />
              <span class="span_auto_match_with_remote_workers tooltip">
                Get auto matched with suitable applicants from our{" "}
                <a
                  target="_blank"
                  href="https://remoteok.com/workers"
                  previewlistener="true"
                >
                  directory of remote workers
                </a>
              </span>
            </p>
            <p class="p_short_link">
              <input
                autocomplete="off"
                type="checkbox"
                checked=""
                name="short_link"
                class="input_short_link"
              />
              <span class="span_short_link tooltip">
                Create a
                <img
                  src="https://remoteok.com/assets/qr_icon.png?1708185060"
                  style={getStyleObjectFromString(
                    "width: 22px;height: 22px;vertical-align: middle;display:inline-block;"
                  )}
                />{" "}
                QR-code short link for your post like{" "}
                <a href="javascript:">rok.co/vp</a> to share easily (+$
                <span class="short_link_price">44</span>)
              </span>
            </p>
            <p
              class="p_auto_bump"
              style={getStyleObjectFromString("display:none")}
            >
              <input
                autocomplete="off"
                type="checkbox"
                checked=""
                data-why-checked="because new job post default checked"
                name="auto_bump"
                class="input_auto_bump"
              />
              <span class="span_auto_bump tooltip">
                Auto renew my job post and bump it to the frontpage after 30
                days{" "}
              </span>
            </p>
            <p class="p_highlight">
              <input
                autocomplete="off"
                type="checkbox"
                checked=""
                data-why-checked="because new job post default checked"
                name="highlight"
                class="input_highlight"
              />
              <span class="span_highlight">
                Highlight your post in ⚠️ yellow (+$
                <span class="highlight_price">49</span>)
                <span
                  class="tooltip"
                  title="Based on previous job post data compared to a regular job post"
                  style={getStyleObjectFromString(
                    "border:1px solid #ff4742;background:none;display:inline-block;text-transform:uppercase;color:#ff4742;font-size:12px;margin-left:14px;font-weight:bold;border-radius:6px;padding:3px;"
                  )}
                >
                  2x more views
                </span>
              </span>
            </p>
            <p class="p_sticky_day">
              <input
                autocomplete="off"
                type="checkbox"
                name="sticky_day"
                class="input_sticky_day"
              />
              <span class="span_sticky_day">
                Sticky your post so it stays on 📌 top of the frontpage for ⏰
                24 hours (+$<span class="sticky_day_price">89</span>)
                <span
                  class="tooltip"
                  title="Based on previous job post data compared to a regular job post"
                  style={getStyleObjectFromString(
                    "border:1px solid #ff4742;background:none;display:inline-block;text-transform:uppercase;color:#ff4742;font-size:12px;margin-left:14px;font-weight:bold;border-radius:6px;padding:3px;"
                  )}
                >
                  2x more views
                </span>
              </span>
            </p>
            <p class="p_sticky_week">
              <input
                autocomplete="off"
                type="checkbox"
                name="sticky_week"
                class="input_sticky_week"
              />
              <span class="span_sticky_week">
                Sticky your post so it stays on 📌 top of the frontpage for 🗓 1
                entire week (+$<span class="sticky_price">179</span>){" "}
                <span
                  class="tooltip"
                  title="Based on previous job post data compared to a regular job post"
                  style={getStyleObjectFromString(
                    "border:1px solid #ff4742;background:none;display:inline-block;text-transform:uppercase;color:#ff4742;font-size:12px;margin-left:14px;font-weight:bold;border-radius:6px;padding:3px;"
                  )}
                >
                  6x more views
                </span>
              </span>
            </p>
            <p class="p_sticky_month">
              <input
                autocomplete="off"
                type="checkbox"
                name="sticky_month"
                class="input_sticky_month"
              />
              <span class="span_sticky_month">
                Sticky your post so it stays on 📌 top of the frontpage for 🗓 1
                entire month (+$<span class="sticky_month_price">537</span>){" "}
                <span
                  class="tooltip"
                  title="Based on previous job post data compared to a regular job post"
                  style={getStyleObjectFromString(
                    "border:1px solid #ff4742;background:none;display:inline-block;text-transform:uppercase;color:#ff4742;font-size:12px;margin-left:14px;font-weight:bold;border-radius:6px;padding:3px;"
                  )}
                >
                  9x more views
                </span>
              </span>
            </p>
            <p class="p_geolock">
              <input autocomplete="off" type="checkbox" class="input_geolock" />
              <span class="span_geolock">
                Geolock your post for people only in the location it's
                restricted to above and block applicants from elsewhere (+$
                <span class="geolock_price">89</span>)
              </span>
            </p>
            <p>
              Expected views{" "}
              <input
                style={getStyleObjectFromString("width: auto")}
                readonly=""
                type="text"
                class="input_expected_views"
              />{" "}
              Expected clicks
              <input
                readonly=""
                style={getStyleObjectFromString("width: auto")}
                type="text"
                class="input_expected_clicks"
              />
            </p>
            <div
              class="info"
              style={getStyleObjectFromString(
                "margin-bottom:7px;margin-top:7px;"
              )}
            >
              Pricing of job posts and extra features is dynamic and may change
              based on how many jobs are posted every week, for example to avoid
              too many sticky jobs at one time. Sticky posts are limited to max
              2 per company at one time. Job posts are a) published for 30 days,
              b) cannot be refunded, and c) renew automatically after 30 days
              unless you 1) disable auto renew after posting on the edit page,
              or 2) close your job post on the edit page. We send a reminder 7
              days by email before renewing. Renewing is the same price as the
              original job post for 30 days. If you buy a bundle, the discounted
              single job post price is used to renew. Automatic renewals can be
              self-refunded within 7 days after renewing with the link in the
              email.{" "}
            </div>
          </div>
          <div class="group">
            <div class="group-heading">Job details</div>
            <div>
              <span class="head">
                Company logo (.JPG or .PNG, square or round)
              </span>
              <div class="logo-box">
                <p>💾 Upload</p>
                <input
                  autocomplete="off"
                  type="file"
                  name="company_logo"
                  class="input_company_logo"
                  accept=".jpg,.png"
                />
              </div>
            </div>
            <p class="p_highlight_color">
              <input
                autocomplete="off"
                type="checkbox"
                class="input_highlight_color"
              />
              <span class="span_highlight_color">
                Highlight with your company's 🌈 brand color (+$
                <span class="highlight_color_price">499</span>) &nbsp;&nbsp;👉
              </span>
              <input
                autocomplete="off"
                type="color"
                name="highlight_color"
                class="input_highlight_color_value"
                value="#ff4742"
              />
              <span
                class="tooltip"
                title="Based on previous job post data compared to a regular job post"
                style={getStyleObjectFromString(
                  "border:1px solid #ff4742;background:none;display:inline-block;text-transform:uppercase;color:#ff4742;font-size:12px;margin-left:14px;font-weight:bold;border-radius:6px;padding:3px;"
                )}
              >
                3x more views
              </span>
            </p>
            <div>
              <span class="head">
                Annual Salary or Compensation in USD (Gross, Annualized,
                Full-Time-Equivalent (FTE) in USD equivalent)*
              </span>
              <select
                data-required="required"
                class="select_salary_min"
                style={getStyleObjectFromString("width:calc(50% - 56px)")}
              >
                <option value="">Minimum per year</option>
                <option value="10000">USD 10,000 per year</option>
                <option value="20000">USD 20,000 per year</option>
                <option value="30000">USD 30,000 per year</option>
                <option value="40000">USD 40,000 per year</option>
                <option value="50000">USD 50,000 per year</option>
                <option value="60000">USD 60,000 per year</option>
                <option value="70000">USD 70,000 per year</option>
                <option value="80000">USD 80,000 per year</option>
                <option value="90000">USD 90,000 per year</option>
                <option value="100000">USD 100,000 per year</option>
                <option value="110000">USD 110,000 per year</option>
                <option value="120000">USD 120,000 per year</option>
                <option value="130000">USD 130,000 per year</option>
                <option value="140000">USD 140,000 per year</option>
                <option value="150000">USD 150,000 per year</option>
                <option value="160000">USD 160,000 per year</option>
                <option value="170000">USD 170,000 per year</option>
                <option value="180000">USD 180,000 per year</option>
                <option value="190000">USD 190,000 per year</option>
                <option value="200000">USD 200,000 per year</option>
                <option value="210000">USD 210,000 per year</option>
                <option value="220000">USD 220,000 per year</option>
                <option value="230000">USD 230,000 per year</option>
                <option value="240000">USD 240,000 per year</option>
                <option value="250000">USD 250,000 per year</option>
                <option value="260000">USD 260,000 per year</option>
                <option value="270000">USD 270,000 per year</option>
                <option value="280000">USD 280,000 per year</option>
                <option value="290000">USD 290,000 per year</option>
                <option value="300000">USD 300,000 per year</option>
                <option value="310000">USD 310,000 per year</option>
                <option value="320000">USD 320,000 per year</option>
                <option value="330000">USD 330,000 per year</option>
                <option value="340000">USD 340,000 per year</option>
                <option value="350000">USD 350,000 per year</option>
                <option value="360000">USD 360,000 per year</option>
                <option value="370000">USD 370,000 per year</option>
                <option value="380000">USD 380,000 per year</option>
                <option value="390000">USD 390,000 per year</option>
                <option value="400000">USD 400,000 per year</option>
                <option value="410000">USD 410,000 per year</option>
                <option value="420000">USD 420,000 per year</option>
                <option value="430000">USD 430,000 per year</option>
                <option value="440000">USD 440,000 per year</option>
                <option value="450000">USD 450,000 per year</option>
                <option value="460000">USD 460,000 per year</option>
                <option value="470000">USD 470,000 per year</option>
                <option value="480000">USD 480,000 per year</option>
                <option value="490000">USD 490,000 per year</option>
                <option value="500000">USD 500,000 per year</option>
                <option value="510000">USD 510,000 per year</option>
                <option value="520000">USD 520,000 per year</option>
                <option value="530000">USD 530,000 per year</option>
                <option value="540000">USD 540,000 per year</option>
                <option value="550000">USD 550,000 per year</option>
                <option value="560000">USD 560,000 per year</option>
                <option value="570000">USD 570,000 per year</option>
                <option value="580000">USD 580,000 per year</option>
                <option value="590000">USD 590,000 per year</option>
                <option value="600000">USD 600,000 per year</option>
                <option value="610000">USD 610,000 per year</option>
                <option value="620000">USD 620,000 per year</option>
                <option value="630000">USD 630,000 per year</option>
                <option value="640000">USD 640,000 per year</option>
                <option value="650000">USD 650,000 per year</option>
                <option value="660000">USD 660,000 per year</option>
                <option value="670000">USD 670,000 per year</option>
                <option value="680000">USD 680,000 per year</option>
                <option value="690000">USD 690,000 per year</option>
                <option value="700000">USD 700,000 per year</option>
                <option value="710000">USD 710,000 per year</option>
                <option value="720000">USD 720,000 per year</option>
                <option value="730000">USD 730,000 per year</option>
                <option value="740000">USD 740,000 per year</option>
                <option value="750000">USD 750,000 per year</option>
              </select>{" "}
              —
              <select
                data-required="required"
                class="select_salary_max"
                style={getStyleObjectFromString("width:calc(50% - 56px)")}
              >
                <option value="">Maximum per year</option>
                <option value="10000">USD 10,000 per year</option>
                <option value="20000">USD 20,000 per year</option>
                <option value="30000">USD 30,000 per year</option>
                <option value="40000">USD 40,000 per year</option>
                <option value="50000">USD 50,000 per year</option>
                <option value="60000">USD 60,000 per year</option>
                <option value="70000">USD 70,000 per year</option>
                <option value="80000">USD 80,000 per year</option>
                <option value="90000">USD 90,000 per year</option>
                <option value="100000">USD 100,000 per year</option>
                <option value="110000">USD 110,000 per year</option>
                <option value="120000">USD 120,000 per year</option>
                <option value="130000">USD 130,000 per year</option>
                <option value="140000">USD 140,000 per year</option>
                <option value="150000">USD 150,000 per year</option>
                <option value="160000">USD 160,000 per year</option>
                <option value="170000">USD 170,000 per year</option>
                <option value="180000">USD 180,000 per year</option>
                <option value="190000">USD 190,000 per year</option>
                <option value="200000">USD 200,000 per year</option>
                <option value="210000">USD 210,000 per year</option>
                <option value="220000">USD 220,000 per year</option>
                <option value="230000">USD 230,000 per year</option>
                <option value="240000">USD 240,000 per year</option>
                <option value="250000">USD 250,000 per year</option>
                <option value="260000">USD 260,000 per year</option>
                <option value="270000">USD 270,000 per year</option>
                <option value="280000">USD 280,000 per year</option>
                <option value="290000">USD 290,000 per year</option>
                <option value="300000">USD 300,000 per year</option>
                <option value="310000">USD 310,000 per year</option>
                <option value="320000">USD 320,000 per year</option>
                <option value="330000">USD 330,000 per year</option>
                <option value="340000">USD 340,000 per year</option>
                <option value="350000">USD 350,000 per year</option>
                <option value="360000">USD 360,000 per year</option>
                <option value="370000">USD 370,000 per year</option>
                <option value="380000">USD 380,000 per year</option>
                <option value="390000">USD 390,000 per year</option>
                <option value="400000">USD 400,000 per year</option>
                <option value="410000">USD 410,000 per year</option>
                <option value="420000">USD 420,000 per year</option>
                <option value="430000">USD 430,000 per year</option>
                <option value="440000">USD 440,000 per year</option>
                <option value="450000">USD 450,000 per year</option>
                <option value="460000">USD 460,000 per year</option>
                <option value="470000">USD 470,000 per year</option>
                <option value="480000">USD 480,000 per year</option>
                <option value="490000">USD 490,000 per year</option>
                <option value="500000">USD 500,000 per year</option>
                <option value="510000">USD 510,000 per year</option>
                <option value="520000">USD 520,000 per year</option>
                <option value="530000">USD 530,000 per year</option>
                <option value="540000">USD 540,000 per year</option>
                <option value="550000">USD 550,000 per year</option>
                <option value="560000">USD 560,000 per year</option>
                <option value="570000">USD 570,000 per year</option>
                <option value="580000">USD 580,000 per year</option>
                <option value="590000">USD 590,000 per year</option>
                <option value="600000">USD 600,000 per year</option>
                <option value="610000">USD 610,000 per year</option>
                <option value="620000">USD 620,000 per year</option>
                <option value="630000">USD 630,000 per year</option>
                <option value="640000">USD 640,000 per year</option>
                <option value="650000">USD 650,000 per year</option>
                <option value="660000">USD 660,000 per year</option>
                <option value="670000">USD 670,000 per year</option>
                <option value="680000">USD 680,000 per year</option>
                <option value="690000">USD 690,000 per year</option>
                <option value="700000">USD 700,000 per year</option>
                <option value="710000">USD 710,000 per year</option>
                <option value="720000">USD 720,000 per year</option>
                <option value="730000">USD 730,000 per year</option>
                <option value="740000">USD 740,000 per year</option>
                <option value="750000">USD 750,000 per year</option>
              </select>
              <span
                class="info"
                style={getStyleObjectFromString(
                  "margin-top:-8px;margin-left:18px;"
                )}
              >
                <strong
                  class="highlight"
                  style={getStyleObjectFromString("text-decoration:underline;")}
                >
                  It's illegal to not share salary range on job posts since
                  2021.
                </strong>{" "}
                Posts without salary will automatically show an estimate of
                salary based on similar jobs. Remote job postings are{" "}
                <a
                  target="_blank"
                  href="https://www.natlawreview.com/article/colorado-pay-transparency-more-guidance-job-promotional-posting-requirements-issued"
                  previewlistener="true"
                >
                  legally required to show a salary compensation range
                </a>{" "}
                in{" "}
                <a
                  target="_blank"
                  href="https://www.lexology.com/library/detail.aspx?g=f81b6cd9-f614-411c-908b-88866db7ea84"
                  previewlistener="true"
                >
                  many U.S. states and countries
                </a>
                . Google does NOT index jobs without salary data. If it's a
                short-term gig, use the annual full-time equivalent. For
                example, if it's a 2-week project for $2,000, the annual
                equivalent would be $2,000 / 2 weeks * 52 weeks = $52,000.
                Please use USD equivalent. We don't have currency built-in yet
                and we'd like to use this salary data to show salary trends in
                remote work.{" "}
                <a
                  target="_blank"
                  href="https://twitter.com/levelsio/status/1364288537030459400"
                  previewlistener="true"
                >
                  Remote OK is a supporter of #OpenSalaries
                </a>
                .
              </span>
            </div>
            <div class="div_description_editor" id="div_description_editor">
              <span class="head">Job description*</span>
              <textarea
                class="textarea_description"
                id="textarea_description"
                data-name="a job description"
                name="description"
                aria-hidden="true"
                style={getStyleObjectFromString("display: none;")}
              ></textarea>
              <div
                role="application"
                class="tox tox-tinymce"
                aria-disabled="false"
                style={getStyleObjectFromString(
                  "visibility: hidden; height: 500px;"
                )}
              >
                <div class="tox-editor-container">
                  <div
                    data-alloy-vertical-dir="toptobottom"
                    class="tox-editor-header"
                  >
                    <div
                      role="group"
                      class="tox-toolbar-overlord"
                      aria-disabled="false"
                    >
                      <div role="group" class="tox-toolbar__primary">
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabindex="-1"
                          class="tox-toolbar__group"
                        >
                          <button
                            aria-label="Undo"
                            title="Undo"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn tox-tbtn--disabled"
                            aria-disabled="true"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 01-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L6.4 8z"
                                  fill-rule="nonzero"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Redo"
                            title="Redo"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn tox-tbtn--disabled"
                            aria-disabled="true"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 11-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4l3.3-3.3z"
                                  fill-rule="nonzero"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabindex="-1"
                          class="tox-toolbar__group"
                        >
                          <button
                            aria-label="Bold"
                            title="Bold"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Italic"
                            title="Italic"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabindex="-1"
                          class="tox-toolbar__group"
                        >
                          <button
                            aria-label="Heading 1"
                            title="Heading 1"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn tox-tbtn--select"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-tbtn__select-label">H1</span>
                          </button>
                          <button
                            aria-label="Heading 2"
                            title="Heading 2"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn tox-tbtn--select"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-tbtn__select-label">H2</span>
                          </button>
                        </div>
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabindex="-1"
                          class="tox-toolbar__group"
                        >
                          <button
                            aria-label="Bullet list"
                            title="Bullet list"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Numbered list"
                            title="Numbered list"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabindex="-1"
                          class="tox-toolbar__group"
                        >
                          <button
                            aria-label="Decrease indent"
                            title="Decrease indent"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn tox-tbtn--disabled"
                            aria-disabled="true"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm1.6-3.8a1 1 0 01-1.2 1.6l-3-2a1 1 0 010-1.6l3-2a1 1 0 011.2 1.6L6.8 12l1.8 1.2z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Increase indent"
                            title="Increase indent"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn"
                            aria-disabled="false"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 011.2-1.6l3 2a1 1 0 010 1.6l-3 2a1 1 0 11-1.2-1.6z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabindex="-1"
                          class="tox-toolbar__group"
                        >
                          <button
                            aria-label="Insert/edit link"
                            title="Insert/edit link"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M6.2 12.3a1 1 0 011.4 1.4l-2.1 2a2 2 0 102.7 2.8l4.8-4.8a1 1 0 000-1.4 1 1 0 111.4-1.3 2.9 2.9 0 010 4L9.6 20a3.9 3.9 0 01-5.5-5.5l2-2zm11.6-.6a1 1 0 01-1.4-1.4l2-2a2 2 0 10-2.6-2.8L11 10.3a1 1 0 000 1.4A1 1 0 119.6 13a2.9 2.9 0 010-4L14.4 4a3.9 3.9 0 015.5 5.5l-2 2z"
                                  fill-rule="nonzero"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="tox-anchorbar"></div>
                  </div>
                  <div class="tox-sidebar-wrap">
                    <div class="tox-edit-area">
                      <iframe
                        id="textarea_description_ifr"
                        frameborder="0"
                        allowtransparency="true"
                        title="Rich Text Area"
                        class="tox-edit-area__iframe"
                        srcdoc='<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></head><body id="tinymce" class="mce-content-body " data-id="textarea_description" aria-label="Rich Text Area. Press ALT-0 for help."><br/></body></html>'
                      ></iframe>
                    </div>
                    <div role="complementary" class="tox-sidebar">
                      <div
                        data-alloy-tabstop="true"
                        tabindex="-1"
                        class="tox-sidebar__slider tox-sidebar--sliding-closed"
                        style={getStyleObjectFromString("width: 0px;")}
                      >
                        <div class="tox-sidebar__pane-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  class="tox-throbber"
                  style={getStyleObjectFromString("display: none;")}
                ></div>
              </div>
            </div>
            <div class="benefits" id="benefits">
              <span class="head">
                Benefits <span class="badge">New</span>
              </span>
              <div class="benefits_container">
                <div data-benefit="401k">💰 401(k) </div>
                <div data-benefit="distributed_team">🌎 Distributed team </div>
                <div data-benefit="async">⏰ Async </div>
                <div data-benefit="vision_insurance">🤓 Vision insurance </div>
                <div data-benefit="dental_insurance">🦷 Dental insurance </div>
                <div data-benefit="medical_insurance">
                  🚑 Medical insurance{" "}
                </div>
                <div data-benefit="unlimited_vacation">
                  🏖 Unlimited vacation{" "}
                </div>
                <div data-benefit="paid_time_off">🏖 Paid time off </div>
                <div data-benefit="4_day_workweek">📆 4 day workweek </div>
                <div data-benefit="pension_matching">💰 401k matching </div>
                <div data-benefit="company_retreats">🏔 Company retreats </div>
                <div data-benefit="coworking_budget">🏬 Coworking budget </div>
                <div data-benefit="learning_budget">📚 Learning budget </div>
                <div data-benefit="free_gym_membership">
                  💪 Free gym membership{" "}
                </div>
                <div data-benefit="mental_wellness_budget">
                  🧘 Mental wellness budget{" "}
                </div>
                <div data-benefit="home_office_budget">
                  🖥 Home office budget{" "}
                </div>
                <div data-benefit="pay_in_crypto">🥧 Pay in crypto </div>
                <div data-benefit="pseudonymous">🥸 Pseudonymous </div>
                <div data-benefit="profit_sharing">💰 Profit sharing </div>
                <div data-benefit="equity_compensation">
                  💰 Equity compensation{" "}
                </div>
                <div data-benefit="no_whiteboard">
                  ⬜️ No whiteboard interview{" "}
                </div>
                <div data-benefit="no_monitoring">👀 No monitoring system </div>
                <div data-benefit="no_politics">🚫 No politics at work </div>
                <div data-benefit="hire_old">🎅 We hire old (and young) </div>
              </div>
            </div>
            <div class="div_instructions_editor">
              <span class="head">How to apply?</span>
              <textarea
                class="textarea_instructions"
                id="textarea_instructions"
                name="instructions"
                xplaceholder="Send a cover letter and resume to..."
                aria-hidden="true"
                style={getStyleObjectFromString("display: none;")}
              ></textarea>
              <div
                role="application"
                class="tox tox-tinymce"
                aria-disabled="false"
                style={getStyleObjectFromString(
                  "visibility: hidden; height: 250px;"
                )}
              >
                <div class="tox-editor-container">
                  <div
                    data-alloy-vertical-dir="toptobottom"
                    class="tox-editor-header"
                  >
                    <div
                      role="group"
                      class="tox-toolbar-overlord"
                      aria-disabled="false"
                    >
                      <div role="group" class="tox-toolbar__primary">
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabindex="-1"
                          class="tox-toolbar__group"
                        >
                          <button
                            aria-label="Undo"
                            title="Undo"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn tox-tbtn--disabled"
                            aria-disabled="true"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 01-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L6.4 8z"
                                  fill-rule="nonzero"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Redo"
                            title="Redo"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn tox-tbtn--disabled"
                            aria-disabled="true"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 11-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4l3.3-3.3z"
                                  fill-rule="nonzero"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabindex="-1"
                          class="tox-toolbar__group"
                        >
                          <button
                            aria-label="Bold"
                            title="Bold"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Italic"
                            title="Italic"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabindex="-1"
                          class="tox-toolbar__group"
                        >
                          <button
                            aria-label="Heading 1"
                            title="Heading 1"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn tox-tbtn--select"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-tbtn__select-label">H1</span>
                          </button>
                          <button
                            aria-label="Heading 2"
                            title="Heading 2"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn tox-tbtn--select"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-tbtn__select-label">H2</span>
                          </button>
                        </div>
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabindex="-1"
                          class="tox-toolbar__group"
                        >
                          <button
                            aria-label="Bullet list"
                            title="Bullet list"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Numbered list"
                            title="Numbered list"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabindex="-1"
                          class="tox-toolbar__group"
                        >
                          <button
                            aria-label="Decrease indent"
                            title="Decrease indent"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn tox-tbtn--disabled"
                            aria-disabled="true"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm1.6-3.8a1 1 0 01-1.2 1.6l-3-2a1 1 0 010-1.6l3-2a1 1 0 011.2 1.6L6.8 12l1.8 1.2z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Increase indent"
                            title="Increase indent"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn"
                            aria-disabled="false"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 011.2-1.6l3 2a1 1 0 010 1.6l-3 2a1 1 0 11-1.2-1.6z"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabindex="-1"
                          class="tox-toolbar__group"
                        >
                          <button
                            aria-label="Insert/edit link"
                            title="Insert/edit link"
                            type="button"
                            tabindex="-1"
                            class="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                          >
                            <span class="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M6.2 12.3a1 1 0 011.4 1.4l-2.1 2a2 2 0 102.7 2.8l4.8-4.8a1 1 0 000-1.4 1 1 0 111.4-1.3 2.9 2.9 0 010 4L9.6 20a3.9 3.9 0 01-5.5-5.5l2-2zm11.6-.6a1 1 0 01-1.4-1.4l2-2a2 2 0 10-2.6-2.8L11 10.3a1 1 0 000 1.4A1 1 0 119.6 13a2.9 2.9 0 010-4L14.4 4a3.9 3.9 0 015.5 5.5l-2 2z"
                                  fill-rule="nonzero"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="tox-anchorbar"></div>
                  </div>
                  <div class="tox-sidebar-wrap">
                    <div class="tox-edit-area">
                      <iframe
                        id="textarea_instructions_ifr"
                        frameborder="0"
                        allowtransparency="true"
                        title="Rich Text Area"
                        class="tox-edit-area__iframe"
                        srcdoc='<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></head><body id="tinymce" class="mce-content-body " data-id="textarea_instructions" aria-label="Rich Text Area. Press ALT-0 for help."><br/></body></html>'
                      ></iframe>
                    </div>
                    <div role="complementary" class="tox-sidebar">
                      <div
                        data-alloy-tabstop="true"
                        tabindex="-1"
                        class="tox-sidebar__slider tox-sidebar--sliding-closed"
                        style={getStyleObjectFromString("width: 0px;")}
                      >
                        <div class="tox-sidebar__pane-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  class="tox-throbber"
                  style={getStyleObjectFromString("display: none;")}
                ></div>
              </div>
              <span
                class="info"
                style={getStyleObjectFromString(
                  "margin-top:-82px;margin-left:18px;"
                )}
              >
                Not required
              </span>
            </div>
            <div class="div_apply_email">
              <span class="head">
                Email to get job applications via Applicant AI (our own ATS)*
              </span>
              <input
                autocomplete="off"
                type="text"
                name="apply_email"
                class="input_apply_email"
                placeholder="Apply email address"
                data-required="required"
                value=""
              />
              <span class="info">
                This email is not public (!). You will receive new job
                applications on this email address via{" "}
                <a
                  target="_blank"
                  href="https://applicantai.com"
                  previewlistener="true"
                >
                  Applicant AI™
                </a>
                , a free applicant tracking system (ATS) made by Remote OK. The
                [ Apply ] button on your job will link to a customizable job
                apply form on Applicant AI and you'll be able to see people who
                apply to your job on there.
              </span>
            </div>
            <span
              style={getStyleObjectFromString(
                "text-align:center;display:block;margin-bottom: -1em;margin-top: 0.5em;"
              )}
            >
              or
            </span>
            <div class="div_apply_url">
              <span class="head">Apply URL</span>
              <input
                autocomplete="off"
                type="text"
                data-name="a URL where people can apply"
                name="apply_url"
                class="input_apply_url readonly"
                placeholder="https://"
                value=""
              />
              <span class="info">
                If you'd like to use your own apply form or ATS you can enter
                the URL here for people to apply. Jobs that use our own
                Applicant AI ATS generally receive more applicants.
              </span>
            </div>
          </div>
          <div class="group" id="company">
            <div class="group-heading">Company</div>
            <div>
              <span class="head">Company Twitter</span>
              <input
                autocomplete="off"
                type="text"
                name="company_twitter"
                data-name="your company's Twitter account"
                class="input_company_twitter"
                placeholder="username"
                value=""
              />
              <span
                class="info"
                style={getStyleObjectFromString("margin-top:-14px;")}
              >
                Twitter username without @. Not required, but used to tag your
                company when we tweet out your job post.
              </span>
            </div>
            <div>
              <span class="head">
                Company email* (stays private, for invoice + edit link)
              </span>
              <input
                autocomplete="off"
                data-required="required"
                type="text"
                name="company_email"
                data-name="your company's email to send the invoice and edit link"
                class="input_company_email"
                xplaceholder="example@company.com"
                value=""
              />
              <span class="info">
                Make sure this email is accessible by you! We use this to send
                the invoice and edit link. We can not and do not manually resend
                it! If you use your company domain (same as company name), we
                will show a [ Verified ] tag on your job post.
              </span>
            </div>
            <div>
              <span class="head">Invoice email (stays private)</span>
              <input
                autocomplete="off"
                type="text"
                name="invoice_email"
                data-name="an optional email to send a copy of the invoice and edit link"
                class="input_invoice_email"
                xplaceholder="finance@company.com"
                value=""
              />
              <span class="info">
                We send a copy of the invoice and edit link to here too. You can
                write your finance department or accountant expenses email here
                so they get a copy of the invoice for your bookkeeping.
              </span>
            </div>
            <div>
              <a name="invoice_address"></a>
              <span class="head">Invoice address*</span>
              <textarea
                data-required="required"
                name="company_address"
                data-name="your company's full name and full address to show on the receipt"
                class="textarea_company_address"
                placeholder="e.g. your company's full name and full invoice address, including building, street, city and country; also things like your VAT number, this is shown on the invoice."
              ></textarea>
              <span class="info">
                Specify your company address here and we'll put it on your
                invoice for your bookkeeping. Be sure to [ Save changes ] in
                bottom right after editing your invoice address. Then it'll be
                instantly updated on the invoice.
              </span>
            </div>
            <div>
              <span class="head">Invoice notes / PO number</span>
              <input
                autocomplete="off"
                type="text"
                value=""
                maxlength="200"
                class="input_invoice_notes"
                placeholder="e.g. PO number 1234"
              />
              <span class="info">
                Not required. Add notes here that you'd like to see on the
                invoice/receipt such as a Purchase Order number or any other
                internal notes you need for reference. You can add or edit this
                later.
              </span>
            </div>
            <div>
              <span class="head">Pay later</span>
              <p class="p_pay_later">
                <input
                  autocomplete="off"
                  type="checkbox"
                  name="input_pay_later"
                  class="input_pay_later"
                />
                <span>I'd like to pay later</span>
              </p>
              <div class="info">
                Need to get approval for this payment? Or send the invoice to
                your finance department first? No problem, we'll save your job
                post and send you (and your finance department below) a payment
                link. Once it's paid we immediately publish it!
              </div>
              <div
                class="div_company_email_pay_later"
                style={getStyleObjectFromString("display:none")}
              >
                <span class="head">Pay later email*</span>
                <input
                  autocomplete="off"
                  type="text"
                  name="company_email_pay_later"
                  data-name="your company's email to send the pay later link"
                  class="input_company_email_pay_later"
                  placeholder="Pay later email address"
                />
                <span class="info">
                  We will send a link to pay for this job to this email address.
                </span>
              </div>
              <p></p>
            </div>
          </div>
          <input
            autocomplete="off"
            type="hidden"
            name="discount_code"
            class="input_discount_code"
            value="128bf14a1d8011f673dc91cc85a7404d"
          />
          <div class="group group-feedback">
            <div class="group-heading">Feedback about Remote OK</div>
            <span class="head">Feedback box</span>
            <input
              type="text"
              name="honeypot"
              class="honeypot"
              data-why="This is to check if we have automated bots posting that fill in this text box"
            />
            <textarea class="textarea_feedback_box"></textarea>
            <span
              class="info"
              style={getStyleObjectFromString(
                "margin-top:-14px;margin-left:18px;"
              )}
            >
              This isn't part of the job post. If you have any feature requests
              or general feedback about posting a job Remote OK, leave it here.
              Please be radically honest, I'm always improving the site and act
              on your feedback fast. It's most important that you're happy with
              the site and I want you to keep coming back to post here! This
              feedback box gets sent straight to my phone wherever I am. -Pieter
              Levels, Founder of Remote OK
            </span>
            <br />
            <br />
          </div>
          <div class="group group-preview preview">
            <div class="group-heading">Preview</div>
            <p class="top-text">
              <strong>
                Here's a preview of how your job post will look like
              </strong>
              <br />
              Don't worry if it's not perfect the first time: your job is fully
              editable for free after posting it!
            </p>
            <div class="table_wrapper">
              <div class="watermark">PREVIEW</div>
              <table id="jobsboard" class="preview">
                <tbody>
                  <tr class="active remoteok-original job highlighted light">
                    <td class="image has-logo">
                      <div class="logo"></div>
                    </td>
                    <td class="company position company_and_position">
                      <h3 itemprop="name">Company</h3>
                      <br />
                      <h2 itemprop="title">Position</h2>
                      <br />
                      <div class="locations">
                        <div class="location">🌏 Worldwide</div>
                      </div>
                    </td>
                    <td class="tags"></td>
                    <td class="time"></td>
                    <td class="source">
                      <a class="button apply" rel="nofollow">
                        Apply
                      </a>
                    </td>
                  </tr>
                  <tr class="active expand">
                    <td colspan="999" class="heading">
                      <div class="expandContents">
                        <div class="description" itemprop="description">
                          <h1
                            style={getStyleObjectFromString("text-align:left;")}
                          >
                            <span
                              style={getStyleObjectFromString(
                                "font-weight: 400;"
                              )}
                            >
                              <span class="h1_company">Company</span> is hiring
                              a
                            </span>
                            <br /> Remote{" "}
                            <span class="h1_position">Position</span>
                          </h1>
                          <div class="markdown">
                            The description of the job position will appear
                            here. Write this in the "Job Description" box above.
                          </div>
                        </div>
                        <div class="instructions">
                          <h2>How do you apply?</h2>
                          <div class="markdown">
                            Here the instructions go on how to apply for this
                            job. Write them in the "How to Apply?" box.
                          </div>
                          <a class="button apply" rel="nofollow">
                            Apply for this job
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="group group-partners partners">
            <div class="group-heading">
              From our partners (opens in new window)
            </div>
            <table id="jobsboard">
              <tbody>
                <tr
                  style={getStyleObjectFromString("background-color:#343477;")}
                  class="sw-insert"
                >
                  <td class="image">
                    <a
                      style={getStyleObjectFromString(
                        "text-decoration:none;border:none;"
                      )}
                      rel="follow"
                      href="/remote-health-companies"
                      previewlistener="true"
                    >
                      <div
                        style={getStyleObjectFromString(
                          "background-image:url('https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=85/https://remoteok.comhttps://remoteok.com/assets/safetywing.png?1689099055');border:none;"
                        )}
                        class="logo"
                      ></div>
                    </a>
                  </td>
                  <td
                    class="company position company_and_position"
                    style={getStyleObjectFromString(
                      "padding:0.75em;padding-left:0;"
                    )}
                  >
                    <a
                      style={getStyleObjectFromString(
                        "font-size:1.1em;text-decoration:none;border:none;font-weight:bold;color:#fff;"
                      )}
                      rel="follow"
                      href="/remote-health-companies"
                      previewlistener="true"
                    >
                      The first health insurance for remote startups
                    </a>
                    <br />
                    <a
                      style={getStyleObjectFromString(
                        "font-size:1.1em;text-decoration:none;border:none;font-weight:normal;color:#fff;"
                      )}
                      rel="follow"
                      href="/remote-health-companies"
                      previewlistener="true"
                    >
                      A fully equipped health insurance that works for all your
                      global contractors and employees
                    </a>
                  </td>
                  <td class="tags"></td>
                  <td class="time"></td>
                  <td class="source">
                    <a
                      href="/remote-health-companies"
                      rel="follow"
                      previewlistener="true"
                    >
                      <div
                        class="apply_button no-logo"
                        style={getStyleObjectFromString(
                          "background-color:#5bc6c6;border-color:#5bc6c6 !important;"
                        )}
                      >
                        <p
                          style={getStyleObjectFromString(
                            "opacity:1;color:#fff;"
                          )}
                        >
                          Sign up
                        </p>
                      </div>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="action-expand-right">
          <img
            src="https://remoteok.com/assets/fa-chevron-down.png"
            class="chevron"
          />
        </div>
        <div class="right">
          <div class="action-fold-right">
            <img
              src="https://remoteok.com/assets/fa-chevron-down.png"
              class="chevron"
            />
          </div>
          <p class="tagline">
            Remote OK is{" "}
            <a
              target="_blank"
              href="https://twitter.com/levelsio/status/1606328087569801223"
              previewlistener="true"
            >
              <strong style={getStyleObjectFromString("font-weight:800;")}>
                the most popular remote jobs board in the world
              </strong>
            </a>{" "}
            trusted by millions of remote workers and leading remote companies
            like
          </p>
          <style></style>
          <script src="/functions.js?1661357838"></script>
          <div>
            <span>
              <img src="https://remoteok.com/assets/aws.png?1708185059" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/espn.svg?1633381266" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/ibm.png?1708185059" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/microsoft.png?1708185060" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/scale-ai.png?1708185060" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/ycombinator.png?1708185060" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/github.png?1633381266" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/mozilla.png?1708185060" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/stripe.png?1708185060" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/cloudflare.png?1708185059" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/shopify.png?1708185060" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/godaddy.png?1633381266" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/easyjet.png?1708185059" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/indeed.png?1708185059" />
            </span>
            <span>
              <img src="https://remoteok.com/assets/angellist.png?1708185059" />
            </span>

            <br />
            <br />
            <span class="action-show-logos">Show more</span>
            <br />
            <br />
          </div>
          <div class="clear"></div>
          <p class="p p_4">
            Starting from{" "}
            <span class="big">
              💳 $<span class="price">299</span>
            </span>{" "}
            <span class="sub">for 30 days</span>
          </p>
          <p
            class="p p_1 tooltip"
            title="Reach 2,500,000+ remote workers over 30 days"
          >
            Reach <span class="big">🚀 2,500,000+ </span> remote workers/mo
          </p>
          <p class="p p_2">
            Distributed on the{" "}
            <span class="big">
              <img
                src="https://remoteok.com/assets/google_rect.png"
                style={getStyleObjectFromString(
                  "border-radius: 100%;width:25px;height:25px;vertical-align:middle;margin:0;margin-top:-6px;"
                )}
              />{" "}
              Google for Jobs
            </span>{" "}
            <span class="sub">recruitment network</span>
          </p>
          <p class="p p_2">
            Rated{" "}
            <span class="big">
              <span
                class="stars"
                style={getStyleObjectFromString(
                  "text-align:left;margin: 0 auto;overflow:hidden;width:122px;height: 36px;font-size:24px;position:relative;display:table;margin-top:4px;"
                )}
              >
                <span
                  class="colored-stars"
                  style={getStyleObjectFromString(
                    "white-space:nowrap;overflow: hidden;z-index: 1;position:absolute;top:0;left:0;width:90%"
                  )}
                >
                  <img
                    src="https://remoteok.com/assets/emoji-star.png"
                    style={getStyleObjectFromString("width:24px")}
                  />
                  <img
                    src="https://remoteok.com/assets/emoji-star.png"
                    style={getStyleObjectFromString("width:24px")}
                  />
                  <img
                    src="https://remoteok.com/assets/emoji-star.png"
                    style={getStyleObjectFromString("width:24px")}
                  />
                  <img
                    src="https://remoteok.com/assets/emoji-star.png"
                    style={getStyleObjectFromString("width:24px")}
                  />
                  <img
                    src="https://remoteok.com/assets/emoji-star.png"
                    style={getStyleObjectFromString("width:24px")}
                  />
                </span>
                <span
                  class="gray-stars"
                  style={getStyleObjectFromString(
                    "white-space:nowrap;filter:saturate(0);position:absolute;top:0;left:0;opacity:0.5;"
                  )}
                >
                  <img
                    src="https://remoteok.com/assets/emoji-star.png"
                    style={getStyleObjectFromString("width:24px")}
                  />
                  <img
                    src="https://remoteok.com/assets/emoji-star.png"
                    style={getStyleObjectFromString("width:24px")}
                  />
                  <img
                    src="https://remoteok.com/assets/emoji-star.png"
                    style={getStyleObjectFromString("width:24px")}
                  />
                  <img
                    src="https://remoteok.com/assets/emoji-star.png"
                    style={getStyleObjectFromString("width:24px")}
                  />
                  <img
                    src="https://remoteok.com/assets/emoji-star.png"
                    style={getStyleObjectFromString("width:24px")}
                  />
                </span>
              </span>
            </span>
            <span
              class="sub"
              style={getStyleObjectFromString(
                "display: block;margin-top:10px;"
              )}
            >
              Customer rating <strong>9.0</strong> | <strong>31,244</strong>{" "}
              reviews
            </span>
          </p>
          <p class="p p_3">
            Emailed to{" "}
            <span class="big">
              <img
                class="email-gif"
                title="It's 1995 and welcome to my Geocities homepage, my hobbies are puzzles and maybe you can be the final piece"
                src="https://remoteok.com/assets/mail.gif"
                style={getStyleObjectFromString(
                  "width: 42px;height: auto;margin: 0;vertical-align: middle;margin-right: -9px;"
                )}
              />{" "}
              1,109,888
            </span>{" "}
            <span class="sub">remote job seekers</span>
          </p>
          <p class="p p_4">
            Crossposted to <span class="big">✨ 185 job boards</span> that
            currently use{" "}
            <a
              href="https://www.producthunt.com/posts/remote-ok-jobs-api"
              previewlistener="true"
            >
              our API
            </a>
          </p>
          <p class="p p_4">
            Guaranteed <span class="big">🎡 200+ [Apply] clicks</span> or we
            auto bump it for free
          </p>
          <p
            class="p p_4"
            style={getStyleObjectFromString(
              "height:auto;max-height:none;padding-bottom:0;"
            )}
          >
            Pay with
            <br />
            <img
              src="https://remoteok.com/assets/payment-methods.png?1708185060"
              style={getStyleObjectFromString(
                "max-width:350px;max-height:none;width:100%;height:auto;margin-top:-7px;margin-bottom:-7px;"
              )}
            />
            <br />
            🔐 Secure payment with Stripe
          </p>
          <div class="divider"></div>
          <div
            style={getStyleObjectFromString(
              "position:relative;display:table;margin:0 auto;"
            )}
          >
            <img
              src="https://remoteok.com/assets/testimonial-edwin-stripe-3.jpeg"
              style={getStyleObjectFromString(
                "border:2px solid #fbfbfb;object-fit:cover;border-radius:100%;width:200px;height:200px;"
              )}
            />
            <img
              src="https://logo.clearbit.com/stripe.com"
              style={getStyleObjectFromString(
                "background:#fff;object-fit:contain;position:absolute;border-radius:100%;width:50px;height:50px;top:0;right:0;border:2px solid #fbfbfb"
              )}
            />
          </div>
          <p style={getStyleObjectFromString("display:block")}>
            "
            <span
              class="highlight"
              style={getStyleObjectFromString("font-weight:600")}
            >
              The response has been amazing! A lotttt of applicants.
            </span>{" "}
            Thank you, and everything Remote OK did, to help with this!"
            <br />
            <br />—{" "}
            <a href="https://twitter.com/edwinwee" previewlistener="true">
              <strong>Edwin</strong>
            </a>
            , CMO at{" "}
            <strong>
              <a href="https://stripe.com" previewlistener="true">
                Stripe
              </a>
            </strong>
          </p>
          <div class="divider"></div>
          <div
            style={getStyleObjectFromString(
              "position:relative;display:table;margin:0 auto;"
            )}
          >
            <img
              src="https://remoteok.com/assets/testimonial-andy-tettra.jpg?3"
              style={getStyleObjectFromString(
                "border:2px solid #fbfbfb;object-fit:cover;border-radius:100%;width:200px;height:200px;"
              )}
            />
            <img
              src="https://remoteok.com/cdn-cgi/image/height=400,quality=85/https://remoteok.comhttps://remoteok.com/assets/img/jobs/83b71c2fdb832072db27790ca48e2ba11635442216.png?1635442216"
              style={getStyleObjectFromString(
                "background:#fff;object-fit:contain;position:absolute;border-radius:100%;width:50px;height:50px;top:0;right:0;border:2px solid #fbfbfb"
              )}
            />
          </div>
          <p style={getStyleObjectFromString("display:block")}>
            "I want to say that{" "}
            <span
              class="highlight"
              style={getStyleObjectFromString("font-weight:600")}
            >
              having 1,500 applicants to sort through
            </span>{" "}
            is a good problem to have and thanks to y'all for making that
            happen"
            <br />
            <br />—{" "}
            <a href="https://twitter.com/andygcook" previewlistener="true">
              <strong>Andy</strong>
            </a>
            , CEO at{" "}
            <strong>
              <a href="https://tettra.com" previewlistener="true">
                Tettra
              </a>
            </strong>
          </p>
          <div class="divider"></div>
          <div
            style={getStyleObjectFromString(
              "position:relative;display:table;margin:0 auto;"
            )}
          >
            <img
              src="https://remoteok.com/assets/testimonial-sara-komoot-2.jpg"
              style={getStyleObjectFromString(
                "border:2px solid #fbfbfb;object-fit:cover;border-radius:100%;width:200px;height:200px;"
              )}
            />
            <img
              src="https://remoteok.com/assets/img/jobs/f2b398abc95f6c831a14d3356e7238d41558350139.png"
              style={getStyleObjectFromString(
                "object-fit:cover;position:absolute;border-radius:100%;width:50px;height:50px;top:0;right:0;border:2px solid #fbfbfb;"
              )}
            />
          </div>
          <p style={getStyleObjectFromString("display:block")}>
            "Remote OK has been{" "}
            <span
              class="highlight"
              style={getStyleObjectFromString("font-weight:600")}
            >
              an essential platform
            </span>{" "}
            for attracting great talent to our remote-first company"
            <br />
            <br />—{" "}
            <strong>
              <a
                href="https://linkedin.com/in/sara-krumminga-582a6524"
                previewlistener="true"
              >
                Sara
              </a>
            </strong>
            , Recruitment at{" "}
            <strong>
              <a href="https://komoot.com" previewlistener="true">
                Komoot
              </a>
            </strong>
          </p>
          <div class="divider"></div>
          <div
            style={getStyleObjectFromString(
              "position:relative;display:table;margin:0 auto;"
            )}
          >
            <img
              src="https://remoteok.com/assets/testimonial-tris-aula.jpg?2"
              style={getStyleObjectFromString(
                "border:2px solid #fbfbfb;object-fit:cover;border-radius:100%;width:200px;height:200px;"
              )}
            />
            <img
              src="https://remoteok.comhttps://remoteok.com/assets/img/jobs/419b649f6e4bce4a30b9ee8f3cf0eb431614696177.png?1614696177"
              style={getStyleObjectFromString(
                "background:#fff;object-fit:contain;position:absolute;border-radius:100%;width:50px;height:50px;top:0;right:0;border:2px solid #fbfbfb"
              )}
            />
          </div>
          <p style={getStyleObjectFromString("display:block")}>
            "FYI -{" "}
            <span
              class="highlight"
              style={getStyleObjectFromString("font-weight:600")}
            >
              We are loving the performance of the job ads
            </span>
            , we have had so many great applicants. Thank you for your great
            work on building this job board :)"
            <br />
            <br />—{" "}
            <a href="https://twitter.com/trisrevill" previewlistener="true">
              <strong>Tris</strong>
            </a>
            , Global Sourcing Lead at{" "}
            <strong>
              <a href="https://aula.education" previewlistener="true">
                Aula Education
              </a>
            </strong>
          </p>
          <div class="divider"></div>
          <div
            style={getStyleObjectFromString(
              "position:relative;display:table;margin:0 auto;"
            )}
          >
            <img
              src="https://remoteok.com/cdn-cgi/image/format=auto,fit=cover,width=500,height=500,quality=50/https://remoteok.comhttps://remoteok.com/assets/testimonial-zsolt.jpeg?1708185060"
              style={getStyleObjectFromString(
                "border:2px solid #fbfbfb;object-fit:cover;border-radius:100%;width:200px;height:200px;"
              )}
            />
            <img
              src="https://remoteok.com/cdn-cgi/image/format=auto,fit=cover,width=500,height=500,quality=50/https://remoteok.comhttps://remoteok.com/assets/testimonial-zsolt.jpeg?1708185060"
              style={getStyleObjectFromString(
                "background:#fff;object-fit:contain;position:absolute;border-radius:100%;width:50px;height:50px;top:0;right:0;border:2px solid #fbfbfb"
              )}
            />
          </div>
          <p style={getStyleObjectFromString("display:block")}>
            "I love the site, I tried so many different job sites and{" "}
            <span
              class="highlight"
              style={getStyleObjectFromString("font-weight:600")}
            >
              Remote OK is by far the best to deliver
            </span>
            "<br />
            <br />—{" "}
            <a href="https://twitter.com/kocsmy" previewlistener="true">
              <strong>Zsolt</strong>
            </a>
            , Founder &amp; CEO at{" "}
            <strong>
              <a href="https://hellopingpong.com" previewlistener="true">
                PingPong
              </a>
            </strong>
          </p>
          <div class="divider"></div>
          <div
            style={getStyleObjectFromString(
              "position:relative;display:table;margin:0 auto;"
            )}
          >
            <img
              src="https://remoteok.com/assets/testimonial-baptiste-crisp.jpg?3"
              style={getStyleObjectFromString(
                "border:2px solid #fbfbfb;object-fit:cover;border-radius:100%;width:200px;height:200px;"
              )}
            />
            <img
              src="https://logo.clearbit.com/crisp.chat"
              style={getStyleObjectFromString(
                "background:#fff;object-fit:contain;position:absolute;border-radius:100%;width:50px;height:50px;top:0;right:0;border:2px solid #fbfbfb"
              )}
            />
          </div>
          <p style={getStyleObjectFromString("display:block")}>
            "We super like Remote OK.{" "}
            <span
              class="highlight"
              style={getStyleObjectFromString("font-weight:600")}
            >
              We had around 100 applicants
            </span>{" "}
            for our previous job post, so we are doing a new one :)"
            <br />
            <br />—{" "}
            <a href="https://twitter.com/baptistejamin" previewlistener="true">
              <strong>Baptiste</strong>
            </a>
            , Founder &amp; CEO at{" "}
            <strong>
              <a href="https://crisp.chat" previewlistener="true">
                Crisp Chat
              </a>
            </strong>
          </p>
          <div class="divider"></div>
          <div
            style={getStyleObjectFromString(
              "position:relative;display:table;margin:0 auto;"
            )}
          >
            <img
              src="https://remoteok.com/assets/testimonial-ken-savvy.jpg?2"
              style={getStyleObjectFromString(
                "border:2px solid #fbfbfb;object-fit:cover;border-radius:100%;width:200px;height:200px;"
              )}
            />
            <img
              src="https://remoteok.com/cdn-cgi/image/height=100,quality=85/https://remoteok.comhttps://remoteok.com/assets/img/jobs/dd2334e86cfe71dc67abd2008847757b1599254656.png?1599254656"
              style={getStyleObjectFromString(
                "background:#fff;object-fit:contain;position:absolute;border-radius:100%;width:50px;height:50px;top:0;right:0;border:2px solid #fbfbfb"
              )}
            />
          </div>
          <p style={getStyleObjectFromString("display:block")}>
            "Awesome, you rock!{" "}
            <span
              class="highlight"
              style={getStyleObjectFromString("font-weight:600")}
            >
              Your customer support is a perfect example of why I stick with
              your site
            </span>{" "}
            as our "go-to" job board..."
            <br />
            <br />—{" "}
            <a href="https://twitter.com/kenyarmosh" previewlistener="true">
              <strong>Ken</strong>
            </a>
            , CEO at{" "}
            <strong>
              <a href="https://savvyapps.com" previewlistener="true">
                Savvy
              </a>
            </strong>
          </p>
          <div class="divider"></div>
          <div
            style={getStyleObjectFromString(
              "position:relative;display:table;margin:0 auto;"
            )}
          >
            <img
              src="https://remoteok.com/assets/testimonial-peter-benei.png?3"
              style={getStyleObjectFromString(
                "border:2px solid #fbfbfb;object-fit:cover;border-radius:100%;width:200px;height:200px;"
              )}
            />
            <img
              src="https://logo.clearbit.com/kisspatent.com"
              style={getStyleObjectFromString(
                "background:#fff;object-fit:contain;position:absolute;border-radius:100%;width:50px;height:50px;top:0;right:0;border:2px solid #fbfbfb"
              )}
            />
          </div>
          <p style={getStyleObjectFromString("display:block")}>
            Hey Pieter, just a quick shout out to your amazing stuff at Remote
            OK - we posted 2 jobs in the recent month now, and a quick feedback
            on the applicants: we not just getting a ton of them, but{" "}
            <span
              class="highlight"
              style={getStyleObjectFromString("font-weight:600")}
            >
              people coming from Remote OK are much much much more valid and
              higher quality
            </span>{" "}
            compared to people coming from LinkedIn, Angel, VirtualVocations,
            Remotive, or Indeed, as we posted our jobs there too. So big fan of
            Remote OK, the last job was only posted there. Thanks for the good
            stuff!
            <br />
            <br />—{" "}
            <a href="https://twitter.com/peterbenei" previewlistener="true">
              <strong>Peter</strong>
            </a>
            , COO at{" "}
            <strong>
              <a href="https://kisspatent.com" previewlistener="true">
                KISSPatent
              </a>
            </strong>
          </p>
          <div class="divider"></div>
          <div
            style={getStyleObjectFromString(
              "position:relative;display:table;margin:0 auto;"
            )}
          >
            <img
              src="https://remoteok.com/assets/testimonial-crossover.jpg?2"
              style={getStyleObjectFromString(
                "border:2px solid #fbfbfb;object-fit:cover;border-radius:100%;width:200px;height:200px;"
              )}
            />
            <img
              src="https://remoteok.com/assets/img/jobs/055d78fc342ba01b53289377a9e09f221551693666.png"
              style={getStyleObjectFromString(
                "object-fit:cover;position:absolute;border-radius:100%;width:50px;height:50px;top:0;right:0;border:2px solid #fbfbfb;"
              )}
            />
          </div>
          <p style={getStyleObjectFromString("display:block")}>
            "Thank you for the collaboration, it was a pleasure working with you
            and with Remote OK. It was{" "}
            <span
              class="highlight"
              style={getStyleObjectFromString("font-weight:600")}
            >
              the best job board targeted at remote professionals in terms of
              results.
            </span>
            "<br />
            <br />— <strong>Alex</strong>, Global Sourcing Strategist at{" "}
            <strong>
              <a href="https://crossover.com" previewlistener="true">
                Crossover
              </a>
            </strong>
          </p>

          <div class="divider"></div>
          <a
            class="levelsio-image"
            href="https://twitter.com/levelsio"
            target="_blank"
            previewlistener="true"
          >
            <img
              src="https://remoteok.com/cdn-cgi/image/format=auto,fit=cover,width=500,height=500,quality=50/https://remoteok.comhttps://remoteok.com/assets/img/users/nl_a8906afd977e5a8c28535946da7a1576.jpg?1664126533"
              style={getStyleObjectFromString(
                "border-radius:100%;width:200px;height:200px;"
              )}
            />
          </a>
          <p>
            👋 Hi! I'm the maker of Remote OK and other sites related to remote
            work such as{" "}
            <a
              href="https://nomadlist.com"
              target="_blank"
              previewlistener="true"
            >
              Nomad List
            </a>
            . Remote OK isn't a big team, it's actually just a one-person
            operation which is me on a laptop somewhere in the world. I built
            Remote OK to help 🚀 accelerate the revolution that is remote work
            (and pay my rent and coffee). My site has now become the{" "}
            <a
              style={getStyleObjectFromString("text-decoration:underline")}
              target="_blank"
              href="https://twitter.com/levelsio/status/1606328087569801223?s=20&amp;t=6snxVEs79ITic1-LwC-pSg"
              previewlistener="true"
            >
              #1 remote job board
            </a>{" "}
            in the world!
            <br />
            <br />
            Remote work gives people more flexibility in their daily lives, and
            lets employers hire the 🏆 best talent regardless of where they are
            located in the 🌍 world. That's the most significant change to work
            since the industrial revolution, and that's why I make this site.
            <br />
            <br />
            Need help posting your job? Here's{" "}
            <a
              href="https://twitter.com/levelsio"
              target="_blank"
              previewlistener="true"
            >
              my Twitter
            </a>
            . Tweet to me and I'll help you personally and can also help you if
            you'd like to buy multiple{" "}
            <a href="/buy-bundle" previewlistener="true">
              job posts packages
            </a>{" "}
            or{" "}
            <a href="/ask-for-discount" previewlistener="true">
              get a discount
            </a>
            .
            <br />
            <br />
            Go remote!
            <br />
            <br />
            <strong>
              —{" "}
              <a
                href="https://twitter.com/levelsio"
                target="_blank"
                previewlistener="true"
              >
                Pieter Levels
              </a>
            </strong>
            , Founder of <strong>Remote OK</strong>
          </p>
        </div>
      </div>
      <div class="post-job-button-container">
        <div class="action-post">
          Start hiring — $
          <span class="price">
            <s>299</s> $269
          </span>
        </div>
      </div>
      <div class="post-job-preview-container preview">
        <table id="jobsboard" class="preview">
          <tbody>
            <tr class="active remoteok-original job highlighted light">
              <td class="image has-logo">
                <div class="logo"></div>
              </td>
              <td class="company position company_and_position">
                <h3 itemprop="name">Company</h3>
                <br />
                <h2 itemprop="title">Position</h2>
                <br />
                <div class="locations">
                  <div class="location">🌏 Worldwide</div>
                </div>
              </td>
              <td class="tags"></td>
              <td class="time"></td>
              <td class="source">
                <a class="button apply" rel="nofollow">
                  Apply
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HireRemote;
