const Skills = () => {
  return (
    <div id="skell" className="px-4 max-w-screen-md">
      <h2 className="text-2xl">My Skills</h2>
      <div className="py-10">
        <div>
          <label>HTML</label>
          <span className="w-full h-6 bg-gray-900 block rounded-xl overflow-hidden">
            <span className="w-6/6 h-full bg-cyan-400 block"></span>
          </span>
        </div>
        <div>
          <label>Css</label>
          <span className="w-full h-6 bg-gray-900 block rounded-xl overflow-hidden">
            <span className="w-11/12 h-full bg-cyan-400 block"></span>
          </span>
        </div>
        <div>
          <label>Js</label>
          <span className="w-full h-6 bg-gray-900 block rounded-xl overflow-hidden">
            <span className="w-5/6 h-full bg-cyan-400 block"></span>
          </span>
        </div>
        <div>
          <label>React</label>
          <span className="w-full h-6 bg-gray-900 block rounded-xl overflow-hidden">
            <span className="w-11/12 h-full bg-cyan-400 block"></span>
          </span>
        </div>
        <div>
          <label>NodeJS</label>
          <span className="w-full h-6 bg-gray-900 block rounded-xl overflow-hidden">
            <span className="w-10/12 h-full bg-cyan-400 block"></span>
          </span>
        </div>
        <div>
          <label>NextJs</label>
          <span className="w-full h-6 bg-gray-900 block rounded-xl overflow-hidden">
            <span className="w-3/6 h-full bg-cyan-400 block"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
