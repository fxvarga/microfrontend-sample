const TopBar = ()=>{
  return <div className="topbar">
    <select className="status-dropdown">
      <option>Status</option>
    </select>
    <button className="btn">More</button>
    <button className="btn">Settings</button>
    <button className="btn">Preview</button>
    <button className="btn btn-primary">Publish</button>
  </div>
}
export default TopBar;