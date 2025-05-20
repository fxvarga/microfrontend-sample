interface IWorkflowContentWrapperProps {
  children: React.ReactNode
}
const WorkflowContentWrapper = (props: IWorkflowContentWrapperProps) => {
  const { children } = props;
  return <div className="workflow-canvas"> {children} </div>
}
export default WorkflowContentWrapper;