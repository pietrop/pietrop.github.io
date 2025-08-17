import Head from 'next/head';
const site = require('../data/site');

export default function Home() {
  const { owner, url } = site;
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <p>
        Hi, I'm <a href={`https://uk.linkedin.com/in/${owner.linkedin}`}>Pietro</a>, I am a <a href="/categories/tech">senior software engineer</a>, passionate about early stage products, especially at the intersection of audio / video, news and technology. I created <a href={`${url}/autoedit`}>autoEdit</a>.
      </p>
      <p>
        I also take <a href={`${url}/photos`}>photos↗</a>, film documentaries and write up <a href="/categories/ttqf">'how-tos' "Tips Tricks & Quick Fix"</a> and <a href="/categories/blog">blog posts</a>.
      </p>
      <img src="/img/about/pietro_ba.png" alt="Pietro Buenos Aires Media Party Workshop - bio photo" className="img-rounded img-responsive" width="100%" height="auto" />
      <i><small>Picture from 2016 Buenos Aires Hacks/Hackers Media Party, while giving workshop <a href="/how-to-tell-compelling-stories-out-of-video-interviews.html">"How to craft compelling stories out of video interviews?"</a></small></i>
      <img src="/img/about/pietro_8.jpg" alt="Pietro Buenos Aires Media Party Keynote - bio photo" className="img-rounded img-responsive" width="100%" height="auto" />
      <i><small>Picture from 2017 Buenos Aires Hacks/Hackers Media Party, while giving keynote talk <a href="/10-lessons-video-tools.html">"10 Lessons from building video product tools in the newsroom"</a></small></i>
      <img src="/img/10-lessons-video-tools/pietro-c+js.png" alt="Pietro C+J '17 at Northwestern Keynote - bio photo" className="img-rounded img-responsive" width="100%" height="auto" />
      <i><small>Screenshoot from 2017 C+J '17 Northwestern University, on a panel <a href="/10-lessons-video-tools.html">"Panel: Tools for reporting and storytelling"</a></small></i>
    </div>
  );
}
