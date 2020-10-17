import React from 'react'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import IconButton from '@material-ui/core/IconButton';

import Rating from '../Rating/Rating'

export const book_cols = [


    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 230 },

    {
        field: "link",
        headerName: "Link",
        sortable: false,
        width: 200,
        disableClickEventBubbling: true,
        renderCell: (d) => {
            console.log(d)
        return <a href={d.value} target="_blank" rel="noopener noreferrer">{d.value}</a>
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
    { id: 1, name: 'PostgreSQL: Up and Running', link: 'https://en.wikipedia.org/wiki/PostgreSQL', last_modified: 'October 14, 2020' },
    { id: 2, name: 'Mastering PostgreSQL', link: 'https://en.wikipedia.org/wiki/PostgreSQL', last_modified: 'March 14, 2020' },

    { id: 3, name: 'PostgreSQL 9. 0 High Performance', link: 'https://en.wikipedia.org/wiki/PostgreSQL', last_modified: 'January 14, 2020' },

    { id: 4, name: 'PostgreSQL Developer', link: 'https://en.wikipedia.org/wiki/PostgreSQL', last_modified: 'November 14, 2020' },

    { id: 4, name: 'PostgreSQL Administration', link: 'https://en.wikipedia.org/wiki/PostgreSQL', last_modified: 'November 14, 2020' },
    { id: 4, name: 'PostgreSQL for DBA', link: 'https://en.wikipedia.org/wiki/PostgreSQL', last_modified: 'November 14, 2020' }

];



