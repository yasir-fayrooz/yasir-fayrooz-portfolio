import styles from './projects.module.css';
import React, { useRef, useState } from 'react';
import { IWindowChildProps } from '../../shared/interfaces';
import Project from '../../components/project/project';
import { projectsList } from './projects-list';

const ProjectsModal = (props: IWindowChildProps) => {
  const [selectedProject, setSelectedProject] = useState<JSX.Element | undefined>(undefined);
  const [projectName, setProjectName] = useState<string>('');

  const projectsListDiv = useRef<HTMLDivElement>(null);
  const projectDiv = useRef<HTMLDivElement>(null);

  function selectProject(element: JSX.Element, name: string) {
    projectsListDiv.current?.classList.remove(styles.slideIn);
    projectsListDiv.current?.classList.add(styles.slideOut);
    setTimeout(() => {
      setSelectedProject(element);
      setProjectName(name);
      projectDiv.current?.classList.remove(styles.slideOut);
      projectDiv.current?.classList.add(styles.slideIn);
    }, 500);
  }

  function backToProjects() {
    projectDiv.current?.classList.remove(styles.slideIn);
    projectDiv.current?.classList.add(styles.slideOut);
    setTimeout(() => {
      projectsListDiv.current?.classList.remove(styles.slideOut);
      projectsListDiv.current?.classList.add(styles.slideIn);

      setSelectedProject(undefined);
    }, 500);
  }

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex justify-center m-3">
        <h3>{selectedProject ? projectName : 'Select a project to view in detail'}</h3>
      </div>
      {!selectedProject ? (
        <div className={`overflow-auto ${styles.slideIn}`} ref={projectsListDiv}>
          {projectsList.map((projectDesc) => {
            return (
              <div
                className="mb-5"
                key={projectDesc.key}
                onClick={() => selectProject(projectDesc.elementRef(), projectDesc.name)}
              >
                <Project
                  title={projectDesc.name}
                  description={projectDesc.description}
                  fromDate={projectDesc.fromDate}
                  toDate={projectDesc.toDate}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className={`flex flex-col w-full h-full min-h-0 ${styles.slideIn}`} ref={projectDiv}>
          <div className="grow overflow-y-auto mx-2">{React.cloneElement(selectedProject)}</div>

          <div className="flex justify-center my-4">
            <button className="text-sky-300" onClick={() => backToProjects()}>
              <div className="flex items-center">
                {' '}
                <span className="material-symbols-outlined">arrow_back_ios</span>
                <span className=" underline">Back to projects</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsModal;
