import React from "react";
import TaskSearch from "./TaskSearch";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    <div>
      <section className="mb-20" id="tasks">
        <div className="container">
          <TaskSearch />

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction />
            <div className="overflow-auto">
              <TaskList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
