import { Fragment } from 'react';

const Table = ({data, config, keyFn}) => {

    const renderedRows = data.map((rowData) => {

        const renderedCells = config.map((column) => {
            return <td className="p-3" key={column.label}>{column.render(rowData)}</td>;
        })

        return(
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        )
    });

    const renderedHeader = config.map((column) => {
        return column.header ? <Fragment key={column.label}>{column.header()}</Fragment> : <th key={column.label}>{column.label}</th>
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeader}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
  )
}

export default Table