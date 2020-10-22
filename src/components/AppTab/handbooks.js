import React from 'react'

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import IconButton from '@material-ui/core/IconButton';
import Rating from '../Rating/Rating'

export const book_cols = [


    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 230 },

    {
        field: "link",
        headerName: "Download",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: (d) => {

            console.log(d)
        return <div> <IconButton aria-label="download" href={d.value} target="_blank">
                            <CloudDownloadIcon fontSize="large" /></IconButton></div>
        }
    },


    { field: 'last_modified', headerName: 'Last Modified', width: 130 },
    {
        field: "",
        headerName: "Rating",
        sortable: false,
        width: 300,
        disableClickEventBubbling: true,
        renderCell: () => {
            return < Rating />
        }
    }
];

export const r_book_rows = [
    { id: 1, name: 'Benchmark in Action', link: '/benchmark.pdf', last_modified: 'October 14, 2020' },
    { id: 2, name: 'Benchmark Essentials', link: '/benchmark.pdf', last_modified: 'March 14, 2020' },

    { id: 3, name: 'Benchmark Cookbook', link: '/benchmark.pdf', last_modified: 'January 14, 2020' },

    { id: 4, name: 'Benchmark Redis', link: '/benchmark.pdf', last_modified: 'November 14, 2020' },

    { id: 4, name: 'Benchmark 4.x Cookbook: ', link: '/benchmark.pdf', last_modified: 'November 14, 2020' },
    { id: 4, name: 'Learning Benchmark', link: '/benchmark.pdf', last_modified: 'November 14, 2020' }

];


export const g_book_rows = [
    { id: 1, name: 'Pro Pricing', link: '/benchmark.pdf', last_modified: 'October 14, 2020' },
    { id: 2, name: 'Pricing basics', link: '/benchmark.pdf', last_modified: 'March 14, 2020' },

    { id: 3, name: 'Pricing Advance', link: '/benchmark.pdf', last_modified: 'January 14, 2020' },


];
