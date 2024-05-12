import "./jobdetail.css";
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
const JobDetail = () => {
  return (
    <div class="expandContents" >
      <div class="description" itemprop="description">
        <div class="company_profile ">
          <a class="no-border" href="/springboard" previewlistener="true">
            <img
              alt="Springboard"
              class="logo lazyloaded"
              src="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=300,height=300,quality=80/https://remoteok.com/assets/img/jobs/151d046f507c5cff28b23f671b8f166c1715313606.jpg?"
              data-src="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=300,height=300,quality=80/https://remoteok.com/assets/img/jobs/151d046f507c5cff28b23f671b8f166c1715313606.jpg?"
            />
          </a>

          <a class="no-border" href="/springboard" previewlistener="true">
            <h2>Springboard </h2>
          </a>

          <a
            target="_blank"
            class="button action-apply"
            data-job-id="749160"
            href="/l/749160"
           
            previewlistener="true"
          >
            Apply now
          </a>

          <p>👀 54 views</p>

          <p>✅ 1 applied (2%)</p>

          <p>
            <strong>Share this job:</strong>

            <input
              readonly=""
              class="share-job-copy-paste"
              type="text"
              value="https://remoteok.com/remote-jobs/remote-waitlist-career-coach-springboard-749160?ref=sh"
              
            />
            <br />
            <span style={getStyleObjectFromString("font-size:12px;margin-top:-7px;display:block;")}>
              Get a{" "}
              <a
               
                href="https://rok.co/hire-remotely"
                previewlistener="true"
              >
                rok.co
              </a>{" "}
              short link
            </span>
          </p>
        </div>

        <h1 style={getStyleObjectFromString("text-align:left;")}>
          <span style={getStyleObjectFromString("font-weight: 400;")}>Springboard is hiring a </span>
          <br />
          Remote Waitlist Career Coach{" "}
        </h1>

        <div class="markdown">
          <p>The Opportunity</p>
          <p>
            Career Success plays a key role in executing on our mission: our
            personalized approach has given thousands of people access to more
            relevant roles. As a Career Coach, you will work 1:1 or in groups
            with Springboard students on all aspects of their job search and
            career goals, to produce great career outcomes for all Career Track
            graduates. Working closely with a dynamic and empathetic Career
            Success team, you’ll play a significant role in each student’s
            journey as you support them in revamping their careers and, by
            extension, their lives.&nbsp;
          </p>
          <p>
            You must be available to offer a minimum of 12, and no more than 25
            hours of coaching time a week. Note that the range of 12-25 hours
            only includes coaching calls, and does not include any additional
            admin-related work and is billed separately.
          </p>
          <p>
            While the hours you provided are at your discretion and may include
            weekend hours, it is important to consider how the demographics of
            our students (full-time working, families, etc) impact their
            scheduling needs, which can in turn impact how your hours get
            booked.&nbsp;
          </p>
          <p>Responsibilities:</p>
          <ul>
            <li>
              <p>
                Provide 1:1 and/or group career coaching&nbsp; regarding job
                search in technical fields with students in a high-volume,
                online, coaching environment
              </p>
            </li>
            <li>
              <p>
                Respond promptly and supportively to student career concerns and
                questions via email and to manager’s inquiries about students’
                progress
              </p>
            </li>
            <li>
              <p>
                Track outcomes of coaching calls via our student CRM, providing
                detailed notes and information that evaluate risk factors, track
                success, and predict future performance as outlined in the
                resources and protocols by the Springboard Career Success
                Team.&nbsp;
              </p>
            </li>
            <li>
              <p>
                Implement effective coaching strategies to ensure that students
                are competitive candidates to land a job within their support
                window including staying up to date on current trends in
                technical hiring and job search tactics that work&nbsp;
              </p>
            </li>
            <li>
              <p>
                Hold students accountable to the policies designed to ensure we
                are meeting placement rate goals and the integrity of our Job
                Guarantee program.
              </p>
            </li>
            <li>
              <p>
                Support career curriculum and resource development as needed;
                support development of career webinars and owning administration
                and facilitation of them
              </p>
            </li>
            <li>
              <p>
                Escalate and develop intervention plans for students of
                concern&nbsp;
              </p>
            </li>
            <li>
              <p>
                Attending weekly/monthly meetings/training is strongly
                encouraged and, at minimum, the expectation is to review
                recordings of missed meetings and training to stay up to date on
                changes at Springboard, team and coaching updates, etc.&nbsp;
              </p>
            </li>
          </ul>
          <p>You bring:&nbsp;</p>
          <ul>
            <li>
              <p>
                2+ years’ experience in coaching, advising, or
                workforce/employee development in a 1:1 capacity, specifically
                supporting individuals’ job search and career goals for
                technical roles
              </p>
            </li>
            <li>
              <p>
                Comfortability with and ability to coach from both an empathetic
                and accountable perspective
              </p>
            </li>
            <li>
              <p>
                Knowledge of the hiring process and how to conduct an effective
                job search in tech
              </p>
            </li>
            <li>
              <p>
                A track record of producing measurable results, meeting
                deadlines, and balancing multiple priorities and constituencies;
                you are proactive, agile, and flexible
              </p>
            </li>
            <li>
              <p>
                Knowledge and willingness to learn new technology and systems
                (e.g.,&nbsp; Hubspot, LMS, Zoom, Google Docs/Slides)
              </p>
            </li>
            <li>
              <p>
                Outstanding customer service mentality and strong attention to
                detail (in recording student progress and following up on
                questions).
              </p>
            </li>
            <li>
              <p>
                Strong communication skills, especially in listening, coaching,
                advising, and large group presentations, and the ability to
                build rapport and credibility with students and colleagues
                across the company
              </p>
            </li>
          </ul>
          <p>Bonus Point if you have:</p>
          <ul>
            <li>
              <p>Formal coaching education through courses or certifications</p>
            </li>
            <li>
              <p>
                Knowledge of working with job seekers with various visas and
                work authorization requirements
              </p>
            </li>
            <li>
              <p>
                Knowledge of working within Canadian job market contexts&nbsp;
              </p>
            </li>
            <li>
              <p>
                Knowledge of the hiring process and how to conduct an effective
                job search in tech
              </p>
            </li>
            <li>
              <p>
                Knowledge of the software engineering, cybersecurity, data
                analytics, data science, design, and tech sales fields and their
                recruiting/hiring practices
              </p>
            </li>
          </ul>
          <p>Pay is $24 per hour for the first year.</p>
          <p>
            If you are an enthusiastic and dedicated professional who is eager
            to contribute to the growth and development of our students, we
            invite you to apply and join our team of passionate Career Service
            Professionals. Together, we'll help bridge the world’s skills gap!{" "}
          </p>
          <h1 id="salaryandcompensation">Salary and compensation</h1>
          <pre>
            <code>
              {" "}
              No salary data published by company so we estimated salary based
              on similar jobs related to Sales and Sales jobs that are similar:
              $50,000 — $90,000/year &lt;br&gt;
            </code>
          </pre>
          <h1 id="benefits">Benefits</h1>
          <pre>
            <code> 💰 401(k)</code>
          </pre>
          <p>🌎 Distributed team</p>
          <p>⏰ Async</p>
          <p>🤓 Vision insurance</p>
          <p>🦷 Dental insurance</p>
          <p>🚑 Medical insurance</p>
          <p>🏖 Unlimited vacation</p>
          <p>🏖 Paid time off</p>
          <p>📆 4 day workweek</p>
          <p>💰 401k matching</p>
          <p>🏔 Company retreats</p>
          <p>🏬 Coworking budget</p>
          <p>📚 Learning budget</p>
          <p>💪 Free gym membership</p>
          <p>🧘 Mental wellness budget</p>
          <p>🖥 Home office budget</p>
          <p>🥧 Pay in crypto</p>
          <p>🥸 Pseudonymous</p>
          <p>💰 Profit sharing</p>
          <p>💰 Equity compensation</p>
          <p>⬜️ No whiteboard interview</p>
          <p>👀 No monitoring system</p>
          <p>🚫 No politics at work</p>
          <p>🎅 We hire old (and young)</p>
          <p>
            <br />
          </p>
          <h1 id="location">Location</h1>
          <p>
            San Francisco, California, United States
            <br />
          </p>
        </div>
      </div>

      <div style={getStyleObjectFromString("clear:both")}></div>

      <div class="instructions">
        <a
          class="button action-apply apply_749160"
          data-job-id="749160"
          href="/l/749160"
          target="_blank"
          rel="nofollow"
          previewlistener="true"
        >
          Apply for this job
        </a>

        <p style={getStyleObjectFromString("font-size:0.85em")}>
          <strong>
            👉 Please reference you found the job on Remote OK, this helps us
            get more companies to post here, thanks!
          </strong>
          <br />
          <br />
          When applying for jobs, you should NEVER have to pay to apply. You
          should also NEVER have to pay to buy equipment which they then pay you
          back for later. Also never pay for trainings you have to do. Those are
          scams! NEVER PAY FOR ANYTHING! Posts that link to pages with "how to
          work online" are also scams. Don't use them or pay for them. Also
          always verify you're actually talking to the company in the job post
          and not an imposter. A good idea is to check the domain name for the
          site/email and see if it's the actual company's main domain name.
          Scams in remote work are rampant, be careful!{" "}
          <a
            href="https://twitter.com/levelsio/status/1300443073562980353?s=20"
            style={getStyleObjectFromString("font-weight:800;")}
            previewlistener="true"
          >
            Read more to avoid scams
          </a>
          . When clicking on the button to apply above, you will leave Remote OK
          and go to the job application page for that company outside this site.
          Remote OK accepts no liability or responsibility as a consequence of
          any reliance upon information on there (external sites) or here.
        </p>
      </div>
    </div>
  );
};

export default JobDetail;
