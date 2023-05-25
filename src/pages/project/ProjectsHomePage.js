import ProjectDashboardCostChart from "../../components/Projects/ProjectDashboard/Charts/ProjectDashboardCostChart";
import MyChart from "../../components/Projects/ProjectDashboard/Charts/ProjectDashboardTasksChart";
import ProjectDashboardTimeChart from "../../components/Projects/ProjectDashboard/Charts/ProjectDashboardTimeChart";
import ProjectDashboardTable from "../../components/Projects/ProjectDashboard/ProjectDashboardDetailsTable";
import ProjectModuleLayout from "../../layouts/ProjectModuleLayout/ProjectModuleLayout";

export default function ProjectsHomePage() {
  return (
    <div>
      <ProjectModuleLayout />

      <div class="container">
        <div class="position-relative">
          <div class="position-absolute top-0 start-0 translate-middle"></div>
          <div class="position-absolute top-50 start-100 translate-middle"></div>
          <div class="position-absolute bottom-0 start-50 translate-middle"></div>
          <div class="position-absolute bottom-50 start-100 translate-middle"></div>
        </div>
        <div class="row">
          <div class="col">
            Details
            <ProjectDashboardTable />
          </div>
          <div class="col">
            Task
            <MyChart />
          </div>
        </div>
        <div class="row">
          <div class="col">
            Time
            <ProjectDashboardTimeChart />
          </div>
          <div class="col">
            Cost
            <ProjectDashboardCostChart />
          </div>
        </div>
      </div>
    </div>
  );
}
