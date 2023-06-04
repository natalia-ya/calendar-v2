import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { orderDetails, contextMenuItems, orderGrid } from "../../data/dummy";
import { Header } from "../components";

const Orders = () => {
  return (
    <div>
      <Header category="Page" title="Orders" />
    </div>
  );
};

export default Orders;
