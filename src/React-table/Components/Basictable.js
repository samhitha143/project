import React,{ useMemo} from 'react'
import {Columns} from './React-table/Components/Columns';
import MOCK_DATA  from './React-table/Components/MOCK_DATA.json';
import {useTable} from 'react-table';
import './Table.css';
function Basictable() {
    const columns=useMemo(()=>Columns,[])
    const data=useMemo(()=>MOCK_DATA,[])
    const tableInstance=useTable({
        columns,
        data
    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    }=tableInstance
    return (
        <div>
           <table {...getTableProps()}>
               <thead>
                   {headerGroups.map((headerGroups)=>(       
               <tr {...headerGroups.getHeaderGroupProps()}> 
               {headerGroups.headers.map((columns)=>(
                 <th {...columns.getHeaderProps()}>
                     {columns.render('Header')}
                 </th>
               ))}
               </tr>
                   ))}
               </thead>
               <tbody {...getTableBodyProps()}>
                   {rows.map((row)=>{
                         prepareRow(row)
                         return(
                        <tr{...row.getRowProps()}>
                        {row.cells.map((cell)=>{
                                return <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                            })} 
                        </tr>
                         )

                   })}
                    
                     
               </tbody>
           </table>
        </div>
    )
}

export default Basictable
