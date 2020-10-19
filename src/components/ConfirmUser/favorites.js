import React from 'react'

export const fav_cols = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'type', headerName: 'Type', width: 300 },

    {
        field: "link",
        headerName: "Link",
        sortable: false,
        width: 500,
        disableClickEventBubbling: true,
        renderCell: (d) => {
        return <a href={d.value} target="_blank" rel="noopener noreferrer">{d.value}</a>
        }
    }
];

export let fav_rows = [
    { id: '1', type: 'Blog Post', link: 'https://www.enterprisedb.com/training/postgres-certification'},
];



