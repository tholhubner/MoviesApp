import React, { useMemo } from "react"
import { useTable } from "react-table"
import { UpdateButton } from "./UpdateButton"
import { DeleteButton } from "./DeleteButton"

const Table = ({ items }) => {
	const columns = useMemo(() => [
		{
			Header: "Name",
			accessor: "name",
			filterable: "true",
		},
		{
			Header: "Rating",
			accessor: "rating",
			filterable: "true",
		},
		{
			Header: "Time",
			accessor: "time",
			Cell: props => <span>{props.value.join(" / ")}</span>,
		},
		{
			Header: "",
			accessor: "delete",
			Cell: props => (
				<UpdateButton id={props.row.original._id} />
			)
		},
		{
			Header: "",
			accessor: "update",
			Cell: props => (
				<DeleteButton id={props.row.original._id} />
			)
		}
	], [])
	const data = useMemo(() => items, [items])
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data })

	return (
		<div className="w-full overflow-x-auto bg-base-300 rounded-md">
			<table {...getTableProps()} className="table-compact w-full bg-base-200 rounded-md">
				<thead className="bg-base-300">
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps()} className="text-start">
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map(row => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map(cell => (
									<td {...cell.getCellProps()}>
										{cell.render("Cell")}
									</td>
								))}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export { Table }