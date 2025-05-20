interface IShellProps{
  children: React.ReactNode
}
const Shell = (props:IShellProps)=>{
  const {children} = props;
  return <div className="app-shell"> {children} </div>
}
export default Shell;