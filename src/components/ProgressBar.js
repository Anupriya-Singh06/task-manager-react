function ProgressBar({ tasks }) {

  const completed = tasks.filter(t => t.completed).length;

  const percent =
    tasks.length === 0 ? 0 : (completed / tasks.length) * 100;

  return (

    <div style={{background:"#ddd",height:"20px",margin:"10px 0"}}>

      <div
        style={{
          width: percent + "%",
          height:"100%",
          background:"green"
        }}
      />

    </div>

  );

}

export default ProgressBar;