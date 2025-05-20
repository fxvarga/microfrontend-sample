import { useCallback, useEffect, useState } from "react";
import WorkflowContentWrapper from "../../../shared/layout/WorkflowContentWrapper"
import React from "react";

const Workflow = React.lazy(()=> import("workflow"));
const TaskList = React.lazy(()=> import("taskList"));
const WorkflowCreate = ()=>{
  const sampleTasks = [
    { id: '1', title: 'Crawl New Titles from Netflix Metadata Store', status: 'completed' },
    { id: '2', title: 'Extract Actor Lists from Title Metadata', status: 'completed' },
    { id: '3', title: 'Deduplicate Actor Entries by Name & ID', status: 'started' },
    { id: '4', title: 'Normalize Actor Name Spellings and Aliases', status: 'not_started' },
    { id: '5', title: 'Enrich Actor Profiles with IMDb and TMDb Data', status: 'not_started' },
    // { id: '6', title: 'Link Actors to Known Genres and Title Types', status: 'not_started' },
    // { id: '7', title: 'Generate Actor Search Tokens and Synonyms', status: 'not_started' },
    // { id: '8', title: 'Detect Actor Role Types (Lead, Supporting, Cameo)', status: 'not_started' },
    // { id: '9', title: 'Index Actor Data into Elasticsearch', status: 'not_started' },
    // { id: '10', title: 'Validate Actor Search Index with Sample Queries', status: 'not_started' },
  ];
  const [inProgressTasks, setInProgressTasks] = useState(sampleTasks);
  const [showSteps, setShowSteps] = useState<string | null>(null);
  useEffect(() => {
    if(showSteps){

    const interval = setInterval(() => {
      setInProgressTasks(prev => {
        const updated = [...prev];
        const currentIndex = updated.findIndex(t => t.status === 'started');
        const nextIndex = updated.findIndex(t => t.status === 'not_started');

        // If all are completed, stop updating
        const allDone = updated.every(task => task.status === 'completed');
        if (allDone) {
          clearInterval(interval);
          setTimeout(() => {
            setInProgressTasks(sampleTasks);   // 👈 Reset the list
            setShowSteps(null);                // 👈 Close the panel
          }, 500); // optional delay for smoother UI
          return updated;
        }

        // Mark current started task as completed
        if (currentIndex !== -1) {
          updated[currentIndex].status = 'completed';
        }

        // Start next not_started task
        if (nextIndex !== -1) {
          updated[nextIndex].status = 'started';
        }

        return updated;
      });
    }, 1000);
    return () => clearInterval(interval); // cleanup on unmount
    }

  }, [showSteps]);
  const onDetailsClick = useCallback((id: string) => {
    setShowSteps(id);
  }, []);
  const memoizedPanelOpen = !!showSteps; // primitive, safe to reuse
  return <WorkflowContentWrapper>
    <div className="step-list-panel"></div>
    <div className={!showSteps ? "content" : "content panelOpen"}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Workflow
          id={"dynamicIdToFetch"}
          onDetailsClick={onDetailsClick}
          panelOpen={memoizedPanelOpen}/>
        </React.Suspense>
      <div className="control-library">
        <TaskList tasks={inProgressTasks} />
      </div>
    </div>
  </WorkflowContentWrapper>
}
export default WorkflowCreate;