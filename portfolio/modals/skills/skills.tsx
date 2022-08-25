import styles from './skills.module.css';
import React, { useEffect, useRef } from 'react';
import { IWindowChildProps, WindowState } from '../../shared/interfaces';

const SkillsModal = (props: IWindowChildProps) => {
  const skillsTables = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    new ResizeObserver((entries) => skillsTableSize(entries)).observe(skillsTables.current!);
  }, []);

  function skillsTableSize(entries: ResizeObserverEntry[]) {
    entries.forEach((entry) => {
      if (skillsTables.current) {
        if (entry.contentRect.width < 300) {
          skillsTables.current.style.fontSize = '0.8em';
        } else {
          skillsTables.current.style.fontSize = '1em';
        }
      }
    });
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-center m-3">
        <h3>My skills 💪</h3>
      </div>
      <p className="mx-10 mb-2">
        Below you can find my skills and how i rate myself in that skill with moon emojis / 5.
      </p>
      <div className="grow mb-1 overflow-y-auto">
        <div ref={skillsTables} className="flex justify-center">
          {/* LANGUAGES */}
          <div className="flex flex-col">
            <h3 className="my-4">Languages:</h3>
            <table>
              <thead>
                <tr>
                  <th className="neon-text">Skill</th>
                  <th className="neon-text">Moon Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>C#</td>
                  <td>
                    <p className="ml-5">🌕🌕🌕🌕🌕</p>
                  </td>
                </tr>
                <tr>
                  <td>HTML5</td>
                  <p className="ml-5">🌕🌕🌕🌕🌕</p>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <p className="ml-5">🌕🌕🌕🌕🌗</p>
                </tr>
                <tr>
                  <td>TypeScript</td>
                  <p className="ml-5">🌕🌕🌕🌕🌗</p>
                </tr>
                <tr>
                  <td>CSS3</td>
                  <p className="ml-5">🌕🌕🌕🌕🌑</p>
                </tr>
                <tr>
                  <td>Python</td>
                  <p className="ml-5">🌕🌕🌕🌗🌑</p>
                </tr>
                <tr>
                  <td>VBA</td>
                  <p className="ml-5">🌕🌕🌕🌗🌑</p>
                </tr>
                <tr>
                  <td>Java</td>
                  <p className="ml-5">🌕🌕🌕🌑🌑</p>
                </tr>
                <tr>
                  <td>C++</td>
                  <p className="ml-5">🌕🌕🌕🌑🌑</p>
                </tr>
              </tbody>
            </table>

            {/* FRAMEWORKS */}
            <h3 className="my-4">Frameworks:</h3>
            <table>
              <thead>
                <tr>
                  <th className="neon-text">Skill</th>
                  <th className="neon-text">Moon Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Angular</td>
                  <td>
                    <p className="ml-5">🌕🌕🌕🌕🌕</p>
                  </td>
                </tr>
                <tr>
                  <td>.NET</td>
                  <p className="ml-5">🌕🌕🌕🌕🌕</p>
                </tr>
                <tr>
                  <td>Bootstrap</td>
                  <p className="ml-5">🌕🌕🌕🌕🌕</p>
                </tr>
                <tr>
                  <td>TailwindCSS</td>
                  <p className="ml-5">🌕🌕🌕🌕🌗</p>
                </tr>
                <tr>
                  <td>React</td>
                  <p className="ml-5">🌕🌕🌕🌕🌑</p>
                </tr>
                <tr>
                  <td>Next.Js</td>
                  <p className="ml-5">🌕🌕🌕🌕🌑</p>
                </tr>
                <tr>
                  <td>OAuth 2.0</td>
                  <p className="ml-5">🌕🌕🌕🌗🌑</p>
                </tr>
                <tr>
                  <td>OIDC</td>
                  <p className="ml-5">🌕🌕🌕🌗🌑</p>
                </tr>
                <tr>
                  <td>Identity Server</td>
                  <p className="ml-5">🌕🌕🌕🌗🌑</p>
                </tr>
              </tbody>
            </table>

            {/* TOOLS & OTHER */}
            <h3 className="my-4">Tools & Other:</h3>
            <table>
              <thead>
                <tr>
                  <th className="neon-text">Skill</th>
                  <th className="neon-text">Moon Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Git</td>
                  <td>
                    <p className="ml-5">🌕🌕🌕🌕🌕</p>
                  </td>
                </tr>
                <tr>
                  <td>MongoDB</td>
                  <p className="ml-5">🌕🌕🌕🌕🌕</p>
                </tr>
                <tr>
                  <td>CI/CD</td>
                  <p className="ml-5">🌕🌕🌕🌕🌕</p>
                </tr>
                <tr>
                  <td>NPM, Nuget</td>
                  <p className="ml-5">🌕🌕🌕🌕🌕</p>
                </tr>
                <tr>
                  <td>Azure, Cloud</td>
                  <p className="ml-5">🌕🌕🌕🌕🌗</p>
                </tr>
                <tr>
                  <td>Node.JS</td>
                  <p className="ml-5">🌕🌕🌕🌕🌑</p>
                </tr>
                <tr>
                  <td>Devops</td>
                  <p className="ml-5">🌕🌕🌕🌗🌑</p>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;
