import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Selection, Toolbar} from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { Button } from '../components';

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Search'];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="fonts" />
      <div>
      <button type='button' className='text-white pl-3 pr-3 pt-1 pb-1 hover:drop-shadow-xl hover:bg-light-gray mb-2 mr-3' style={{ background: 'lightblue', borderRadius: '20px'}}>
                                Edit
      </button>
      <button type='button' className='text-white pl-3 pr-3 pt-1 pb-1 hover:drop-shadow-xl hover:bg-light-gray mb-2 mr-3' style={{ background: 'pink', borderRadius: '20px'}}>
                                Add
      </button>
      <button type='button' className='text-white pl-3 pr-3 pt-1 pb-1 hover:drop-shadow-xl hover:bg-light-gray mb-2 mr-3' style={{ background: 'lightgreen', borderRadius: '20px'}}>
                                Remove
      </button>
      </div>
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        enableHover={false}
        pageSettings={{ pageCount: 5 }}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Selection, Resize, Sort, ContextMenu, Toolbar, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Orders;