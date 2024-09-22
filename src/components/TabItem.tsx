
function TabItem({ icon, text }: any) {
  return (
    <div className="tab-item d-flex gap-sm-4 gap-1 align-items-sm-center align-items-start text-center p-sm-4 p-4">
      <span className="tab-icon">{icon}</span>
      <span className="tab-text">{text}</span>
    </div>
  );
}

export default TabItem;
