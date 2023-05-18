<template>
  <!-- :selectedRowIndex="3" -->
  <ejs-button style="margin: 2px;" v-on:click="btnClick">Get Record Details</ejs-button>
  <ejs-gantt ref="gantt" :dataSource="data"
             :taskFields="taskFields"
             :treeColumnIndex="1"
             :selectionSettings="selectionOptions"
             :allowSelection="false"
             :height="450">
    <e-columns>
      <e-column field="TaskID" headerText="Task ID" width="120" textAlign="Right"></e-column>
      <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="200"></e-column>
      <e-column field="StartDate" headerText="Start Date" textAlign="Right" format="dd/MM/yyyy" width="120"></e-column>
      <e-column field="Duration" headerText="Duration" textAlign="Right" width="120"></e-column>
    </e-columns>
  </ejs-gantt>
</template>

<script>
import {GanttComponent, ColumnsDirective, ColumnDirective, Selection} from '@syncfusion/ej2-vue-gantt'
import {ButtonComponent} from '@syncfusion/ej2-vue-buttons'
import {projectData} from './data.js'
export default{
  name: 'App',
  components: {
    'ejs-gantt': GanttComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-button': ButtonComponent
  },
  methods:{
    btnClick(){
      let ganttObj = this.$refs.gantt.ej2Instances;
      // ganttObj.selectRow(3);
      // ganttObj.selectRows([0,2,3,7,8]);
      // ganttObj.clearSelection();
      console.log(ganttObj.selectionModule.getSelectedRowIndexes())
      console.log(ganttObj.selectionModule.getSelectedRecords())
    }
  },
  provide:{
    gantt: [Selection]
  },
  data(){
    return{
      data: projectData,
      selectionOptions:{
        type: 'Multiple',
        mode: 'Row',
        enableToggle: true
      },
      taskFields:{
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
      },
    }
  }
}

</script>

<style>
  @import url("https://cdn.syncfusion.com/ej2/material.css");
</style>

