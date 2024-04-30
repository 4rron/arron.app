import BackButton from '../../components/back-button/back-button'
import './about.scss'

export default function About() {
    return (
        <div id="about">
            <BackButton targetUrl="/" />
            <h1>About Me</h1>
            <p>
                A software engineer with a passion for figuring out how things
                work, I love getting a chance to not just figure out a way to
                fix a problem, but the best way to fix a problem.
            </p>
            <p>
                <strong>YES,</strong> this leads to my office, basement, and
                shed being full of hobby equipment, as well as every corner of
                my brain having some random knowledge.
            </p>
            <p>
                <strong>NO,</strong> I will not apologize for it.
            </p>
            <p className="red">
                Do not hire me if you just want someone who pushes out code. I
                will not deliver the speed you are looking for and you will not
                deliver the day to day challenges and opportunities that I am
                looking for.
            </p>
            <h2>Now that that's out of the way...</h2>
            <p>
                My name is Arron, and I have a track record of not just doing my
                job, but actively finding and fixing problems within
                organizations with technology. Just a few examples of this
                include:
            </p>
            <ul>
                <li>
                    Researching and updating outdated security system hardware
                    and wiring in access terminals for hotel staff
                </li>
                <li>
                    Replacing a local database monitoring app with a web-app,
                    reducing load on the server significantly while
                    simultaneously reducing the app refresh time from 2 minutes
                    to under 2 seconds
                </li>
                <li>
                    Advocate for accessibility standards, implementing
                    colorblind options for data dashboards in a large call
                    center environment with 0 downtime for adaptation
                </li>
                <li>
                    Repurpose outdated all-in-one computers into employee access
                    stations for time sheet management and training
                </li>
                <li>
                    Implementing a shared codebase and documentation standards
                    into a company that "has always done it this way," leading
                    to an increase in productivity along with a centralized
                    resource for common user questions
                </li>
            </ul>
            <p>
                I could go on, but I think you get the point. Sometimes I'm in
                the ceiling running network cables, sometimes I'm on a call with
                a group of users figuring out what isn't working for them, and
                sometimes I'm head-down working on code. There's not really a
                "typical" day for me, and if that starts to become the case,
                I'll be sure to fix that quickly by finding something that can
                be improved.
            </p>
            <p>
                With that being said, obviously a lot of this is not possible in
                any sort of remote role. That doesn't mean I won't be
                productive, it just means that my approach will be different. In
                my most recent role, I took up a few extra passion projects,
                mainly creating documentation for core components of our app,
                ensuring accessibility standards are taken into consideration
                for new components, and creating a dedicated group for newer
                team members where I was able to guide and mentor them through
                different problems that they were having (while also learning
                quite a bit from them myself!)
            </p>
            <p>
                All in all, I'm not just another code monkey to throw on a team
                and never talk to except for status reports. Give me a team that
                works proactively together to improve their product, and I'll
                fit right in.
            </p>
        </div>
    )
}
