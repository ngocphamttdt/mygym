import { DataGrid } from '@mui/x-data-grid';
import { render, screen } from '@testing-library/react'
import { mocked } from 'jest-mock';
import { columns, DataGridDemo, rows } from './Example2'

jest.mock('@mui/x-data-grid', () => ({
  ...jest.requireActual('@mui/x-data-grid'),
  DataGrid: () => <div>Tabe1111</div>
}))

const mockedDataGrid = mocked(DataGrid);

describe('Test DataGridDemo', () => {

  // it('renders init data grid', () => {
  //   render(<DataGridDemo />)

  //   expect(screen.getByText(/Table/)).toBeInTheDocument()
  // })

  it('renders simulator Data grid', () => {

    render(<DataGridDemo />)
    // expect(mockedDataGrid).toBeCalledTimes(1);
    // expect(mockedDataGrid).toHaveBeenCalledWith(
    //   {
    //     rows: rows,
    //     columns: [
    //       expect.objectContaining({ field: 'id' }),
    //       expect.objectContaining({ field: 'firstName' }),
    //       expect.objectContaining({ field: 'lastName' }),
    //       expect.objectContaining({ field: 'age' }),
    //     ],
    //     initialState: {
    //       pagination: {
    //         paginationModel: {
    //           pageSize: 5,
    //         },
    //       },
    //     },
    //     pageSizeOptions: [5],
    //     checkboxSelection: true,
    //     disableRowSelectionOnClick: true,

    //   }, {}
    // )

  })
})