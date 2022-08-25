import Image from 'next/image';

export const PSM = () => {
  return (
    <div className="flex flex-col">
      <h3>Role:</h3>
      <p>Co-developer, full stack</p>
      <h3 className="mt-2">Achievements:</h3>
      <p>- Released a full stack solution for CrimeStoppers Tasmania's website, a major client under Motorola.</p>
      <p>- Achieved media press recognition.</p>
      <p>- Set up the whole cloud infrastructure, CI/CD Pipelines & Devops for the major project.</p>
      <p>- Did a lot of work on both the frontend and backend with another team member.</p>
      <p>- Re-worked the Identity Server solution for the project.</p>
      <h3 className="mt-2">Description:</h3>
      <p>
        Public Safety Management was a multi-part solution and major project I played a part in for our sponsored client
        at Motorola.
      </p>
      <p className="mt-2">
        The publically accessible website was a simple, mobile friendly web application allowing the general public to
        report crimes anonymously to management. You could also upload media files which I implemented the functionality
        for using Azure Blob Storage and utilisation of various cloud features.
      </p>
      <p className="mt-2">
        The management portal is a complex web application backed by an identity server and separate admin portal for
        registering users, sending confirmation emails/password resets and assigning roles/permissions.
      </p>
      <p className="mt-2">
        The management portal also had an audit trail API running as a microservice to log out every action taken by a
        user for a report to ensure auditability. Other features included was the encoding and streaming/downloading of
        media files.
      </p>
      <p className="mt-2">
        Furthermore, statistics based on months or years was included to show various types of information for reports
        such as fequency of reporting dates, report type ratios and many more which were displayed using the
        user-friendly charting framework ngx-charts.
      </p>
      <p className="mt-2">
        The whole solution was developed using Angular 13, .NET 6, MongoDB, SQL Server (for identity), MJML for emails
        and the Azure cloud to host our solution.
      </p>
    </div>
  );
};

export const autoPTT = () => {
  return (
    <div className="flex flex-col">
      <h3>Role:</h3>
      <p>Utilised existing software, modified to suit my needs.</p>
      <h3 className="mt-2">Achievements:</h3>
      <p>
        - Modified an existing app written in C# & WPF to support Push-to-talking radios over a Bluetooth connection.
      </p>
      <p>- Automated the way of doing a manual tedious task, increasing the efficiency of our office vastly.</p>
      <h3 className="mt-2">Description:</h3>
      <p>
        We were manually testing hundreds of cables at Motorola for RF EMI interference. We initially used a radio and
        manually used the push-to-talk (PTT) button to test cables.
      </p>
      <p className="mt-2">
        After this task became tedious, my manager showed me a software developed in-house that talked to Radios using a
        C# script file. I took a look at the software and realised it was only operable over a cable connection at the
        time.
      </p>
      <p className="mt-2">
        I modified the app to have it work over a Bluetooth connection and set up a script to auto-PTT every second.
      </p>
      <p className="mt-2">
        Radios would sometimes disconnect from their Bluetooth connection. I solved this by implementing auto-reconnect
        code every 10 seconds. This helped keep our radios consistently PTTing over time.
      </p>
      <p className="mt-2">
        The process of manual PTTing radios became automatic and all we had to do then was go replace batteries and
        cables every few hours afterwards.
      </p>
    </div>
  );
};

export const noccApp = () => {
  return (
    <div className="flex flex-col">
      <h3>Role:</h3>
      <p>Legacy app support, sole developer of the re-worked solution</p>
      <h3 className="mt-2">Achievements:</h3>
      <p>- Supported an existing solution developed in-house after a lead developer resigned.</p>
      <p>- Did not know Visual Basic & Winforms. Learned it on the job while supporting.</p>
      <p>- Praised for my hard work numerous times by the Network Operations Control Centre (NOCC) team.</p>
      <p>
        - Promised to re-work the solution before I resigned. Achieved a reworked modernised solution within a month.
      </p>
      <h3 className="mt-2">Description:</h3>
      <p>
        The NOCC Notification App was an internal tool developed by an ex-Motorola employee that allowed our NOCC team
        to send out emails to customers in cases of outages to our networks.
      </p>
      <p className="mt-2">
        I was tasked to support the application and did so for many months. It was clunky, poorly designed and used an
        old framework. There was a lot of manual supporting I had to do such as small modifications to email templates
        would have to be requested to me before they were done.
      </p>
      <p className="mt-2">
        I wanted to streamline the process and allow the NOCC to be able to modify distribution lists, create their own
        templates and send out emails more efficiently. I came up with a proof of concept and design for a re-worked
        version of the application shortly later.
      </p>
      <p className="mt-2">
        Some of the tech I used included (but not limited to) Angular 13, .NET 6, MJML for the email templates, MongoDB
        to store our data, Google OAuth (made it so you could only sign in using motorola internal emails for security)
        and finally, a vast permission based system for each user.
      </p>
      <p className="mt-2">
        The app also talks to an SMTP server hosted on premises and another service which fetched data for incidents and
        incident management. I had versioned the application too and released numerous bugfixes and features before
        leaving Motorola. I was praised for the work I did to help the team out vastly and eventually get rid of the
        legacy software.
      </p>
    </div>
  );
};

export const motorolaSWAM = () => {
  return (
    <div className="flex flex-col">
      <h3>Role:</h3>
      <p>Sole developer</p>
      <h3 className="mt-2">Achievements:</h3>
      <p>- First full stack internal application developed for Motorola Solutions.</p>
      <p>- Re-worked the application months later and improved efficiency and speed of the API vastly.</p>
      <p>
        - Removed the need to manually configure each router with its configuration files. Seamlessly applying
        configurations to routers using only 1 csv file saved a ton of time.
      </p>
      <h3 className="mt-2">Description:</h3>
      <p>
        Motorola SWAM was an internal tool I developed for Motorola Solutions to make the process of applying
        configurations to a router seamless instead of manually applying each file to a router.
      </p>

      <p className="mt-2">
        I cannot talk much about it due to it being an internal tool but it was a full stack application developed using
        SQL Server, .NET 5 Web API & Angular 12. It was hosted on-premises at the end and available only on our internal
        network.
      </p>

      <p className="mt-2">
        It grabs a tar.gz zipped file and unzips it, reads variables prefixed with dollar signs ($) and uses that
        baseline configuration to replace those variables when a user uploads a csv file with the variables in the
        header cells. The user gets to select which baseline configuration file to use and what version they can then
        download later once applying a configuration.
      </p>

      <p className="mt-2">
        This made the process of applying 1 configuration to each router manually much more smoother. A user can have
        hundreds of configurations in a csv file separated by rows and the application would create those hundreds on
        the fly for you to download later.
      </p>
    </div>
  );
};

export const AIPacman = () => {
  return (
    <div className="flex flex-col">
      <h3>Role:</h3>
      <p>Python Programmer</p>
      <h3 className="mt-2">Achievements:</h3>
      <p>- My team came 3rd place out of 74 teams in total at the end for best AI.</p>
      <p>- Learned AI techniques such as Q-Learning with function approximation.</p>
      <p>- Learned well known search algorithms such as A* search.</p>
      <h3 className="mt-2">Description:</h3>
      <p>
        My final year of Computer Science at RMIT University consisted of an AI class I took that helped me learn a ton
        about modern AI techniques. The major project was a competition between 74 teams (3 in each team).
      </p>

      <p className="mt-2">
        The contest was based on a mirrored Pacman randomised grid where we had to control 2 Pacmans and gather as many
        points as possible from the other teams base while defending our own base. At the end, our team finished 3rd
        place out of 74 teams for best AI developed.
      </p>

      <div className="max-h-lg max-w-lg my-2">
        <Image src="/images/projects/AIPacman.png" width="488" height="316" layout="responsive" />
      </div>

      <p className="mt-2">
        We also developed a wiki for our private repo and a presentation. To learn more about the techniques we used,
        watch our presentation below:
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pOlKvY68YU0"
        title="Art-of-fish-oil-intelligence Presentation"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export const swordLife = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mb-2">
        <h3>Repository:</h3>
        <a
          className="ml-2 text-sky-300 underline cursor-pointer"
          href="https://github.com/yasir-fayrooz/Swordlife"
          target="_blank"
        >
          SwordLife
        </a>
      </div>

      <h3>Role:</h3>
      <p>Lead Programmer, Animator</p>
      <h3 className="mt-2">Achievements:</h3>
      <p>- Purchased a C# book and learned the programming language for the first time.</p>
      <p>- Released the final product on the Google Play store with the help of my team.</p>
      <p>- Lead the development lifecycle and learned Unity from scratch.</p>
      <h3 className="mt-2">Description:</h3>
      <p>
        SwordLife was a capstone project held in the final year of my university studies at Deakin University in 2017.
        We consisted of 7 members on the team, each with a specific role assigned to them to ensure the project is
        completed in a timely manner.
      </p>

      <div className="max-h-xl max-w-xl my-2">
        <Image src="/images/projects/swordlife_team.jpg" width="460" height="259" layout="responsive" />
      </div>

      <p>
        My role consisted solely to program the games logic in C# using the Unity game engine. I had no experience with
        Unity and little programming knowledge at the time. I decided to take initiative and learn all of these
        unfamiliar concepts on my own.
      </p>
      <p className="mt-2">
        I bought a C# book and managed to learn so much. Even though this project was horribly coded, It helped me build
        my foundational programming skills. This project was one of the main reasons why I wanted to study Computer
        Science after completing my previous degrees.
      </p>
      <p className="mt-2">
        At the end, we managed to publish this game on the Google Play store and got many of our friends to try it out.
        The game was an endless swiping based game where you had to dodge projectiles coming at you in a specific
        direction. The game gets progressively harder and faster as time goes on and you score points.
      </p>
    </div>
  );
};
