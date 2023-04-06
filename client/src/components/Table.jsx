import React, { useMemo } from "react"
import { useTable } from "react-table"
import styled from "styled-components"

const Wrapper = styled.div`
	padding: 0 40px 40px 40px;
`

const Table = ({ items }) => {
	const columns = useMemo(() => [
		{
			Header: "ID",
			accessor: "_id",
			filterable: "true",
		},
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
		<Wrapper>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps()}>
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
		</Wrapper>
	)
}

export { Table }